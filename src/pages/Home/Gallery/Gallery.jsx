import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/gallery")
      .then((res) => res.json())
      .then((data) => setGalleries(data));
  }, []);

  return (
    <div className="hero bg-gray-900 text-white my-12 py-12 rounded-xl">
      <div className="hero-content flex flex-col gap-12 px-12">
        <div className="space-y-6 text-center">
          <h1 className="text-5xl font-bold">Toy Car Gallery</h1>
          <p>
            The Toy Car Gallery is a captivating collection showcasing a wide
            range of toy cars from various eras, models, and brands. Explore a
            world of miniature automobiles, from vintage classics to modern
            sports cars and everything in between. Immerse yourself in the
            intricate details and craftsmanship of each toy car as you browse
            through the gallery. Whether you&apos;re a car enthusiast or simply
            appreciate the charm of toy cars, this gallery offers a delightful
            experience for all ages. Discover the nostalgia, joy, and
            imagination that these miniature vehicles evoke as you embark on a
            journey through the Toy Car Gallery.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {galleries.map((gallery) => (
            <GalleryCard key={gallery.id} gallery={gallery}></GalleryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
