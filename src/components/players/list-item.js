import { Link } from "react-router-dom";

import SalaryBtn from "../transactions/salaryBtn";

function ListItem(props) {
  const player = props.player;
  const path = `/transaction/add/${props.number}`;

  return (
    <div className="border border-1 rounded p-3 mt-3">
      <div className="row">
        <div className="col-6">
          <h3>
            <Link to={path}>{player.name}</Link>
          </h3>
        </div>
        <div className="col-6">
          <h3>{player.budget}</h3>
        </div>
        <div className="mt-3">
          <SalaryBtn player={player} />
        </div>
      </div>
    </div>
  );
}

export default ListItem;
