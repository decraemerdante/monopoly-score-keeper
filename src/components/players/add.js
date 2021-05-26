import React, { useState } from "react";
import Player from "../../redux/models/player";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as playerActions from "../../redux/actions/playerActions";

function Add() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  let history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    const player = new Player(name);

    dispatch(playerActions.addPlayer(player));

    history.push("/list");
  }

  return (
    <div className="col-12" className=" border border-1 rounded p-3 mt-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Add;
