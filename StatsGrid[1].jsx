import {
  CheckBadgeIcon,
  ExclamationTriangleIcon,
  HeartIcon,
  SparklesIcon
} from '@heroicons/react/24/solid';
import SectionCard from '../common/SectionCard';

const iconMap = [HeartIcon, CheckBadgeIcon, ExclamationTriangleIcon, SparklesIcon];

export default function StatsGrid({ summary = {} }) {
  const cards = [
    { label: 'Active Medicines', value: summary.activeMedicines || 0 },
    { label: 'Taken Today', value: summary.takenToday || 0 },
    { label: 'Missed Today', value: summary.missedToday || 0 },
    { label: 'Low Stock Alerts', value: summary.lowStockCount || 0 }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => {
        const Icon = iconMap[index];
        return (
          <SectionCard key={card.label} className="bg-white/10">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-cyan-50/75">{card.label}</p>
                <h3 className="mt-3 text-4xl font-extrabold text-white">{card.value}</h3>
              </div>
              <div className="rounded-2xl bg-white/20 p-3">
                <Icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </SectionCard>
        );
      })}
    </div>
  );
}

