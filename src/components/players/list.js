import { useSelector } from "react-redux";
import ListItem from "./list-item";
import { Link } from "react-router-dom";

function List() {
  const players = useSelector((state) => state.players);
  const cols = 3;
  return (
    <div className="row">
      <div className="col-12 border border-1 rounded p-3 mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Budget</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {players && players.length > 0 ? (
              players.map((player, index) => {
                return <ListItem player={player} number={index} />;
              })
            ) : (
              <tr>
                <td colSpan={cols}>No players found</td>
              </tr>
            )}
            <tr>
              <td colSpan={cols}>
                <Link to="/add">Add player</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
