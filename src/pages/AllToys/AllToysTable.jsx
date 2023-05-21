import { Link } from "react-router-dom";

const AllToysTable = ({ toy }) => {
  const { title, seller, category, price, quantity } = toy;

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        {seller}
      </td>
      <td>
        {title}
      </td>
      <td>
        {category}
      </td>
      <td>
        {price}
      </td>
      <td>
        {quantity}
      </td>
      <th>
        <button className="btn btn-ghost btn-xs">
            <Link to="">Details</Link>
        </button>
      </th>
    </tr>
  );
};

export default AllToysTable;
