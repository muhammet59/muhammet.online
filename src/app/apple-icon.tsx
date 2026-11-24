import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #161822 0%, #050507 100%)",
          borderRadius: 40,
          border: "2px solid rgba(255,255,255,0.14)",
          color: "#F5F5F7",
          fontSize: 88,
          fontWeight: 700,
          letterSpacing: "-0.05em",
          fontFamily: "sans-serif",
        }}
      >
        <span>M</span>
        <span style={{ color: "#E5A93B" }}>.</span>
      </div>
    ),
    { ...size }
  );
}
