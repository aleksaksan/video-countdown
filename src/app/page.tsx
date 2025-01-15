import { VideoCard } from "@/components/VideoCard";

const mockVide = [
  {
    id: 1,
    title: "Shrek",
    src: "/Shrek - All star _ Intro HD (1080p).mp4",
    poster: ""
  },
  {
    id: 2,
    title: "Shrek - All star _ Intro HD (1080p).mp4 Shrek - All star _ Intro HD (1080p).mp4 Shrek - All star _ Intro HD (1080p).mp4",
    src: "/Shrek - All star _ Intro HD (1080p).mp4",
    poster: ""
  },
  {
    id: 3,
    title: "Shrek",
    src: "/Shrek - All star _ Intro HD (1080p).mp4",
    poster: ""
  },
  {
    id: 4,
    title: "Shrek",
    src: "/Shrek - All star _ Intro HD (1080p).mp4",
    poster: ""
  },
  {
    id: 5,
    title: "Shrek",
    src: "/Shrek - All star _ Intro HD (1080p).mp4",
    poster: ""
  },
  {
    id: 6,
    title: "Shrek",
    src: "/Shrek - All star _ Intro HD (1080p).mp4",
    poster: ""
  },
  {
    id: 7,
    title: "Shrek",
    src: "/Shrek - All star _ Intro HD (1080p).mp4",
    poster: ""
  },
  {
    id: 8,
    title: "Shrek",
    src: "/Shrek - All star _ Intro HD (1080p).mp4",
    poster: ""
  },
  {
    id: 9,
    title: "Shrek",
    src: "/Shrek - All star _ Intro HD (1080p).mp4",
    poster: ""
  },
  {
    id: 10,
    title: "Shrek",
    src: "/Shrek - All star _ Intro HD (1080p).mp4",
    poster: ""
  },
  {
    id: 11,
    title: "Shrek",
    src: "/Shrek - All star _ Intro HD (1080p).mp4",
    poster: ""
  },
  {
    id: 12,
    title: "Shrek",
    src: "/Shrek - All star _ Intro HD (1080p).mp4",
    poster: ""
  },
  {
    id: 13,
    title: "Shrek",
    src: "/Shrek - All star _ Intro HD (1080p).mp4",
    poster: ""
  },
  {
    id: 14,
    title: "Shrek",
    src: "/Shrek - All star _ Intro HD (1080p).mp4",
    poster: ""
  },
  {
    id: 15,
    title: "Shrek",
    src: "/Shrek - All star _ Intro HD (1080p).mp4",
    poster: ""
  },

]

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <ul className="grid lg:grid-cols-3 gap-8 p-2 sm:grid-cols-1 md:grid-cols-2">
        {mockVide.map((video) => <li key={video.id} ><VideoCard {...video} /></li>)}
      </ul>
    </>
      
  );
}
