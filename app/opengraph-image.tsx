import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0a12 0%, #14142b 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 700, color: "#8b5cf6" }}>
          {site.shortName}
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
            marginTop: 24,
            maxWidth: 900,
          }}
        >
          {site.tagline}
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#a1a1b5",
            marginTop: 32,
            maxWidth: 950,
          }}
        >
          {site.description}
        </div>
      </div>
    ),
    { ...size }
  );
}
