import SectionCard from '../common/SectionCard';

export default function HealthPanel({ metrics = [], familyMembers = [], aiSuggestion }) {
  return (
    <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
      <SectionCard>
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-100/65">Health Tracking</p>
        <h2 className="mt-2 text-2xl font-bold text-white">Latest Readings</h2>
        <div className="mt-5 space-y-3">
          {metrics.map((metric) => (
            <div key={metric._id} className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm capitalize text-cyan-100/70">{metric.type.replace('_', ' ')}</p>
              <p className="mt-2 text-xl font-bold text-white">{metric.value}</p>
              <p className="mt-1 text-xs text-cyan-50/65">
                {new Date(metric.recordedAt).toLocaleString()}
              </p>
            </div>
          ))}
          {!metrics.length && <p className="text-cyan-50/80">No health metrics recorded yet.</p>}
        </div>
      </SectionCard>

      <SectionCard>
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-100/65">Smart Care</p>
        <h2 className="mt-2 text-2xl font-bold text-white">Family + AI Suggestion</h2>
        <div className="mt-5 rounded-3xl bg-slate-950/20 p-5">
          <p className="text-sm leading-6 text-cyan-50/90">{aiSuggestion}</p>
        </div>

        <div className="mt-5 space-y-3">
          {familyMembers.map((member) => (
            <div key={member._id} className="rounded-2xl bg-white/10 p-4">
              <p className="font-semibold text-white">{member.name}</p>
              <p className="text-sm text-cyan-50/75">{member.email}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}

