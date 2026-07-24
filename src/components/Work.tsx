import { motion } from 'framer-motion'

const projects = [
  {
    number: '01',
    title: 'Cardiac Heart Disease Predictor',
    category: 'Machine Learning · Healthcare',
    description:
      'A supervised learning model that predicts the likelihood of cardiac heart disease from clinical indicators like age, cholesterol, resting blood pressure, and ECG readings. Trained on the UCI heart disease dataset with feature engineering and hyperparameter tuning, then served through a lightweight API for real-time inference.',
    stack: ['Python', 'scikit-learn', 'Pandas', 'Random Forest', 'FastAPI'],
  },
  {
    number: '02',
    title: 'Mental Health Score Predictor',
    category: 'Machine Learning · Student Wellbeing',
    description:
      'A regression model that estimates a student wellbeing score based on daily habits — sleep hours, screen time, physical activity, study load, and social interaction. Designed as an early-warning tool that surfaces which lifestyle factors push a student toward burnout, with clear feature importance so the output is interpretable.',
    stack: ['Python', 'XGBoost', 'Pandas', 'Matplotlib', 'Streamlit'],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 1, ease: 'easeOut' }
}

export function Work() {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Selected Work</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          KEY<br />PROJECTS
        </motion.h2>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              className="border-t border-gray-800 py-8 md:py-12 lg:py-16 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                <div className="lg:col-span-2">
                  <p className="font-display text-4xl lg:text-5xl text-gray-600 group-hover:text-white transition-colors duration-500">
                    {project.number}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 tracking-wider uppercase">
                    {project.category}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm lg:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs text-gray-500 border border-gray-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
