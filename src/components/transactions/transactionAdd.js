import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import * as playerActions from "../../redux/actions/playerActions";
import playerEnum from "../../redux/enums/playerEnum";
import SalaryBtn from "./salaryBtn";
import TransactionHistory from "./transactionHistory";

function AddTransaction() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const [number, setBudget] = useState("");
  const [receiver, setReceiver] = useState(playerEnum.BANK);

  let players = useSelector((state) => state.players);

  const player = players[id];

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(playerActions.addTransactionToPlayer(id, number, receiver));
  }

  function getClassNames(name) {
    switch (name) {
      case playerEnum.BANK:
        return "btn btn-dark me-3";
      case playerEnum.FREE_PARKING:
        return "btn btn-secondary me-3";
      default:
        return "btn btn-outline-primary me-3";
    }
  }

  return (
    <div>
      {player ? (
        <div className="col-12">
          <h1>{player.name}</h1>
          <h2>Budget: {player.budget}</h2>
          <div className="border border-1 rounded p-3 mt-3">
            <h3>Quick actions</h3>
            <SalaryBtn player={player} />
          </div>
          <form
            onSubmit={handleSubmit}
            className="border border-1 rounded p-3 mt-3"
          >
            <div className="form-group col-12">
              <label for="number">Amount:</label>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  id="budget"
                  value={number}
                  min="0"
                  onChange={(e) => setBudget(e.target.value)}
                  required
                />
                <div className="input-group-append">
                  <span className="input-group-text">--> {receiver}</span>
                </div>
              </div>
            </div>

            <div className="form-group mt-3">
              {players && players.length > 0 ? (
                players.map((player, index) => {
                  let classNames = getClassNames(player.name);

                  return (
                    <button
                      type="button"
                      className={classNames}
                      id={player.name}
                      onClick={(e) => setReceiver(e.target.id)}
                    >
                      {player.name}
                    </button>
                  );
                })
              ) : (
                <div></div>
              )}
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary  mt-3">
                Submit
              </button>
            </div>
          </form>
          <TransactionHistory player={player} />
        </div>
      ) : (
        <div>Player not found</div>
      )}
      <Link to="/list" className="btn btn-light float-end mt-3">
        Back
      </Link>
    </div>
  );
}

export default AddTransaction;
