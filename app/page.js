"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "@/components/VideoCard";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import Skeleton from "@/components/Skeleton";

export default function HomePage() {
  const [videos, setVideos] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://shorties.free.nf/wp-json/wp/v2/video?_embed").then((res) => {
      const data = res.data.map(v => ({
        ...v,
        image: v._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg'
      }));
      setVideos(data);
      setFiltered(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    let result = videos;
    if (query) {
      result = result.filter(v => v.title.rendered.toLowerCase().includes(query.toLowerCase()));
    }
    if (filter) {
      result = result.filter(v => v.acf?.qualite === filter);
    }
    setFiltered(result);
  }, [query, filter, videos]);

  return (
    <main className="px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Luxure Set</h1>
      <SearchBar onSearch={setQuery} />
      <FilterBar onFilter={setFilter} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {loading ? [...Array(6)].map((_, i) => <Skeleton key={i} />)
          : filtered.map(video => <VideoCard key={video.id} video={video} />)}
      </div>
    </main>
  );
}