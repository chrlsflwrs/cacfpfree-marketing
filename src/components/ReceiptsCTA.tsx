export default function ReceiptsCTA() {
  return (
    <section className="py-20 px-4 bg-[#fafafc]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
          Try it free.
        </h2>
        <p className="text-lg text-gray-500 mb-8 leading-relaxed">
          Upload your first receipt in under a minute. Free to start — no
          credit card required.
        </p>
        <a
          href="/receipts"
          className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#48195d] rounded-xl hover:bg-[#3a1449] transition-colors min-h-[44px]"
        >
          Start free now
        </a>
      </div>
    </section>
  );
}
