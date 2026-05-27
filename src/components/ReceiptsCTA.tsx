import Link from "next/link";

export default function ReceiptsCTA() {
  return (
    <section
      style={{ background: "linear-gradient(135deg, #48195d 0%, #6b2d7b 100%)" }}
      className="py-20 px-4"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Try it free.
        </h2>
        <p
          className="text-lg mb-8 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          Upload your first receipt in under a minute. Free to start — no
          credit card required.
        </p>
        {/* TODO: Update to deployed receipts app URL when ready */}
        <Link
          href="/receipts"
          className="flex sm:inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#E8734A] rounded-xl hover:bg-[#d4663f] transition-colors min-h-[44px]"
        >
          Start free now
        </Link>
      </div>
    </section>
  );
}
