import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Education from "../pages/education/EducationComponent";
import Error404 from "../pages/errors/error404/Error";
import Experience from "../pages/experience/Experience";
import Home from "../pages/home/HomeComponent";
import Projects from "../pages/projects/Projects";
import Splash from "../pages/splash/Splash";
import { settings } from "../portfolio.js";

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter basename="/wacimPortfolio">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} theme={this.props.theme} />
              ) : (
                <Home {...props} theme={this.props.theme} />
              )
            }
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path="/experience"
            exact
            render={(props) => (
              <Experience {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/education"
            render={(props) => (
              <Education {...props} theme={this.props.theme} />
            )}
          />

          {settings.isSplash && (
            <Route
              path="/splash"
              render={(props) => <Splash {...props} theme={this.props.theme} />}
            />
          )}

          <Route
            path="/projects"
            render={(props) => <Projects {...props} theme={this.props.theme} />}
          />
          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={this.props.theme} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
