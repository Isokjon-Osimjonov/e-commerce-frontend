import { Switch, Route } from "react-router-dom";

import "./styles/App.css";

import Home from "./routes/home/Home";
import SignUp from "./routes/signUp/SignUp";
import SignIn from "./routes/signIn/SignIn";
import Admin from "./routes/admin/Admin";
import Me from "./routes/me/Me";
import Category from "./components/category/Category";
import Books from "./Category-components/books/Book";
import Main from "./components/mainPage/Main";
function App() {
  return (
    // <div className="App">
    //   <Header />
    // </div>
    <>
      {/* <Home /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category" component={Category} />

        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/admin" component={Admin} />
        <Route path="/me" component={Me} />
        <Route path="/books" component={Books} />
      </Switch>
    </>
  );
}

export default App;
