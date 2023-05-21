

const MyToysRow = ({myToy}) => {
    const { title, price, rating, category, quantity} = myToy;

    const handleDelete = id => {
      const proceed = confirm('Are you sure want to delete');
      if(proceed){
        fetch(`https://alimama-server.vercel.app/myToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      }
    }

    return (
      <tr>
        <td>
          <button onClick={() => handleDelete()} className="btn btn-sm">Del</button>
        </td>
        <td>{title}</td>
        {/* <td>{img}</td> */}
        <td>{price}</td>
        <td>{rating}</td>
        <td>{category}</td>
        <td>{quantity}</td>
        {/* <td>{description}</td> */}
      </tr>
    );
};

export default MyToysRow;