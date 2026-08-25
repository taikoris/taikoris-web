import { Ambient } from "@/components/ambient";
import { LetterCrest } from "@/components/letter-crest";
import { MoreInDevelopment, ProjectCard } from "@/components/project-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { SiteNav } from "@/components/site-nav";
import { PARTS } from "@/lib/crest";
import { GITHUB_URL, PROJECTS } from "@/lib/projects";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span aria-hidden className="hairline h-px w-10 sm:w-16" />
      <span className="text-[0.7rem] uppercase tracking-[0.42em] text-steel sm:text-xs">
        {children}
      </span>
      <span aria-hidden className="hairline h-px w-10 sm:w-16" />
    </div>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <SiteNav />

      <main id="top">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative flex min-h-svh items-center overflow-hidden">
          <Ambient />
          <div aria-hidden className="grid-veil absolute inset-0" />

          <div className="relative mx-auto w-full max-w-5xl px-6 py-32 text-center">
            <Reveal>
              <Eyebrow>Taikoris</Eyebrow>
            </Reveal>

            <Reveal delay={0.12}>
              <h1 className="display-face mt-8 font-display text-[12vw] font-black leading-[0.92] tracking-[-0.035em] text-ink sm:text-[10vw] lg:text-[7.5rem]">
                The Great Power,
                <span className="block bg-[linear-gradient(135deg,var(--color-ember),var(--color-ember-deep))] bg-clip-text text-transparent">
                  Enthroned.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mx-auto mt-9 max-w-xl text-balance text-lg leading-relaxed text-muted sm:text-xl">
                A technology company built on eight ideas. Every letter of the
                name is one of them.
              </p>
            </Reveal>

            <Reveal delay={0.36}>
              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#work"
                  className="focus-ring group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-ember px-8 py-4 text-sm font-semibold text-night transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_rgba(224,121,60,0.65)] sm:w-auto"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 -translate-x-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.28),transparent)] transition-transform duration-700 group-hover:translate-x-full"
                  />
                  <span className="relative">What we build</span>
                  <span
                    aria-hidden
                    className="relative transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>

                <a
                  href="#name"
                  className="focus-ring-steel group inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-surface/50 px-8 py-4 text-sm font-semibold text-ink backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-steel/60 hover:bg-surface sm:w-auto"
                >
                  Read the name
                  <span
                    aria-hidden
                    className="text-steel transition-transform duration-300 group-hover:translate-y-0.5"
                  >
                    ↓
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          <div
            aria-hidden
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-steel/60"
          >
            <span className="text-lg">↓</span>
          </div>
        </section>

        {/* ── The name, in full ────────────────────────────────────────── */}
        <section id="name" className="relative overflow-hidden py-28 sm:py-36">
          <div aria-hidden className="grid-veil absolute inset-0 opacity-60" />
          <div
            aria-hidden
            className="absolute left-1/2 top-1/3 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-ember/[0.07] blur-[130px]"
          />

          <div className="relative mx-auto w-full max-w-6xl px-6">
            <Reveal>
              <Eyebrow>The name, in full</Eyebrow>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="display-face mx-auto mt-7 max-w-2xl text-balance text-center font-display text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-5xl">
                Eight letters. Eight ideas.
              </h2>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-16 sm:mt-20">
                <LetterCrest />
              </div>
            </Reveal>

            {/* The power layer — plainly labelled as our own construction */}
            <div className="mt-24 sm:mt-32">
              <Reveal>
                <p className="mx-auto max-w-2xl text-balance text-center text-sm uppercase tracking-[0.28em] text-steel">
                  Three parts, one claim
                </p>
              </Reveal>

              <RevealGroup className="mt-10 grid gap-5 md:grid-cols-3" as="ul">
                {PARTS.map((p) => (
                  <RevealItem key={p.part} as="li">
                    <div className="group h-full rounded-2xl border border-line bg-surface/70 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-ember/40 hover:bg-surface hover:shadow-[0_18px_50px_-24px_rgba(224,121,60,0.5)]">
                      <p className="font-display text-3xl font-black tracking-tight text-ink transition-colors duration-300 group-hover:text-ember">
                        {p.part}
                      </p>
                      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-steel">
                        {p.gloss}
                      </p>
                      <p className="mt-5 text-[0.95rem] leading-relaxed text-muted">
                        {p.note}
                      </p>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>

              <Reveal delay={0.1}>
                <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-line/70 bg-night/60 p-8 text-center">
                  <p className="font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
                    Read together:{" "}
                    <span className="text-ember">
                      The Great Power, Enthroned.
                    </span>
                  </p>
                  <p className="mx-auto mt-5 max-w-xl text-balance text-sm leading-relaxed text-muted">
                    This is our own construction, not a dictionary entry. We
                    assembled the name and we hold ourselves to what it says.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── What we build ───────────────────────────────────────────── */}
        <section
          id="work"
          className="relative border-y border-line/70 bg-surface/25 py-28 sm:py-36"
        >
          <div
            aria-hidden
            className="absolute right-0 top-1/4 h-[28rem] w-[28rem] rounded-full bg-steel/[0.08] blur-[130px]"
          />

          <div className="relative mx-auto w-full max-w-6xl px-6">
            <Reveal>
              <Eyebrow>What we build</Eyebrow>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="display-face mx-auto mt-7 max-w-2xl text-balance text-center font-display text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-5xl">
                The work, as it stands.
              </h2>
            </Reveal>

            <RevealGroup
              className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              as="ul"
            >
              {PROJECTS.map((project) => (
                <RevealItem key={project.name} as="li" className="h-full">
                  <ProjectCard project={project} />
                </RevealItem>
              ))}
              <RevealItem as="li" className="h-full">
                <MoreInDevelopment />
              </RevealItem>
            </RevealGroup>
          </div>
        </section>

        {/* ── Footer ──────────────────────────────────────────────────── */}
        <footer className="relative overflow-hidden py-16">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-6 sm:flex-row sm:justify-between">
            <div className="flex flex-col items-center gap-2 sm:items-start">
              <span className="font-display text-lg font-black uppercase tracking-[0.3em] text-ink">
                Taikoris
              </span>
              <span className="text-sm text-muted">
                The Great Power, Enthroned.
              </span>
            </div>

            <div className="flex flex-col items-center gap-2 sm:items-end">
              <div className="flex items-center gap-5">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded-md text-sm text-muted transition-colors duration-300 hover:text-ember"
                >
                  GitHub
                </a>
                <a
                  href="https://taikoris.com"
                  className="focus-ring rounded-md text-sm text-muted transition-colors duration-300 hover:text-ember"
                >
                  taikoris.com
                </a>
              </div>
              <span className="text-sm text-muted/70">© {year} TAIKORIS</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
