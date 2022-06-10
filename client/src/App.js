import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import CreateListingForm from "./components/CreateListingForm";
import NavBar from "./components/NavBar";
import Profile from "./pages/Profile";
import BandInfo from "./pages/BandInfo";
import GigApplications from "./pages/GigApplications";
import YourListings from "./pages/YourListings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/createlisting">
            <CreateListingForm />
          </Route>

          <Route path="/yourlistings">
            <YourListings />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/editprofile">
            <EditProfile />
          </Route>

          <Route path="/gigapplications">
            <GigApplications />
          </Route>

          <Route path="/bands/:id">
            <BandInfo />
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
