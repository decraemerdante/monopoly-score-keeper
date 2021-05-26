import playerEnum from "../enums/playerEnum";

export const getPlayers = () => {
  return (dispatch) => {
    dispatch({
      type: playerEnum.GET_PLAYERS,
    });
  };
};

export const addPlayer = (player) => {
  return (dispatch) => {
    dispatch({
      type: playerEnum.ADD_PLAYER,
      payload: player,
    });
  };
};

export const getPlayerById = (id) => {
  return (dispatch) => {
    dispatch({
      type: playerEnum.GET_PLAYER_BY_ID,
      payload: id,
    });
  };
};

export const addTransactionToPlayer = (id, transaction, receiver) => {
  return (dispatch) => {
    dispatch({
      type: playerEnum.ADD_TRANSACTION,
      payload: { id: id, transaction: transaction, receiver: receiver },
    });
  };
};

export const addSalary = (receiver) => {
  return (dispatch) => {
    dispatch({
      type: playerEnum.ADD_SALARY,
      payload: { id: 0, transaction: 200, receiver: receiver },
    });
  };
};
