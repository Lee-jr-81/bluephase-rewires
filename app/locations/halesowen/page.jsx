import Image from "next/image";
import CTASection from "../../_components/CTASection";
import HalesowenLandmark from "@/app/public/halesowen_church.jpg";
import Avatar from "@/app/public/avatar_purple.png";
import AccentLine from "@/app/_components/AccentLine";

export default function HalesowenPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-24">
        <div className="max-w-screen-lg mx-auto w-5/6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-mediumAccent">
              House Rewires in Halesowen
            </h1>

            <p className="mt-6 text-lg md:text-xl text-darkAccent">
              We provide carefully planned, full house rewires for homeowners in
              Halesowen, with a focus on clear communication, minimal
              disruption, and long-term reliability.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[240px] md:h-[320px] rounded-xl overflow-hidden">
            <Image
              src={HalesowenLandmark} // e.g. church image
              alt="Halesowen town landmark"
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
            Rewiring Homes Across Halesowen
          </h2>
          <AccentLine />

          <p className="text-md">
            A house rewire is a significant piece of work, but it’s also one of
            the most important investments you can make in your home. It forms
            part of the building’s core infrastructure and has a direct impact
            on safety, usability, and how comfortably you live day to day.
          </p>

          <p className="text-md">
            Many homes in and around Halesowen still rely on outdated wiring
            that was never designed to support modern lifestyles. As technology,
            appliances, and expectations have changed, electrical systems often
            struggle to keep up.
          </p>

          <p className="text-md">
            We specialise in full domestic rewires, taking the time to plan
            layouts properly before any work begins. This includes upgrading
            both power and data infrastructure, positioning outlets and lighting
            thoughtfully, and making decisions based on how your home is
            actually used.
          </p>

          <p className="text-md">
            The result is a system that feels considered, reliable, and ready
            for everyday life — not just now, but for many years to come.
          </p>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-screen-md mx-auto w-5/6 space-y-6 text-lg text-darkAccent">
          <h2 className="text-3xl font-bold text-mediumAccent">
            Why Homeowners in Halesowen Choose Bluephase
          </h2>
          <AccentLine />

          <p>
            Many homeowners contact us after struggling to get clear advice or
            realistic expectations elsewhere. Rewiring work can feel rushed or
            confusing when it’s treated as just another job, rather than a
            specialist project.
          </p>

          <p>
            At Bluephase, we focus specifically on full house rewires. That
            focus allows us to plan more carefully, anticipate issues before
            they arise, and deliver a level of finish that comes from doing this
            type of work day in, day out.
          </p>

          <p>
            By specialising in rewires, we’re able to offer a more considered
            service — clear communication, well-thought-out decisions, and a
            result that feels solid, reliable, and properly finished. The aim is
            to give you confidence at every stage, from the first conversation
            through to final sign-off.
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

          {/* Quote-style copy */}
          <blockquote className="space-y-4 text-lg leading-relaxed">
            <p>
              “Every rewire starts with a proper site visit. That’s where I take
              the time to understand the property, talk through how the home is
              used, and explain what’s realistically involved before any
              decisions are made.
            </p>

            <p>
              Once everything is agreed, the work is carefully planned and
              carried out in stages. Testing and certification are completed as
              standard, and nothing is signed off until it’s been done
              properly.”
            </p>
          </blockquote>

          {/* Attribution */}
          <div className="flex items-center gap-4 pt-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                src={Avatar} // your headshot image
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
            Rewire Costs in Halesowen
          </h2>
          <AccentLine />

          <p>
            Rewire costs vary depending on property size, layout, access, and
            specification. As a general guide, most full house rewires fall
            within typical UK price ranges.
          </p>

          <p>
            A site visit is always required to provide a fixed and accurate
            quote.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </main>
  );
}
