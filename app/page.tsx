import ContactForm from "@/components/ContactForm";
import SiteHeader from "@/components/SiteHeader";
import { linkedInUrl } from "@/lib/site";

const qualities = [
  "Leadership",
  "Communication",
  "Creativity",
  "Research-led problem solving",
  "Teamwork",
  "Time management",
];

const interests = [
  {
    title: "Marine Botany",
    text: "Study of marine plants and algae, with attention to coastal ecosystems and their ecological roles.",
  },
  {
    title: "Phycology",
    text: "Research in algae as a foundation for environmental understanding and applied scientific work.",
  },
  {
    title: "Bioremediation",
    text: "Using plants and biological processes to support cleaner, healthier environments.",
  },
  {
    title: "Environmental Restoration",
    text: "Mitigation approaches that help return natural systems toward a purer, more resilient state.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
            <BotanicalMark />
          </div>
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:px-8 md:py-24">
            <div>
              <p className="ornament mb-5">Karachi, Pakistan</p>
              <h1 className="font-display text-5xl leading-[1.05] text-forest md:text-7xl">
                Tamseel Fatima
              </h1>
              <p className="mt-4 font-display text-2xl italic text-moss md:text-3xl">
                Botanist, Phycologist, Educationist &amp; Researcher
              </p>
              <div className="rule my-8 max-w-md" />
              <p className="max-w-xl text-lg leading-8 text-muted">
                A dedicated scholar of plant science, working toward research
                that restores the natural world and teaching that prepares the
                next generation of scientists.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="border border-forest bg-forest px-6 py-3 text-[0.75rem] tracking-[0.22em] uppercase text-parchment hover:bg-moss"
                >
                  Contact me
                </a>
                <a
                  href="https://wa.me/923328266322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gold px-6 py-3 text-[0.75rem] tracking-[0.22em] uppercase text-forest hover:bg-gold/10"
                >
                  WhatsApp
                </a>
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gold-soft px-6 py-3 text-[0.75rem] tracking-[0.22em] uppercase text-muted hover:border-gold hover:text-forest"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <aside className="border border-gold-soft bg-parchment p-8 shadow-[0_20px_50px_-28px_rgba(30,58,47,0.45)]">
              <p className="ornament mb-6">At a glance</p>
              <dl className="space-y-5 text-[0.95rem]">
                <Fact label="Role" value="Researcher" />
                <Fact label="Degree" value="MPhil Botany, University of Karachi" />
                <Fact label="Years" value="2024 — 2026" />
                <Fact label="CGPA" value="3.78" />
                <Fact label="Seeking" value="Lectureship, research, fellowships & scholarships" />
              </dl>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block text-[0.75rem] tracking-[0.18em] uppercase text-gold hover:text-forest"
              >
                View LinkedIn profile →
              </a>
            </aside>
          </div>
        </section>

        <section id="about" className="bg-parchment">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
            <p className="ornament mb-3">About</p>
            <h2 className="font-display text-4xl text-forest md:text-5xl">
              A life devoted to plants, people, and a cleaner Earth
            </h2>
            <div className="rule my-8 max-w-xs" />
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-5 text-lg leading-8 text-muted">
                <p>
                  I am a dedicated and ambitious botanist — focused,
                  constructive, and motivated by work that matters. I work
                  consistently toward my targets, and I continue to improve
                  through study, teaching, and research.
                </p>
                <p>
                  Professionally I stand at the meeting point of botany,
                  phycology, education, and research. What sets my path apart
                  is a steady commitment to mitigation approaches that can
                  help the environment, and to science that also supports the
                  health of mankind.
                </p>
                <p>
                  My aim is to become a scientist whose research and
                  innovation help keep the environment pure and natural, and
                  to teach and guide students at a higher level.
                </p>
              </div>
              <div>
                <p className="ornament mb-5">Strongest qualities</p>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {qualities.map((item) => (
                    <li
                      key={item}
                      className="border border-gold-soft bg-cream px-4 py-3 text-forest"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <p className="ornament mb-3">Education</p>
          <h2 className="font-display text-4xl text-forest md:text-5xl">
            Academic formation
          </h2>
          <div className="rule my-8 max-w-xs" />
          <article className="border border-gold-soft bg-parchment p-8 md:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-3xl text-forest">
                  MPhil Botany
                </h3>
                <p className="mt-1 text-lg text-moss">University of Karachi</p>
              </div>
              <p className="text-sm tracking-[0.16em] uppercase text-gold">
                2024 — 2026
              </p>
            </div>
            <dl className="mt-8 grid gap-6 sm:grid-cols-3">
              <Fact label="Field" value="Botany" />
              <Fact label="CGPA" value="3.78" />
              <Fact label="Location" value="Karachi, Pakistan" />
            </dl>
            <p className="mt-8 text-muted leading-8">
              Coursework and research interests include marine botany,
              environmental science, plant biology, and bioremediation —
              the scientific ground on which my teaching and research
              ambitions rest.
            </p>
          </article>
        </section>

        <section id="experience" className="bg-forest text-parchment">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
            <p className="mb-3 text-[0.7rem] tracking-[0.42em] uppercase text-gold-soft">
              Experience
            </p>
            <h2 className="font-display text-4xl md:text-5xl">
              Teaching &amp; professional work
            </h2>
            <div className="my-8 h-px max-w-xs bg-gold/40" />
            <article className="border border-gold/30 bg-moss/30 p-8 md:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-3xl">Cooperative Teacher</h3>
                  <p className="mt-1 text-lg text-gold-soft">
                    Government Degree Science College, Malir
                  </p>
                </div>
                <p className="text-sm tracking-[0.16em] uppercase text-gold">
                  2022 — 2023
                </p>
              </div>
              <p className="mt-6 max-w-3xl leading-8 text-parchment/85">
                Taught students of first year and second year, guiding them
                through foundational science with clarity, discipline, and
                care. This classroom work shaped me as an educationist and
                confirmed a lasting vocation to teach at a higher level.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Undergraduate college teaching (Years 1 & 2)",
                  "Scientific communication in the classroom",
                  "Student guidance and academic support",
                  "Time management and collaborative work",
                ].map((item) => (
                  <li key={item} className="border border-gold/25 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="research" className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <p className="ornament mb-3">Research</p>
          <h2 className="font-display text-4xl text-forest md:text-5xl">
            Fields of inquiry
          </h2>
          <div className="rule my-8 max-w-xs" />
          <div className="grid gap-6 md:grid-cols-2">
            {interests.map((item) => (
              <article
                key={item.title}
                className="border border-gold-soft bg-parchment p-7"
              >
                <h3 className="font-display text-2xl text-forest">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-lg leading-8 text-muted">
            I am seeking lectureship, research appointments, fellowships,
            and scholarships — opportunities where focused scientific work
            can serve both the environment and human health.
          </p>
        </section>

        <section id="honours" className="bg-parchment">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
            <p className="ornament mb-3">Honours</p>
            <h2 className="font-display text-4xl text-forest md:text-5xl">
              Awards &amp; appearances
            </h2>
            <div className="rule my-8 max-w-xs" />
            <div className="grid gap-6 md:grid-cols-2">
              <article className="border border-gold bg-cream p-8">
                <p className="ornament mb-3">Scholarship</p>
                <h3 className="font-display text-2xl text-forest">
                  Sindh Indigenous Scholarship
                </h3>
                <p className="mt-3 leading-7 text-muted">
                  Awarded for MPhil research, recognising academic merit and
                  supporting my botanical studies at the University of
                  Karachi.
                </p>
              </article>
              <article className="border border-gold bg-cream p-8">
                <p className="ornament mb-3">Conference · January 2026</p>
                <h3 className="font-display text-2xl text-forest">
                  Guest speaker, ICSGEEDI
                </h3>
                <p className="mt-3 leading-7 text-muted">
                  Presented as a guest speaker at the 1st International
                  Conference on Sustainable Green Energy, Environment and
                  Digital Innovations (23–24 January 2026), organised by the
                  Department of Chemical Engineering, University of Karachi,
                  and the Institution of Engineers Pakistan, Karachi Centre.
                  Coverage in <em>The Nation</em> listed me among the speakers
                  from KIBGE (Dr. A.Q. Khan Institute of Biotechnology and
                  Genetic Engineering).
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <p className="ornament mb-3">Correspondence</p>
          <h2 className="font-display text-4xl text-forest md:text-5xl">
            Get in touch
          </h2>
          <div className="rule my-8 max-w-xs" />
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-8 text-lg leading-8 text-muted">
                Recruiters, scholars, and international colleagues are
                welcome to write or connect on LinkedIn. Visitors may judge
                the work on its merit — and reach me directly.
              </p>
              <ul className="space-y-4 text-forest">
                <li>
                  <span className="ornament block mb-1">Email</span>
                  <a
                    className="hover:text-gold"
                    href="mailto:tamseelfatima20@gmail.com"
                  >
                    tamseelfatima20@gmail.com
                  </a>
                </li>
                <li>
                  <span className="ornament block mb-1">Phone / WhatsApp</span>
                  <a className="hover:text-gold" href="tel:+923328266322">
                    +92 332 8266322
                  </a>
                </li>
                <li>
                  <span className="ornament block mb-1">LinkedIn</span>
                  <a
                    className="hover:text-gold"
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/tamseel-fatima-236780335
                  </a>
                </li>
                <li>
                  <span className="ornament block mb-1">Location</span>
                  Karachi, Pakistan
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-gold-soft bg-forest py-10 text-center text-sm text-parchment/70">
        <p className="font-display text-xl text-parchment">Tamseel Fatima</p>
        <p className="mt-2 tracking-[0.2em] uppercase text-gold-soft">
          Botanist · Researcher · Educationist
        </p>
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-[0.75rem] tracking-[0.18em] uppercase text-gold-soft hover:text-parchment"
        >
          Connect on LinkedIn
        </a>
        <p className="mt-6 text-parchment/50">
          © 2026 Tamseel Fatima. All rights reserved.
        </p>
      </footer>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="ornament mb-1">{label}</dt>
      <dd className="text-forest">{value}</dd>
    </div>
  );
}

function BotanicalMark() {
  return (
    <svg
      viewBox="0 0 600 600"
      className="h-full w-full"
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M300 40c20 80 20 140 0 220 40-30 90-50 140-50-40 50-70 110-80 180 60-10 120 0 170 30-70 30-140 30-210 0 20 70 20 130 0 200-20-70-20-130 0-200-70 30-140 30-210 0 50-30 110-40 170-30-10-70-40-130-80-180 50 0 100 20 140 50-20-80-20-140 0-220Z"
        stroke="#1e3a2f"
        strokeWidth="3"
      />
      <circle cx="300" cy="260" r="18" stroke="#1e3a2f" strokeWidth="3" />
    </svg>
  );
}
