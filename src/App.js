import { Switch, Route } from "react-router-dom";

import "./styles/App.css";

import Home from "./routes/home/Home";
import SignUp from "./routes/signUp/SignUp";
import SignIn from "./routes/signIn/SignIn";
import Admin from "./routes/admin/Admin";
function App() {
  return (
    // <div className="App">
    //   <Header />
    // </div>
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </>
  );
}

export default App;
