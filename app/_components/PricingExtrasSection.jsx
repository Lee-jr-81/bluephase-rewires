import AccentLine from "./AccentLine";

export default function PricingExtrasSection() {
  return (
    <section className="bg-mediumAccent py-24 mt-36">
      <div className="max-w-screen-xl mx-auto w-11/12">
        {/* Heading */}
        <div className="max-w-screen-md mb-16">
          <h2 className="text-3xl font-bold text-white">
            What’s Included — And What You Can Add
          </h2>

          <p className="mt-6 text-md text-white">
            Every Bluephase rewire includes all core electrical and data
            infrastructure as standard, carefully planned around how you use
            your home today — and how you’ll use it in the future.
          </p>

          <p className="mt-4 text-md text-white">
            “Optional extras are available to tailor the rewire to your home.
            Prices shown are indicative guides to help you plan and decide.”
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Rewire Pricing */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-darkAccent mb-4">
              Rewire Pricing Guide
            </h3>
            <AccentLine />

            <ul className="space-y-4 md:text-lg text-darkAccent">
              <li className="flex justify-between">
                <span>2-Bedroom House</span>
                <span className="font-semibold">£3,500 – £5,500</span>
              </li>
              <li className="flex justify-between">
                <span>3-Bedroom House</span>
                <span className="font-semibold">£4,500 – £7,500</span>
              </li>
              <li className="flex justify-between">
                <span>4-Bedroom House</span>
                <span className="font-semibold">£6,000 – £9,500</span>
              </li>
            </ul>

            <p className="mt-6 text-sm text-darkAccent">
              Prices vary depending on layout, access, specification, and
              optional extras. A site visit is required for a fixed quote.
            </p>
          </div>

          {/* Extras */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-darkAccent mb-4">
              Optional Extras
            </h3>
            <AccentLine />

            <ul className="space-y-4 md:text-lg text-darkAccent">
              <li className="flex justify-between">
                <span>EV Charger Install</span>
                <span className="font-semibold">+£900 – £1,500</span>
              </li>
              <li className="flex justify-between">
                <span>Intruder Alarm</span>
                <span className="font-semibold">+£500 – £1,000</span>
              </li>
              <li className="flex justify-between">
                <span>CCTV System</span>
                <span className="font-semibold">+£600 – £1,200</span>
              </li>
              <li className="flex justify-between">
                <span>AV / Media Wiring</span>
                <span className="font-semibold">+£400 – £1,500</span>
              </li>
              <li className="flex justify-between">
                <span>Solar Installation</span>
                <span className="font-semibold">+£4,000 – £7,000</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
