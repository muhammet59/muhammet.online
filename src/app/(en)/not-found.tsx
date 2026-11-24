import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#050507] px-6 text-center text-[#F5F5F7]">
      <span className="font-mono text-xs tracking-[0.22em] text-[#E5A93B] uppercase">
        404 // NOT FOUND
      </span>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        Page not found.
      </h1>
      <p className="mt-3 max-w-md text-sm text-[#9898A6]">
        The route you requested does not exist on muhammet.online.
      </p>
      <div className="mt-8 flex items-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-[#F5F5F7] px-6 py-2.5 text-sm font-semibold text-[#050507] transition-opacity hover:opacity-90"
        >
          English Home
        </Link>
        <Link
          href="/tr"
          className="rounded-full border border-white/[0.14] bg-white/[0.04] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/[0.1]"
        >
          Türkçe Ana Sayfa
        </Link>
      </div>
    </main>
  );
}
