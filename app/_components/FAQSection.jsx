export default function FAQSection() {
  return (
    <section className="mt-36">
      <div className="max-w-screen-md mx-auto w-5/6">
        <h2 className="text-3xl font-bold text-darkAccent text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-4">
          <details className="group border border-gray-200 rounded-lg p-4">
            <summary className="flex justify-between items-center cursor-pointer font-semibold text-darkAccent list-none">
              How long does a rewire take?
              <span className="text-mediumAccent text-xl group-open:rotate-45 transition">
                +
              </span>
            </summary>
            <p className="mt-4 text-md text-darkAccent">
              Most rewires take between one and two weeks, depending on the size
              and layout of the property. We’ll always give you a clear timeline
              before work begins.
            </p>
          </details>

          <details className="group border border-gray-200 rounded-lg p-4">
            <summary className="flex justify-between items-center cursor-pointer font-semibold text-darkAccent list-none">
              Will I need to move out during?
              <span className="text-mediumAccent text-xl group-open:rotate-45 transition">
                +
              </span>
            </summary>
            <p className="mt-4 text-md text-darkAccent">
              No. Whilst an empty house will always be quicker to rewire, we
              will always leave the site safe and clean at the end of every day.
              This will always be discussed during the site visit so you know
              exactly what to expect.
            </p>
          </details>

          <details className="group border border-gray-200 rounded-lg p-4">
            <summary className="flex justify-between items-center cursor-pointer font-semibold text-darkAccent list-none">
              Is the rewire fully certified?
              <span className="text-mediumAccent text-xl group-open:rotate-45 transition">
                +
              </span>
            </summary>
            <p className="mt-4 text-md text-darkAccent">
              Yes. Every rewire is fully tested and certified to current
              regulations within BS:7671, with all documentation provided on
              completion.
            </p>
          </details>

          <details className="group border border-gray-200 rounded-lg p-4">
            <summary className="flex justify-between items-center cursor-pointer font-semibold text-darkAccent list-none">
              How accurate is the pricing?
              <span className="text-mediumAccent text-xl group-open:rotate-45 transition">
                +
              </span>
            </summary>
            <p className="mt-4 text-md text-darkAccent">
              Prices shown are guidelines only. A fixed, transparent quote is
              provided after a site visit so there are no surprises.
            </p>
          </details>

          <details className="group border border-gray-200 rounded-lg p-4">
            <summary className="flex justify-between items-center cursor-pointer font-semibold text-darkAccent list-none">
              What areas do you cover?
              <span className="text-mediumAccent text-xl group-open:rotate-45 transition">
                +
              </span>
            </summary>
            <p className="mt-4 text-md text-darkAccent">
              We’re based in the West Midlands and cover surrounding counties.
              If you’re unsure, just get in touch.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
