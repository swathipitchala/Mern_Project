import { BellSnoozeIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import SectionCard from '../common/SectionCard';

const statusClass = {
  scheduled: 'bg-white/15 text-white',
  taken: 'bg-emerald-400/20 text-emerald-100',
  missed: 'bg-rose-500/20 text-rose-100',
  snoozed: 'bg-amber-400/20 text-amber-100'
};

export default function ScheduleList({ schedule = [], onStatusChange }) {
  const formatMealTiming = (value) => (value ? value.replace(/_/g, ' ') : 'anytime');

  return (
    <SectionCard className="medical-icon-pattern">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-100/65">Today</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Daily Schedule</h2>
        </div>
      </div>

      <div className="space-y-4">
        {schedule.map((item) => (
          <div
            key={`${item.medicineId}-${item.scheduledAt}`}
            className="rounded-3xl border border-white/12 bg-slate-950/15 p-4"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-lg font-bold text-white">{item.name}</p>
                <p className="text-sm text-cyan-50/75">
                  {item.dosage} at {item.time} | {formatMealTiming(item.mealTiming)} | Remind {item.reminderWindowMinutes} min before | Stock: {item.stock}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase ${statusClass[item.status]}`}>
                  {item.status}
                </span>
                <button
                  onClick={() => onStatusChange(item, 'taken')}
                  className="flex items-center gap-2 rounded-2xl bg-emerald-400/20 px-4 py-2 text-sm font-semibold text-white"
                >
                  <CheckCircleIcon className="h-5 w-5" />
                  Taken
                </button>
                <button
                  onClick={() => onStatusChange(item, 'missed')}
                  className="flex items-center gap-2 rounded-2xl bg-rose-400/20 px-4 py-2 text-sm font-semibold text-white"
                >
                  <XCircleIcon className="h-5 w-5" />
                  Missed
                </button>
                <button
                  onClick={() => onStatusChange(item, 'snoozed')}
                  className="flex items-center gap-2 rounded-2xl bg-amber-300/20 px-4 py-2 text-sm font-semibold text-white"
                >
                  <BellSnoozeIcon className="h-5 w-5" />
                  Snooze
                </button>
              </div>
            </div>
          </div>
        ))}

        {!schedule.length && <p className="text-cyan-50/80">No medicines scheduled for today yet.</p>}
      </div>
    </SectionCard>
  );
}
