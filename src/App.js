import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import List from "./components/players/list";
import Add from "./components/players/add";
import AddTransaction from "./components/transactions/transactionAdd";
function App() {
  return (
    <div className="App container">
      <div className="col-12">
        <Switch>
          <Route exact path="/">
            <List />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route exact path="/add">
            <Add />
          </Route>
          <Route path="/transaction/add/:id">
            <AddTransaction />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
