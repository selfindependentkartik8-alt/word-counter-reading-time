"use client";

import { useMemo, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [wpm, setWpm] = useState(200);

  const stats = useMemo(() => {
    const trimmed = text.trim();

    const words = trimmed ? trimmed.split(/\s+/).length : 0;

    const characters = text.length;

    const charactersNoSpaces = text.replace(/\s/g, "").length;

    const sentences = trimmed
      ? (trimmed.match(/[.!?]+(?=\s|$)/g) || []).length
      : 0;

    const paragraphs = trimmed
      ? trimmed.split(/\n\s*\n/).filter((p) => p.trim()).length
      : 0;

    const readingMinutes =
      words > 0 ? Math.ceil(words / Math.max(wpm, 1)) : 0;

    return {
      words,
      characters,
      charactersNoSpaces,
      sentences,
      paragraphs,
      readingMinutes,
    };
  }, [text, wpm]);

  const handleClear = () => {
    setText("");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-lime-950 via-lime-950/55 via-[35%] to-black text-white">

      {/* Background glows */}

      <div className="pointer-events-none absolute left-1/2 top-[-280px] h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-lime-400/20 blur-[170px]" />

      <div className="pointer-events-none absolute left-[-220px] top-[30%] h-[420px] w-[420px] rounded-full bg-lime-400/10 blur-[150px]" />

      <div className="pointer-events-none absolute right-[-220px] top-[55%] h-[420px] w-[420px] rounded-full bg-lime-300/10 blur-[150px]" />

      {/* Navbar */}

      <nav className="relative z-30 mx-auto w-full max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-black/35 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:px-5">

          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-lime-400/20 bg-white/10">
              <img
                src="/logo.png"
                alt="KrishAIWorks Logo"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-sm font-bold text-white sm:text-base">
                KrishAIWorks
              </h2>

              <p className="text-[9px] text-zinc-500 sm:text-[10px]">
                AI Solutions That Work
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-1 md:flex">
            <a
              href="#features"
              className="rounded-xl px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.05] hover:text-lime-300"
            >
              Features
            </a>

            <a
              href="#how"
              className="rounded-xl px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.05] hover:text-lime-300"
            >
              How To Use
            </a>

            <a
              href="#faq"
              className="rounded-xl px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.05] hover:text-lime-300"
            >
              FAQ
            </a>

            <a
              href="https://instagram.com/KrishAIWorks"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-xl border border-lime-400/20 bg-lime-400/10 px-5 py-2 text-sm font-semibold text-lime-300 transition hover:bg-lime-400/20"
            >
              Follow
            </a>
          </div>

          <a
            href="https://instagram.com/KrishAIWorks"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-xs font-semibold text-lime-300 md:hidden"
          >
            Follow
          </a>
        </div>
      </nav>

      {/* Hero */}

      <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-5 pb-20 pt-20 text-center sm:px-8 sm:pt-24">

        <div className="rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-xs text-lime-200 backdrop-blur-xl">
          ✍️ Word Counter & Reading Time
        </div>

        <p className="mt-4 text-xs text-zinc-500">
          Built by{" "}
          <span className="font-semibold text-lime-400">
            KrishAIWorks
          </span>
        </p>

        <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
          Count.
          <br />

          <span className="bg-gradient-to-r from-lime-200 via-lime-400 to-green-500 bg-clip-text text-transparent">
            Read. Understand.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
          Analyze your text instantly with accurate word, character,
          sentence and paragraph counts plus estimated reading time.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-2.5">
          <span className="rounded-full border border-white/5 bg-white/[0.04] px-4 py-2 text-xs text-zinc-300">
            ⚡ Instant Analysis
          </span>

          <span className="rounded-full border border-white/5 bg-white/[0.04] px-4 py-2 text-xs text-zinc-300">
            🔒 Private
          </span>

          <span className="rounded-full border border-white/5 bg-white/[0.04] px-4 py-2 text-xs text-zinc-300">
            📱 Mobile Friendly
          </span>
        </div>

        {/* Main tool */}

        <div className="mt-12 w-full max-w-4xl">
          <div className="rounded-[2rem] border border-lime-400/10 bg-black/55 p-5 shadow-2xl shadow-lime-950/30 backdrop-blur-2xl sm:p-7">

            <div className="mb-6 text-left">
              <h2 className="text-lg font-semibold text-white sm:text-xl">
                Text Analyzer
              </h2>

              <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                Paste your text below and get instant statistics.
              </p>
            </div>

            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Start typing or paste your text here..."
              className="min-h-[230px] w-full resize-y rounded-2xl border border-lime-400/20 bg-black/40 p-5 text-sm leading-7 text-white outline-none transition placeholder:text-zinc-600 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20"
            />

            <button
              onClick={handleClear}
              className="mt-4 h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-7 text-sm font-semibold text-zinc-300 transition hover:bg-white/[0.08] hover:text-white active:scale-[0.98]"
            >
              Clear
            </button>

            {/* Reading Time */}

            <div className="mt-7 rounded-2xl border border-lime-400/10 bg-black/45 p-5 text-left sm:p-6">

              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-lime-400">
                Reading Time
              </p>

              <div className="mt-2 flex items-end gap-2">
                <span className="text-5xl font-extrabold text-white">
                  {stats.readingMinutes}
                </span>

                <span className="pb-2 text-sm text-zinc-500">
                  {stats.readingMinutes === 1 ? "minute" : "minutes"}
                </span>
              </div>

              <p className="mt-2 text-xs text-zinc-600">
                Estimated at approximately {wpm} words per minute.
              </p>

              {/* WPM control */}

              <div className="mt-6 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold text-zinc-400">
                      Reading Speed
                    </p>

                    <p className="mt-1 text-[11px] text-zinc-600">
                      Adjust words per minute
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="50"
                      max="1000"
                      step="10"
                      value={wpm}
                      onChange={(e) => {
                        const value = Number(e.target.value);

                        if (!Number.isNaN(value)) {
                          setWpm(Math.min(1000, Math.max(50, value)));
                        }
                      }}
                      className="w-20 rounded-lg border border-lime-400/20 bg-black/50 px-3 py-2 text-center text-sm font-bold text-lime-300 outline-none focus:border-lime-400"
                    />

                    <span className="text-xs text-zinc-600">
                      WPM
                    </span>
                  </div>
                </div>

                <input
                  type="range"
                  min="50"
                  max="500"
                  step="10"
                  value={wpm}
                  onChange={(e) => setWpm(Number(e.target.value))}
                  className="mt-4 w-full accent-lime-400"
                />

              </div>
            </div>

            {/* Stats */}

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

              <StatCard
                label="Words"
                value={stats.words}
                icon="📄"
              />

              <StatCard
                label="Characters"
                value={stats.characters}
                icon="🔤"
              />

              <StatCard
                label="No Spaces"
                value={stats.charactersNoSpaces}
                icon="✂️"
              />

              <StatCard
                label="Sentences"
                value={stats.sentences}
                icon="📑"
              />

              <StatCard
                label="Paragraphs"
                value={stats.paragraphs}
                icon="📚"
              />

              <StatCard
                label="Words / Min"
                value={wpm}
                icon="⏱️"
              />

            </div>

            <p className="mt-5 text-left text-xs text-zinc-600">
              Your text is processed directly in your browser.
            </p>

          </div>
        </div>
      </section>

      {/* Features */}

      <section
        id="features"
        className="relative z-10 mx-auto w-full max-w-6xl scroll-mt-10 px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">

          <div className="mx-auto inline-flex rounded-full border border-lime-400/10 bg-lime-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-lime-400">
            Why Use It
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple, fast and useful.
          </h2>

          <p className="mt-4 text-sm leading-7 text-zinc-500">
            Everything you need to understand your text instantly.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">

          <FeatureCard
            icon="⚡"
            number="01"
            title="Instant Analysis"
            description="Get word, character, sentence and paragraph statistics instantly."
          />

          <FeatureCard
            icon="🔒"
            number="02"
            title="Browser Based"
            description="Your text stays directly inside your browser."
          />

          <FeatureCard
            icon="📱"
            number="03"
            title="Mobile Friendly"
            description="Works smoothly across phones, tablets and desktop devices."
          />

        </div>
      </section>

      {/* How To Use */}

      <section
        id="how"
        className="relative z-10 mx-auto w-full max-w-6xl scroll-mt-10 px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">

          <div className="mx-auto inline-flex rounded-full border border-lime-400/10 bg-lime-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-lime-400">
            How To Use
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Three simple steps.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">

          <StepCard
            number="01"
            title="Enter Text"
            description="Type or paste your content into the text analyzer."
          />

          <StepCard
            number="02"
            title="Adjust Speed"
            description="Choose your preferred reading speed in words per minute."
          />

          <StepCard
            number="03"
            title="Check Results"
            description="Instantly view your word count, characters and estimated reading time."
          />

        </div>
      </section>

      {/* FAQ */}

      <section
        id="faq"
        className="relative z-10 mx-auto w-full max-w-3xl scroll-mt-10 px-5 py-24 sm:px-8"
      >
        <div className="text-center">

          <div className="mx-auto inline-flex rounded-full border border-lime-400/10 bg-lime-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-lime-400">
            FAQ
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 space-y-4">

          <Faq
            question="How is reading time calculated?"
            answer="Reading time is estimated using your word count divided by your selected words-per-minute reading speed."
          />

          <Faq
            question="Can I change the reading speed?"
            answer="Yes. You can enter your own WPM value or adjust it using the reading-speed slider."
          />

          <Faq
            question="Is my text uploaded?"
            answer="No. Your text is processed directly inside your browser."
          />

        </div>
      </section>

      {/* CTA */}

      <section className="relative z-10 mx-auto w-full max-w-5xl px-5 py-20 sm:px-8">

        <div className="relative overflow-hidden rounded-[2rem] border border-lime-400/10 bg-gradient-to-br from-lime-950/70 via-black/80 to-black px-6 py-14 text-center shadow-2xl shadow-lime-950/30 backdrop-blur-xl sm:px-12">

          <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-lime-400/10 blur-[120px]" />

          <div className="relative">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-2xl">
              ✍️
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-lime-400">
              KrishAIWorks
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Count. Read. Done.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-500">
              A simple text analysis utility designed to get the job done quickly.
            </p>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="mt-8 inline-flex rounded-xl bg-lime-400 px-7 py-3 text-sm font-semibold text-black shadow-xl shadow-lime-400/20 transition hover:-translate-y-0.5 hover:bg-lime-300 active:scale-95"
            >
              ✍️ Try It Now
            </button>

          </div>
        </div>
      </section>

      {/* Footer */}

<footer className="relative z-10 border-t border-white/5 px-5 py-10">

  {/* Related Tools */}
  <div className="mx-auto max-w-6xl">

    <div className="mb-8 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-400/70">
        Explore More
      </p>

      <h3 className="mt-2 text-xl font-semibold text-white">
        More Writing & Productivity Tools
      </h3>

      <p className="mt-2 text-sm text-zinc-500">
        Explore more useful tools from KrishAIWorks.
      </p>
    </div>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {/* AI Blog Generator */}
      <a
        href="https://aibloggenerator.krishaiworks.com/"
        className="group rounded-2xl border border-lime-400/10 bg-white/[0.02] p-5 transition hover:border-lime-400/30 hover:bg-lime-400/[0.04]"
      >
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-lime-400/20 bg-lime-400/10 text-lg">
          ✍️
        </div>

        <h4 className="font-semibold text-white transition group-hover:text-lime-400">
          AI Blog Generator
        </h4>

        <p className="mt-2 text-xs leading-5 text-zinc-500">
          Generate high-quality blog content with AI.
        </p>
      </a>

      {/* AI Text Humanizer */}
      <a
        href="https://aitexthumanizer.krishaiworks.com/"
        className="group rounded-2xl border border-lime-400/10 bg-white/[0.02] p-5 transition hover:border-lime-400/30 hover:bg-lime-400/[0.04]"
      >
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-lime-400/20 bg-lime-400/10 text-lg">
          📝
        </div>

        <h4 className="font-semibold text-white transition group-hover:text-lime-400">
          AI Text Humanizer
        </h4>

        <p className="mt-2 text-xs leading-5 text-zinc-500">
          Make AI-generated text sound more natural and human.
        </p>
      </a>

      {/* AI Grammar & Writing Fixer */}
      <a
        href="https://aigrammarwritingfixer.krishaiworks.com/"
        className="group rounded-2xl border border-lime-400/10 bg-white/[0.02] p-5 transition hover:border-lime-400/30 hover:bg-lime-400/[0.04]"
      >
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-lime-400/20 bg-lime-400/10 text-lg">
          ✨
        </div>

        <h4 className="font-semibold text-white transition group-hover:text-lime-400">
          AI Grammar & Writing Fixer
        </h4>

        <p className="mt-2 text-xs leading-5 text-zinc-500">
          Fix grammar, spelling, and improve your writing instantly.
        </p>
      </a>

      {/* Markdown → HTML Converter */}
      <a
        href="https://markdownhtmlconverter.krishaiworks.com/"
        className="group rounded-2xl border border-lime-400/10 bg-white/[0.02] p-5 transition hover:border-lime-400/30 hover:bg-lime-400/[0.04]"
      >
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-lime-400/20 bg-lime-400/10 text-lg">
          {"</>"}
        </div>

        <h4 className="font-semibold text-white transition group-hover:text-lime-400">
          Markdown → HTML Converter
        </h4>

        <p className="mt-2 text-xs leading-5 text-zinc-500">
          Convert Markdown content into clean HTML instantly.
        </p>
      </a>

    </div>
  </div>

 {/* Original Footer */}

<div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-7 border-t border-white/5 pt-10 sm:flex-row">

  <div className="flex items-center gap-3">

    <img
      src="/logo.png"
      alt="KrishAIWorks Logo"
      className="h-12 w-12 rounded-full border border-lime-400/20 object-cover"
    />

    <div>
      <p className="font-semibold text-white">
        KrishAIWorks
      </p>

      <p className="mt-1 text-xs text-zinc-600">
        AI Solutions That Work
      </p>
    </div>

  </div>

  <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">

    <a
      href="https://instagram.com/KrishAIWorks"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-zinc-500 transition hover:text-lime-400"
    >
      Instagram · @KrishAIWorks
    </a>

    <a
      href="https://krishaiworks.com/privacy-policy"
      className="text-sm text-zinc-500 transition hover:text-lime-400"
    >
      Privacy Policy
    </a>

    <a
      href="https://krishaiworks.com/terms-and-conditions"
      className="text-sm text-zinc-500 transition hover:text-lime-400"
    >
      Terms & Conditions
    </a>

  </div>

  <p className="text-xs text-zinc-700">
    © {new Date().getFullYear()} KrishAIWorks
  </p>

</div>

</footer>
    </main>
  );
}

