import { PortfolioShell } from "@/components/PortfolioShell";
import { getDictionary } from "@/lib/i18n";
import { buildStructuredData } from "@/lib/seo";

export default function HomePage() {
  const dict = getDictionary("en");
  const jsonLd = buildStructuredData("en");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioShell locale="en" dict={dict} />
    </>
  );
}
