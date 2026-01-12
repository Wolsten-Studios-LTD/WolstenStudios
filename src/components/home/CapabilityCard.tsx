import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { fadeInUp, springs } from '../../config/animations';

interface CapabilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function CapabilityCard({ icon: Icon, title, description, delay = 0 }: CapabilityCardProps) {
  return (
    <motion.div
      className="p-8 relative overflow-hidden bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300"
      {...fadeInUp}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        ...springs.smooth,
        delay,
      }}
    >
      <Icon size={32} className="text-cyan-500 mb-6" />
      <h3 className="mb-4 text-xl font-semibold text-slate-900">
        {title}
      </h3>
      <p className="text-[15px] leading-relaxed text-slate-600">
        {description}
      </p>
    </motion.div>
  );
}
