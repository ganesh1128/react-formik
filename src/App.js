import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import Product from "./Product";
import ProductCreate from "./product-create";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProductEdit from "./product-edit";

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <div class="container-fluid">
              <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/product" component={Product} exact={true} />
                <Route
                  path="/product-create"
                  component={ProductCreate}
                  exact={true}
                />
                <Route
                  path="/product/edit/:id"
                  component={ProductEdit}
                  exact={true}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
