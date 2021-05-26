import playerEnum from "../enums/playerEnum";
import Transaction from "./transaction";

export default function Player(name) {
  this.name = name;
  this.budget = 1500;
  this.transactions = [new Transaction(1500, playerEnum.BANK)];
}
