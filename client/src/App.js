import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Navbar from "./components/navbarComponent";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Add from "./containers/add";
import View from "./containers/view";
//styles
function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        <Router>
          <Switch>
            <Route exact path="/add" component={Add} />
            <Route exact path="/">
              <Redirect to="/add" />
            </Route>
            <Route exact path="/view" component={View} />
          </Switch>
          <Navbar />
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
