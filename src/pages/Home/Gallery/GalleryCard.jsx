const GalleryCard = ({ gallery }) => {
  const { title, img, price, rating } = gallery;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" className="object-cover h-64 w-96" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price: ${price}</p>
        <p>Rating: {rating}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-warning">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
