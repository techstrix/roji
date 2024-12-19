import { Search, FileUp } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    title: 'Instant Answers',
    description: 'Get quick and accurate responses to your academic questions',
    icon: Search,
  },
  {
    title: 'File Upload',
    description: 'Upload images or documents to get more detailed help',
    icon: FileUp,
  },
  {
    title: 'Smart Assistance',
    description: 'Advanced AI helps you understand complex topics easily',
    icon: Search,
  },
];

export function FeatureGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3 mt-12">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  );
}