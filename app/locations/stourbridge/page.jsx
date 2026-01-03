import Image from "next/image";
import CTASection from "../../_components/CTASection";
import StourbridgeLandmark from "@/app/public/stourbridge_landmark.jpg";
import Avatar from "@/app/public/avatar_purple.png";
import AccentLine from "@/app/_components/AccentLine";

export default function StourbridgePage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-24">
        <div className="max-w-screen-lg mx-auto w-5/6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-mediumAccent">
              House Rewires in Stourbridge
            </h1>

            <p className="mt-6 text-lg md:text-xl text-darkAccent">
              We carry out full house rewires for homeowners in Stourbridge,
              taking a considered approach that prioritises planning, clear
              communication, and long-term reliability.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[240px] md:h-[320px] rounded-xl overflow-hidden">
            <Image
              src={StourbridgeLandmark}
              alt="Stourbridge town landmark"
              placeholder="blur"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </section>

      {/* Service */}
      <section className="pb-28 mt-16">
        <div className="max-w-screen-md mx-auto w-5/6 space-y-6 text-lg text-darkAccent">
          <h2 className="text-3xl font-bold text-mediumAccent">
            Rewiring Homes Across Stourbridge
          </h2>
          <AccentLine />

          <p className="text-md">
            A house rewire is a substantial project, but it plays a vital role
            in how a home functions day to day. It underpins safety, comfort,
            and how well a property supports modern living.
          </p>

          <p className="text-md">
            Many properties in and around Stourbridge were built long before
            today’s electrical demands were considered. As households rely more
            on technology, lighting, and connected devices, older wiring systems
            can quickly show their limitations.
          </p>

          <p className="text-md">
            We specialise exclusively in full domestic rewires. That focus
            allows us to plan layouts carefully, upgrade both power and data
            infrastructure, and make decisions that suit how your home is
            actually used.
          </p>

          <p className="text-md">
            The aim is to leave you with an electrical system that feels
            dependable, well thought through, and ready for everyday life — both
            now and well into the future.
          </p>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-screen-md mx-auto w-5/6 space-y-6 text-lg text-darkAccent">
          <h2 className="text-3xl font-bold text-mediumAccent">
            Why Homeowners in Stourbridge Choose Bluephase
          </h2>
          <AccentLine />

          <p>
            Many homeowners come to us after finding it difficult to get clear,
            consistent advice elsewhere. Rewiring can feel overwhelming when
            it’s treated as a quick turnaround job rather than a specialist
            piece of work.
          </p>

          <p>
            Because we focus solely on house rewires, we’re able to approach
            each project with more care and attention. That means fewer
            assumptions, better planning, and a smoother experience from start
            to finish.
          </p>

          <p>
            Our approach is built around clarity and confidence — open
            communication, thoughtful decisions, and a standard of work that
            reflects the importance of the project. The goal is for you to feel
            informed, supported, and confident throughout the process.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="max-w-screen-md mx-auto w-5/6 space-y-8 text-darkAccent">
          <h2 className="text-3xl font-bold text-mediumAccent">
            Our Rewire Process
          </h2>
          <AccentLine />

          <blockquote className="space-y-4 text-lg leading-relaxed">
            <p>
              “Every rewire starts with a detailed site visit. It’s important to
              understand the property properly, talk through how the space is
              used, and explain what’s involved before any work begins.
            </p>

            <p>
              From there, the project is planned and carried out in stages.
              Everything is tested, certified, and checked thoroughly before
              sign-off, ensuring the work has been completed to a high
              standard.”
            </p>
          </blockquote>

          {/* Attribution */}
          <div className="flex items-center gap-4 pt-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                src={Avatar}
                alt="Lee, Owner of Bluephase Rewires"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="leading-tight">
              <p className="text-lg font-semibold">Lee</p>
              <p className="text-md opacity-70">Owner, Bluephase Rewires</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing context */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-screen-md mx-auto w-5/6 space-y-6 text-lg text-darkAccent">
          <h2 className="text-3xl font-bold text-mediumAccent">
            Rewire Costs in Stourbridge
          </h2>
          <AccentLine />

          <p>
            The cost of a house rewire depends on factors such as property size,
            layout, access, and overall specification. Most full rewires fall
            within typical UK pricing ranges.
          </p>

          <p>
            A site visit is always required before providing a fixed and
            accurate quote.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </main>
  );
}
