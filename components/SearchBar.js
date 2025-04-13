import { useState, useEffect } from "react";
import debounce from "lodash.debounce";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const debounced = debounce(onSearch, 300);

  useEffect(() => {
    debounced(value);
    return () => debounced.cancel();
  }, [value]);

  return (
    <input
      type="text"
      placeholder="Rechercher une vidéo..."
      className="w-full bg-zinc-800 p-2 rounded mb-2"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}