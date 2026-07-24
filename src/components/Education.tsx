import { motion } from 'framer-motion'
import mlDashboard from '@/assets/ml-dashboard.png.asset.json'
import hnbguImage from '@/assets/hnbgu.png'
import DataScienceCertImage from '@/assets/certificate.png'
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Education() {
  return (
    <section id="education" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Background</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          EDUCATION
        </motion.h2>

        <div className="space-y-16 lg:space-y-24">
          {/* B.Tech */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div {...fadeInUp}>
              <div className="overflow-hidden">
                <img
                  src={hnbguImage}
                  alt="Hemvati Nandan Bahuguna Garhwal University campus"
                  className="w-full h-auto grayscale blur-[1px] hover:blur-0 hover:grayscale-0 transition-all duration-700 ease-out"
                />
              </div>
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                HNBGU — GARHWAL, UTTARAKHAND
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="flex items-center"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  B.Tech in Computer Science
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Pursuing my B.Tech at Hemvati Nandan Bahuguna Garhwal
                  University — building a strong foundation in algorithms,
                  databases, software engineering, and diving deep into machine
                  learning and data science through side projects.
                </p>
                <p className="text-sm text-gray-500">2025 — 2029</p>
              </div>
            </motion.div>
          </div>

          {/* ML Specialization */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div {...fadeInUp} className="flex items-center lg:order-2">
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  Data Science & Machine Learning Specialization
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Completed the Data Science and Machine Learning specializations
                  on TuteDude, covering supervised learning, neural networks,
                  sequence models, and structuring ML projects.
                </p>
                <p className="text-sm text-gray-500">2025 — 2026</p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="lg:order-1"
            >
              <div className="overflow-hidden">
                <img
                  src={DataScienceCertImage}
                  alt="Data science and machine learning dashboard"
                  className="w-full h-auto grayscale blur-sm hover:blur-0 hover:grayscale-0 transition-all duration-700 ease-out"
                />
              </div>
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                TuteDude — DataScience &amp; ML SPECIALIZATION
              </p>
            </motion.div>
          </div>

          {/* Schooling */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 border-t border-gray-800 pt-16">
            <motion.div {...fadeInUp}>
              <p className="text-xs text-gray-500 tracking-widest uppercase mb-3">
                Class X — 2022
              </p>
              <h3 className="text-xl lg:text-2xl font-light text-white mb-2">
                94.8%
              </h3>
              <p className="text-sm text-gray-500">
                Secondary school certificate — scored 94.8% across core subjects.
              </p>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.15 }}
            >
              <p className="text-xs text-gray-500 tracking-widest uppercase mb-3">
                Class XII — 2024
              </p>
              <h3 className="text-xl lg:text-2xl font-light text-white mb-2">
                94.6%
              </h3>
              <p className="text-sm text-gray-500">
                Higher secondary with a focus on math and computer science.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
