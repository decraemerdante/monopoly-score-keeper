import { Link } from "react-router-dom";

import SalaryBtn from "../transactions/salaryBtn";

function ListItem(props) {
  const player = props.player;
  const path = `/transaction/add/${props.number}`;

  return (
    <tr>
      <td>
        {player.name} ({props.number})
      </td>
      <td>{player.budget}</td>
      <td>
        <Link to={path} className="btn btn-primary me-3">
          Add transaction
        </Link>
        <SalaryBtn player={player} />
      </td>
    </tr>
  );
}

export default ListItem;
