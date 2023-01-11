import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const pageSize = 9;
  const apiKey= process.env.REACT_APP_API_KEY

  const [progress, setProgress] = useState(0)
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color="#fff" progress={progress} height={2} />
          <Switch>
            <Route exact path="/">
              <News
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="in"
                apiKey={apiKey}
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                country="in"
                apiKey={apiKey}
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                apiKey={apiKey}
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <News
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="in"
                apiKey={apiKey}
                category="general"
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                country="in"
                apiKey={apiKey}
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                country="in"
                apiKey={apiKey}
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                country="in"
                apiKey={apiKey}
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                country="in"
                apiKey={apiKey}
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
}

export default App