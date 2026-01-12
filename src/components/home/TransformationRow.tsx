import { motion } from 'motion/react';
import { easings, durations } from '../../config/animations';

interface TransformationRowProps {
  company: string;
  industry: string;
  result: string;
  index: number;
  isMobile: boolean;
  shouldReduceMotion: boolean;
}

export function TransformationRow({ 
  company, 
  industry, 
  result, 
  index,
  isMobile,
  shouldReduceMotion 
}: TransformationRowProps) {
  return (
    <motion.div
      initial={{ opacity: 1, x: 0 }}
      whileInView={!isMobile && !shouldReduceMotion ? { opacity: 1, x: 0 } : {}}
      viewport={{ once: true, margin: "-50px" }}
      transition={
        !isMobile && !shouldReduceMotion
          ? {
              duration: durations.medium,
              delay: index * 0.1,
              ease: easings.smooth,
            }
          : { duration: 0 }
      }
      whileHover={
        !isMobile && !shouldReduceMotion
          ? { 
              x: 8,
              boxShadow: '0 4px 16px rgba(0, 165, 199, 0.06)',
              transition: { 
                duration: durations.fast,
                ease: easings.easeOut,
              }
            }
          : {}
      }
      className="p-8 transition-all hover:bg-white relative group border-t border-slate-200"
    >
      {/* Cyan accent dot */}
      <div className={`absolute w-1.5 h-1.5 rounded-full bg-cyan-400 ${isMobile ? 'left-2 top-9' : 'left-3 top-[42px]'}`} />
      
      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        <div className="md:w-1/3">
          <h3 className="mb-2 text-xl font-semibold text-slate-900">
            {company}
          </h3>
          <p className="text-sm tracking-wide text-slate-400">
            {industry}
          </p>
        </div>
        <div className="md:w-2/3">
          <p className="text-base leading-relaxed text-slate-600">
            {result}
          </p>
        </div>
      </div>
    </motion.div>
  );
}