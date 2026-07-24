import { motion } from 'framer-motion'

const chapters = [
  {
    period: 'H1 · 2025',
    chapter: 'Chapter 01',
    title: 'Foundations',
    body:
      'Started B.Tech at HNBGU. First six months went into fundamentals — web development, C++, and Python. Learned to think in data structures, ship small tools, and read other people\u2019s code without flinching.',
    tags: ['C++', 'Python', 'Web Dev',],
  },
  {
    period: 'H1 · 2025',
    chapter: 'Chapter 02',
    title: 'Velora — Smart Price Comparison',
    body:
      'Built Velora, a real-time price comparison tool for tech products. Pulls live listings across retailers with the SerpAPI, then layers the Gemini API on top to recommend the best-value option for each buyer\u2019s intent.',
    tags: ['SerpAPI', 'Gemini API', 'Python', 'Product'],
  },
  {
    period: 'H2 · 2025',
    chapter: 'Chapter 03',
    title: 'Pivot to Data Science & ML',
    body:
      'Shifted focus toward data science and machine learning. Went deep on statistics, scikit-learn, and PyTorch — moving from tutorials to reproducing papers and running experiments end to end.',
    tags: ['Statistics', 'scikit-learn', 'PyTorch', 'ML'],
  },
  {
    period: 'H2 · 2025',
    chapter: 'Chapter 04',
    title: 'Shipping ML Projects',
    body:
      'Turned the learning into two applied projects: a Cardiac Heart Disease Predictor using clinical features, and a Mental Health Score Predictor that scores student wellbeing from daily habits. Both were built end-to-end — data, model, evaluation, and interface.',
    tags: ['Heart Disease Predictor', 'Mental Health Score', 'End-to-end'],
  },
  {
    period: 'Now → 2029',
    chapter: 'Chapter 05',
    title: 'What\u2019s Next',
    body:
      'Going deeper on MLOps, deep learning, and building products that put models in front of real users. The plan through graduation is simple — keep shipping, keep learning in public.',
    tags: ['Backend Architecture', 'Deep Learning', 'DSA'],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Journey() {
  return (
    <section id="journey" className="section-padding bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">
            2025 — 2029
          </span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-6"
        >
          LEARNING<br />JOURNEY
        </motion.h2>

        <motion.p
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.15 }}
          className="max-w-xl text-gray-400 leading-relaxed text-sm lg:text-base mb-16 lg:mb-24"
        >
          things I&rsquo;m still figuring out. No polish, just the actual path.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* vertical spine */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent md:-translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {chapters.map((c, i) => {
              const isRight = i % 2 === 1
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="relative grid grid-cols-1 md:grid-cols-2 md:gap-16 items-start"
                >
                  {/* node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white" />
                    <div className="absolute w-8 h-8 rounded-full border border-gray-700 animate-pulse" />
                  </div>

                  {/* content */}
                  <div
                    className={
                      isRight
                        ? 'md:col-start-2 md:pl-16 pl-12'
                        : 'md:pr-16 md:text-right pl-12 md:pl-0'
                    }
                  >
                    <p className="text-xs text-gray-500 tracking-widest uppercase mb-2">
                      {c.chapter} · {c.period}
                    </p>
                    <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-white leading-none tracking-tight mb-4">
                      {c.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm lg:text-base mb-5">
                      {c.body}
                    </p>
                    <div
                      className={
                        'flex flex-wrap gap-2 ' +
                        (isRight ? '' : 'md:justify-end')
                      }
                    >
                      {c.tags.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs text-gray-500 border border-gray-800 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
