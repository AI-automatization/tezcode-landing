import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

// Brand-first OG card: the real Tezcode logo + wordmark carry the image.
// Variants: "light" (default), "navy", "split" — pick via ?v=

async function logoDataUri(origin: string, file: string): Promise<string> {
  const res = await fetch(new URL(`/${file}`, origin));
  const buf = new Uint8Array(await res.arrayBuffer());
  let bin = "";
  const chunk = 8192;
  for (let i = 0; i < buf.length; i += chunk) {
    bin += String.fromCharCode(...buf.subarray(i, i + chunk));
  }
  return `data:image/png;base64,${btoa(bin)}`;
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const variant = searchParams.get("v") ?? "light";
  const tagline =
    searchParams.get("tagline") ?? "O'zbekiston biznesini AI bilan tizimlashtiramiz";

  const origin = req.nextUrl.origin;

  if (variant === "navy") {
    const logo = await logoDataUri(origin, "tezcode-logo-white.png");
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0a1630",
            backgroundImage:
              "radial-gradient(ellipse 900px 560px at 50% 0%, rgba(0,64,255,0.35), transparent), linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "100% 100%, 56px 56px, 56px 56px",
            fontFamily: "sans-serif",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} width={128} height={128} alt="" />
          <div
            style={{
              fontSize: 108,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              marginTop: 8,
              display: "flex",
            }}
          >
            Tezcode
          </div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: "0.42em",
              textTransform: "uppercase",
              color: "#7da2ff",
              marginTop: 14,
              display: "flex",
            }}
          >
            AI Software Factory
          </div>
          <div
            style={{
              fontSize: 27,
              color: "rgba(242,245,251,0.72)",
              marginTop: 26,
              display: "flex",
            }}
          >
            {tagline}
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 44,
              fontSize: 22,
              fontWeight: 600,
              color: "#7da2ff",
              display: "flex",
            }}
          >
            tezcode.dev
          </div>
        </div>
      ),
      { width: 1200, height: 630 },
    );
  }

  if (variant === "split") {
    const logo = await logoDataUri(origin, "tezcode-logo-ink.png");
    const logoWhite = await logoDataUri(origin, "tezcode-logo-white.png");
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            backgroundColor: "#f5f7fb",
            backgroundImage:
              "linear-gradient(to right, rgba(12,26,46,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(12,26,46,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px, 56px 56px",
            fontFamily: "sans-serif",
          }}
        >
          {/* Left — brand block */}
          <div
            style={{
              flex: 1.25,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "72px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo} width={96} height={96} alt="" />
              <div
                style={{
                  fontSize: 88,
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "#0c1a2e",
                  display: "flex",
                }}
              >
                Tezcode
              </div>
            </div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 600,
                letterSpacing: "0.34em",
                textTransform: "uppercase",
                color: "#0038d8",
                marginTop: 22,
                display: "flex",
              }}
            >
              AI Software Factory
            </div>
            <div
              style={{
                fontSize: 27,
                color: "#3d4c63",
                marginTop: 22,
                maxWidth: 560,
                lineHeight: 1.4,
                display: "flex",
              }}
            >
              {tagline}
            </div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 600,
                color: "#64748b",
                marginTop: 40,
                display: "flex",
              }}
            >
              tezcode.dev
            </div>
          </div>

          {/* Right — navy brand panel with oversized glyph */}
          <div
            style={{
              flex: 0.85,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "36px",
              borderRadius: 36,
              backgroundColor: "#0a1630",
              backgroundImage:
                "radial-gradient(ellipse 480px 380px at 50% 20%, rgba(0,64,255,0.4), transparent)",
              boxShadow: "0 24px 60px rgba(0,64,255,0.25)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoWhite} width={280} height={280} alt="" />
          </div>
        </div>
      ),
      { width: 1200, height: 630 },
    );
  }

  // default: "light" — centered brand on paper
  const logo = await logoDataUri(origin, "tezcode-logo-ink.png");
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f7fb",
          backgroundImage:
            "radial-gradient(ellipse 900px 500px at 50% 0%, rgba(0,64,255,0.10), transparent), linear-gradient(to right, rgba(12,26,46,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(12,26,46,0.05) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 56px 56px, 56px 56px",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={128} height={128} alt="" />
        <div
          style={{
            fontSize: 108,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#0c1a2e",
            marginTop: 8,
            display: "flex",
          }}
        >
          Tezcode
        </div>
        <div
          style={{
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: "0.42em",
            textTransform: "uppercase",
            color: "#0038d8",
            marginTop: 14,
            display: "flex",
          }}
        >
          AI Software Factory
        </div>
        <div
          style={{
            fontSize: 27,
            color: "#3d4c63",
            marginTop: 26,
            display: "flex",
          }}
        >
          {tagline}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 44,
            fontSize: 22,
            fontWeight: 600,
            color: "#0038d8",
            display: "flex",
          }}
        >
          tezcode.dev
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
