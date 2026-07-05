import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

// OG card in the light premium brand: soft paper bg + faint grid,
// ink headline, one blue accent — mirrors the redesigned home page.
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const title = searchParams.get("title") ?? "Har biznesni AI bilan avtomatlashtiramiz";
  const subtitle =
    searchParams.get("subtitle") ??
    "RAOS POS · AI Office · CoreMed va yana 5 ta mahsulot";
  const tag = searchParams.get("tag") ?? "Toshkent · O'zbekiston";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#f5f7fb",
          backgroundImage:
            "radial-gradient(ellipse 900px 500px at 85% 10%, rgba(0,64,255,0.10), transparent), linear-gradient(to right, rgba(12,26,46,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(12,26,46,0.05) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 56px 56px, 56px 56px",
          color: "#0c1a2e",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top — hero-style chip badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "12px 24px",
            borderRadius: 999,
            border: "1px solid #e3e8f0",
            backgroundColor: "#ffffff",
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#0038d8",
            boxShadow: "0 1px 2px rgba(12,26,46,0.05), 0 8px 24px rgba(12,26,46,0.07)",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#0040ff",
            }}
          />
          AI · Software Factory
        </div>

        {/* Center — headline */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "90%" }}>
          <div
            style={{
              fontSize: title.length > 50 ? 60 : 76,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#0c1a2e",
              display: "flex",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#3d4c63",
              marginTop: 20,
              maxWidth: 940,
              display: "flex",
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Bottom — brand row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: "#0040ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 24,
                fontWeight: 800,
                boxShadow: "0 8px 20px rgba(0,64,255,0.25)",
              }}
            >
              TC
            </div>
            <div style={{ fontSize: 30, fontWeight: 700, color: "#0c1a2e" }}>Tezcode</div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 22,
              color: "#64748b",
            }}
          >
            {tag}
            <div style={{ color: "#0038d8", fontWeight: 600 }}>· tezcode.dev</div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
