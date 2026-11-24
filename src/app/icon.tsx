import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #14161F 0%, #050507 100%)",
          borderRadius: 8,
          border: "1px solid rgba(255,255,255,0.16)",
          color: "#F5F5F7",
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: "-0.04em",
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
