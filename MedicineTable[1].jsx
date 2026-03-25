import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import SectionCard from '../common/SectionCard';

export default function MedicineTable({ medicines = [], onEdit, onDelete }) {
  const formatMealTiming = (value) => (value ? value.replace(/_/g, ' ') : 'anytime');

  return (
    <SectionCard>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Medicine Library</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm text-cyan-50/85">
          <thead>
            <tr className="text-cyan-100/65">
              <th className="pb-3">Medicine</th>
              <th className="pb-3">Dosage</th>
              <th className="pb-3">Frequency</th>
              <th className="pb-3">Meal Timing</th>
              <th className="pb-3">Times</th>
              <th className="pb-3">Stock</th>
              <th className="pb-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((medicine) => (
              <tr key={medicine._id} className="border-t border-white/10">
                <td className="py-4 font-semibold text-white">{medicine.name}</td>
                <td className="py-4">{medicine.dosage}</td>
                <td className="py-4 capitalize">{medicine.frequency}</td>
                <td className="py-4 capitalize">{formatMealTiming(medicine.mealTiming)}</td>
                <td className="py-4">{medicine.times.join(', ')}</td>
                <td className="py-4">{medicine.stock}</td>
                <td className="py-4">
                  <div className="flex gap-3">
                    <button onClick={() => onEdit(medicine)} className="rounded-xl bg-white/10 p-2">
                      <PencilSquareIcon className="h-5 w-5" />
                    </button>
                    <button onClick={() => onDelete(medicine._id)} className="rounded-xl bg-rose-500/20 p-2">
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionCard>
  );
}
