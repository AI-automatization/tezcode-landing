import { afterEach, describe, expect, it, vi } from "vitest";
import { forwardToHamshirago, type ForwardDeps } from "./hamshirago-leads";
import type { ContactData } from "./contact";

const data = { name: "Test", phone: "+998901234567", message: "salom" } as ContactData;

function makeDeps(responses: Array<number | Error>, key: string | null = "k"): {
  deps: ForwardDeps;
  fetchFn: ReturnType<typeof vi.fn>;
  notify: ReturnType<typeof vi.fn>;
  logError: ReturnType<typeof vi.fn>;
  logWarn: ReturnType<typeof vi.fn>;
} {
  let i = 0;
  const fetchFn = vi.fn(async () => {
    const r = responses[Math.min(i++, responses.length - 1)];
    if (r instanceof Error) throw r;
    return new Response(null, { status: r });
  });
  const notify = vi.fn(async () => true);
  const logError = vi.fn();
  const logWarn = vi.fn();
  const deps: ForwardDeps = {
    fetchFn: fetchFn as unknown as typeof fetch,
    sleep: async () => {},
    notify,
    logError,
    logWarn,
    key: key ?? undefined,
  };
  return { deps, fetchFn, notify, logError, logWarn };
}

afterEach(() => vi.restoreAllMocks());

describe("forwardToHamshirago", () => {
  it("panel 200: one call, no alert", async () => {
    const { deps, fetchFn, notify, logError } = makeDeps([200]);
    const r = await forwardToHamshirago(data, deps);
    expect(r).toEqual({ ok: true });
    expect(fetchFn).toHaveBeenCalledTimes(1);
    expect(notify).not.toHaveBeenCalled();
    expect(logError).not.toHaveBeenCalled();
  });

  it("panel 500 always: 3 attempts, then alert once and error log with status", async () => {
    const { deps, fetchFn, notify, logError } = makeDeps([500]);
    const r = await forwardToHamshirago(data, deps);
    expect(r.ok).toBe(false);
    expect(fetchFn).toHaveBeenCalledTimes(3);
    expect(notify).toHaveBeenCalledTimes(1);
    expect(String(notify.mock.calls[0][0])).toContain("panelga tushmadi");
    expect(logError).toHaveBeenCalledTimes(1);
    expect(JSON.stringify(logError.mock.calls[0])).toContain("500");
    expect(JSON.stringify(logError.mock.calls[0])).not.toContain("+998901234567");
  });

  it("500 then 200: recovers, no alert", async () => {
    const { deps, fetchFn, notify } = makeDeps([500, 200]);
    const r = await forwardToHamshirago(data, deps);
    expect(r).toEqual({ ok: true });
    expect(fetchFn).toHaveBeenCalledTimes(2);
    expect(notify).not.toHaveBeenCalled();
  });

  it("network error is retried and alerted", async () => {
    const { deps, fetchFn, notify } = makeDeps([new Error("boom")]);
    const r = await forwardToHamshirago(data, deps);
    expect(r.ok).toBe(false);
    expect(fetchFn).toHaveBeenCalledTimes(3);
    expect(notify).toHaveBeenCalledTimes(1);
  });

  it("4xx is not retried but is alerted", async () => {
    const { deps, fetchFn, notify } = makeDeps([401]);
    await forwardToHamshirago(data, deps);
    expect(fetchFn).toHaveBeenCalledTimes(1);
    expect(notify).toHaveBeenCalledTimes(1);
  });

  it("same externalId across retries", async () => {
    const { deps, fetchFn } = makeDeps([500, 500, 200]);
    await forwardToHamshirago(data, deps);
    const ids = fetchFn.mock.calls.map((c) => JSON.parse((c[1] as RequestInit).body as string).externalId);
    expect(new Set(ids).size).toBe(1);
  });

  it("missing key: explicit warning, no fetch", async () => {
    const { deps, fetchFn, logWarn } = makeDeps([200], null);
    const r = await forwardToHamshirago(data, deps);
    expect(r).toEqual({ ok: false, skipped: "no-key" });
    expect(fetchFn).not.toHaveBeenCalled();
    expect(logWarn).toHaveBeenCalledTimes(1);
  });

  it("missing phone: reason logged, no fetch, no alert", async () => {
    const { deps, fetchFn, notify, logWarn } = makeDeps([200]);
    const r = await forwardToHamshirago({ ...data, phone: undefined }, deps);
    expect(r).toEqual({ ok: false, skipped: "no-phone" });
    expect(fetchFn).not.toHaveBeenCalled();
    expect(notify).not.toHaveBeenCalled();
    expect(logWarn).toHaveBeenCalledTimes(1);
  });
});
