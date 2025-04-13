import Link from "next/link";

export default function VideoCard({ video }) {
  return (
    <Link href={"/video/" + video.slug}>
      <div className="bg-zinc-900 rounded-lg p-2 shadow hover:scale-105 transition">
        <img src={video.image} alt={video.title.rendered} className="rounded mb-2" />
        <div className="flex justify-between text-sm text-gray-300">
          <span>{video.acf?.qualite}</span>
          <span>{video.acf?.duree}</span>
        </div>
        <h2 className="text-base font-semibold mt-1">{video.title.rendered}</h2>
        {video.acf?.premium && (
          <span className="text-xs bg-yellow-500 text-black px-2 py-0.5 rounded-full inline-block mt-1">Premium</span>
        )}
      </div>
    </Link>
  );
}