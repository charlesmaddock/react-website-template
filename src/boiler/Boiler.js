// Third party
import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
// Custom components
import { Loading } from "../components/general";
import Footer from "../containers/Footer";
import Header from "../containers/Header";
// Lazy loading
const Home = lazy(() => import("../containers/Home.jsx"));
const About = lazy(() => import("../containers/About.jsx"));
const PageNotFound = lazy(() => import("../containers/PageNotFound.jsx"));

const Boiler = () => (
  <>
    <Header />
    <Suspense fallback={<Loading fullScreen />}>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Route render={(props) => <PageNotFound {...props} />} />
      </Switch>
    </Suspense>
    <Footer />
  </>
);

export default Boiler;
