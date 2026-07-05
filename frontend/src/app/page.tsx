import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-gray-950">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold">Real Estate AI</div>

          <div className="hidden gap-8 text-sm font-medium text-gray-600 md:flex">
            <a href="#features">Features</a>
            <a href="#preview">Preview</a>
            <a href="#pricing">Pricing</a>
          </div>

          <Link
            href="/analyze"
            className="rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold hover:bg-white"
          >
            Sign in
          </Link>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
              AI investment intelligence
            </p>

            <h1 className="max-w-2xl text-5xl font-bold tracking-tight md:text-6xl">
              Find profitable real estate investments in seconds.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Analyze property listings, estimate renovation costs, calculate
              ROI and understand risks before making a buying decision.
            </p>

            <div className="mt-8 flex max-w-xl flex-col gap-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-gray-200 sm:flex-row">
              <input
                placeholder="Paste property listing URL"
                className="flex-1 rounded-xl px-4 py-3 text-sm outline-none"
              />

              <Link
                href="/analyze"
                className="rounded-xl bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Analyze
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-600">
              <span>✓ ROI estimation</span>
              <span>✓ Renovation prediction</span>
              <span>✓ Risk assessment</span>
            </div>
          </div>

          <div
            id="preview"
            className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-gray-200"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Investment Analysis</p>
                <h2 className="text-2xl font-bold">Should you buy it?</h2>
              </div>

              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
                BUY
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-5">
                <p className="text-sm text-gray-500">Investment Score</p>
                <p className="mt-2 text-4xl font-bold">91/100</p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <p className="text-sm text-gray-500">Expected ROI</p>
                <p className="mt-2 text-4xl font-bold">18.4%</p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <p className="text-sm text-gray-500">Renovation Cost</p>
                <p className="mt-2 text-3xl font-bold">€9,200</p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <p className="text-sm text-gray-500">Confidence</p>
                <p className="mt-2 text-3xl font-bold">94%</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-gray-50 p-5">
              <p className="font-semibold">Why this recommendation?</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>✓ Price is below comparable market listings</li>
                <li>✓ Strong rental demand in the area</li>
                <li>⚠ Bathroom renovation likely required</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}