import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const title = searchParams.get("title") ?? "Tezcode";
  const subtitle = searchParams.get("subtitle") ?? "AI Software Factory";
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
          padding: "80px",
          backgroundColor: "#0a0a0f",
          backgroundImage:
            "radial-gradient(ellipse 1200px 600px at 20% 30%, rgba(0,64,255,0.25), transparent), radial-gradient(ellipse 800px 500px at 80% 90%, rgba(212,160,23,0.18), transparent)",
          color: "#f0f0f8",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top — brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#0a0a0f",
              border: "2px solid rgba(212,160,23,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            TC
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em" }}>
              Tezcode
            </div>
            <div style={{ fontSize: 14, color: "#d4a017", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              AI Software Factory
            </div>
          </div>
        </div>

        {/* Center — headline */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "85%" }}>
          <div
            style={{
              fontSize: title.length > 50 ? 72 : 96,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              backgroundImage:
                "linear-gradient(135deg, #4d88ff 0%, #0040ff 100%)",
              backgroundClip: "text",
              color: "transparent",
              display: "flex",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 32,
              color: "rgba(240,240,248,0.65)",
              marginTop: 16,
              maxWidth: 900,
              display: "flex",
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Bottom — tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 20,
            color: "#d4a017",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#d4a017",
            }}
          />
          {tag}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