/* ========================================================= */
/* COMPONENTS */
/* ========================================================= */

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: number;
  icon: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-black/45 p-5 text-left backdrop-blur-xl transition hover:border-lime-400/20">

      <div className="flex items-center justify-between gap-3">

        <span className="inline-flex rounded-lg border border-lime-400/10 bg-lime-400/5 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-lime-400">
          {label}
        </span>

        <span className="text-sm">
          {icon}
        </span>

      </div>

      <p className="mt-4 text-3xl font-extrabold text-white">
        {value}
      </p>
    </div>
  );
}

function FeatureCard({
  icon,
  number,
  title,
  description,
}: {
  icon: string;
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-black/45 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-lime-400/20">

      <div className="flex items-center justify-between">
        <span className="text-2xl">{icon}</span>

        <span className="text-xs font-bold text-lime-400">
          {number}
        </span>
      </div>

      <h3 className="mt-6 text-lg font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-zinc-500">
        {description}
      </p>

    </div>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-black/45 p-6 backdrop-blur-xl">

      <span className="inline-flex rounded-lg border border-lime-400/10 bg-lime-400/5 px-3 py-1 text-xs font-bold text-lime-400">
        {number}
      </span>

      <h3 className="mt-5 text-lg font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-zinc-500">
        {description}
      </p>

    </div>
  );
}

function Faq({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-black/45 p-5 backdrop-blur-xl">

      <h3 className="font-semibold text-white">
        {question}
      </h3>

      <p className="mt-3 text-sm leading-7 text-zinc-500">
        {answer}
      </p>

    </div>
  );
}