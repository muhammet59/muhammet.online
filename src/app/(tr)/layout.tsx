import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { RootShellLayout } from "@/components/RootShellLayout";
import { buildLocaleMetadata } from "@/lib/seo";

export const metadata: Metadata = buildLocaleMetadata("tr");

export const viewport: Viewport = {
  themeColor: "#050507",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function TurkishRootLayout({ children }: { children: ReactNode }) {
  return <RootShellLayout locale="tr">{children}</RootShellLayout>;
}
