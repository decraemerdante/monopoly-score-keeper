import { useDispatch, useSelector } from "react-redux";
import ListItem from "./list-item";
import { Link } from "react-router-dom";
import * as playerActions from "../../redux/actions/playerActions";

function List() {
  const players = useSelector((state) => state.players);
  const cols = 3;
  const dispatch = useDispatch();

  function clearGame(e) {
    e.preventDefault();
    dispatch(playerActions.clearGame());
  }

  return (
    <div>
      <div className="row">
        {players && players.length > 0 ? (
          players.map((player, index) => {
            return <ListItem player={player} number={index} />;
          })
        ) : (
          <h2>No players found</h2>
        )}
      </div>
      <div className="row border border-1 rounded p-3 mt-3">
        <div className="col-6 p-0">
          <Link to="/add" className="btn btn-primary">
            <i className="bi bi-plus"></i> Add player
          </Link>
        </div>

        <div className="col-6 p-0">
          <button className="btn btn-danger float-end" onClick={clearGame}>
            Clear game
          </button>
        </div>
      </div>
    </div>
  );
}

export default List;
