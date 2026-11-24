import { PortfolioShell } from "@/components/PortfolioShell";
import { getDictionary } from "@/lib/i18n";
import { buildStructuredData } from "@/lib/seo";

export default function TurkishHomePage() {
  const dict = getDictionary("tr");
  const jsonLd = buildStructuredData("tr");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioShell locale="tr" dict={dict} />
    </>
  );
}
