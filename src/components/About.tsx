import { motion } from 'framer-motion'
import dataScienceImage from '../assets/ml.png'
import PipelineImage from '../assets/pipeline.jpg'


const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">About Me</span>
          <div className="w-full h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* First Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div {...fadeInUp} className="order-2 lg:order-1">
            <img
              src={dataScienceImage}
              alt="Working with data"
              className="w-full h-auto grayscale blur-[0.4px] hover:blur-0 hover:grayscale-0 transition-all duration-700 ease-out"
            />
            {/* <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              EARLY EXPERIMENTS — PYTHON &amp; NOTEBOOKS
            </p> */}
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              I am aspiring Data Scientist and ML Engineer with a background
              in computer science and a deep curiosity for how data shapes decisions.
              What started as late-night experiments in Jupyter notebooks quickly grew
              into a serious pursuit of statistics, machine learning, and building
              things that actually ship.
            </p>
          </motion.div>
        </div>

{/* Quote Block */}
<motion.div {...fadeInUp} className="mb-24 lg:mb-32">
  <h2 className="font-display text-[8vw] lg:text-section leading-none tracking-tight text-gray-300">
    "BUILDING AI THAT
    <br />
    <span className="text-white underline underline-offset-8">
      SOLVES REAL-WORLD PROBLEMS,
    </span>

    <br />
    <span className="block mt-8">
      NOT JUST BENCHMARKS".
    </span>
  </h2>

  <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
    PERSONAL PHILOSOPHY
    <br />
    ON APPLIED AI & MACHINE LEARNING
  </p>
</motion.div>

        {/* Second Block
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div {...fadeInUp} className="flex items-center lg:text-right">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              He focuses on the full ML lifecycle — from framing the problem and
              wrangling raw data, to training, evaluating, and deploying models
              behind clean APIs. He cares as much about reproducibility and
              monitoring as he does about model accuracy.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <img
              src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Data visualization workspace"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              MODELING &amp; EXPERIMENT TRACKING
            </p>
          </motion.div>
        </div> */}

        {/* Third Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div {...fadeInUp}>
            <img
              src={PipelineImage}
              alt="Shipping ML systems"
              className="w-full h-auto grayscale blur-[0.4px] hover:blur-0 hover:grayscale-0 transition-all duration-700 ease-out"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              SHIPPING ML SYSTEMS TO PRODUCTION
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Today I Can build end-to-end projects across NLP, computer
              vision, and tabular ML — combining PyTorch, scikit-learn, and modern
              MLOps tooling. I am actively looking for opportunities to join a team
              where he can learn from senior scientists and ship models that reach
              real users.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
