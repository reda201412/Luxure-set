export default function FilterBar({ onFilter }) {
  return (
    <select onChange={(e) => onFilter(e.target.value)} className="bg-zinc-800 p-2 rounded text-white mb-4">
      <option value="">Toutes qualités</option>
      <option value="HD">HD</option>
      <option value="Full HD">Full HD</option>
      <option value="4K">4K</option>
    </select>
  );
}