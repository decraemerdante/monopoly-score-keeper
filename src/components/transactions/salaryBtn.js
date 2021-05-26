import * as playerActions from "../../redux/actions/playerActions";
import { useDispatch } from "react-redux";
import playerEnum from "../../redux/enums/playerEnum";

function SalaryBtn(props) {
  const player = props.player;
  const dispatch = useDispatch();
  function addSalary() {
    dispatch(playerActions.addSalary(player.name));
  }

  return (
    <span>
      {player.name != playerEnum.BANK &&
      player.name != playerEnum.FREE_PARKING ? (
        <button className="btn btn-success me-3" onClick={addSalary}>
          <i className="bi bi-cash"></i>{" "}
          <span className="d-none d-md-inline-block">Salary</span>
        </button>
      ) : (
        <div></div>
      )}
    </span>
  );
}

export default SalaryBtn;
