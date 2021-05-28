import playerEnum from "../../enums/playerEnum";
import Player from "../../models/player";
import Transaction from "../../models/transaction";

const freeParking = new Player(playerEnum.FREE_PARKING);
freeParking.budget = 0;
const bank = new Player(playerEnum.BANK);
bank.budget = 10000000;
const initialState = [bank, freeParking];

export default function playerReducer(state = initialState, action) {
  let newState = [...state];

  if (localStorage.getItem("state")) {
    newState = JSON.parse(localStorage.getItem("state"));
  }

  switch (action.type) {
    case playerEnum.ADD_PLAYER:
      newState = [...newState, action.payload];
      break;
    case playerEnum.GET_PLAYER_BY_ID:
      newState = newState[action.payload];
      break;
    case playerEnum.ADD_TRANSACTION:
    case playerEnum.ADD_SALARY:
      newState = AddTransaction(newState, action);
      break;
    case playerEnum.CLEAR_GAME:
      localStorage.removeItem("state");
      newState = initialState;
      break;
  }

  localStorage.setItem("state", JSON.stringify(newState));
  return newState;
}

function AddTransaction(state, action) {
  let player = state[action.payload.id];
  let receiverPlayer = state.find(function (el) {
    return el.name == action.payload.receiver;
  });

  const amount = parseInt(action.payload.transaction);
  player = AddTransactionForPlayer(
    action.payload.receiver,
    amount * -1,
    player
  );

  receiverPlayer = AddTransactionForPlayer(player.name, amount, receiverPlayer);

  return state;
}

function AddTransactionForPlayer(receiver, amount, player) {
  player.budget += amount;

  player.transactions.push(new Transaction(amount, receiver));

  return player;
}
