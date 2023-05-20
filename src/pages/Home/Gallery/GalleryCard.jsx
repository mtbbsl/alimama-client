import { Link } from "react-router-dom";

const GalleryCard = ({ gallery }) => {
  const { img } = gallery;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <img src={img} alt="" className="object-cover h-64 w-96 rounded-xl p-4" />
    </div>
  );
};

export default GalleryCard;
