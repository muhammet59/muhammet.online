import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Muhammet Aydın — Independent Software Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 84px",
          backgroundColor: "#050507",
          backgroundImage:
            "radial-gradient(circle at 82% 24%, rgba(229, 169, 59, 0.24), transparent 44%), radial-gradient(circle at 18% 82%, rgba(56, 189, 248, 0.14), transparent 45%)",
          color: "#F5F5F7",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.14em",
            }}
          >
            <span>MUHAMMET</span>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                backgroundColor: "#E5A93B",
              }}
            />
          </div>
          <div
            style={{
              fontSize: 18,
              letterSpacing: "0.16em",
              color: "rgba(245, 245, 247, 0.55)",
            }}
          >
            MUHAMMET.ONLINE
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 18,
              letterSpacing: "0.22em",
              color: "#E5A93B",
              textTransform: "uppercase",
            }}
          >
            INDEPENDENT SOFTWARE DEVELOPER · IOS & WEB
          </div>
          <div
            style={{
              fontSize: 66,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              maxWidth: 940,
            }}
          >
            Building digital experiences with precision and purpose.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 28,
            fontSize: 20,
            color: "rgba(245, 245, 247, 0.65)",
          }}
        >
          <span>iOS · SwiftUI · TypeScript · Next.js · QA Automation</span>
          <span>Fovex · Bütçem · Moiré · Blockrix</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
