export default function ProcessSection() {
  return (
    <section className="mt-36">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-screen-lg mx-auto w-5/6">
        {[
          {
            step: "01",
            title: "Book Your Site Visit",
            desc: "We assess your home and talk through your plans.",
          },
          {
            step: "02",
            title: "We Plan & Install",
            desc: "Carefully planned, clean installation.",
          },
          {
            step: "03",
            title: "Tested & Signed Off",
            desc: "Fully tested, certified, and complete.",
          },
        ].map((item) => (
          <div key={item.step} className="text-center">
            <div className="bg-mediumAccent text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto">
              {item.step}
            </div>
            <h3 className="mt-4 font-bold text-lg">{item.title}</h3>
            <p className="mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
