import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom"
import { useDispatch } from "react-redux"
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
import ListingDetails from "./pages/ListingDetails";
import Bands from "./pages/Bands";
import Applicants from "./pages/Applicants";
import EditListingForm from "./components/EditListingForm";
import { setUser } from "./features/userSlice";
import { fetchListings } from "./features/listingSlice"
import { fetchBands } from './features/bandsSlice'
import { fetchReviews } from "./features/reviewSlice";
import { fetchGigApplications } from "./features/gigApplicationsSlice";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUser())
    dispatch(fetchListings())
    dispatch(fetchBands())
    dispatch(fetchReviews())
    dispatch(fetchGigApplications())
  }, [dispatch])

  return (
    <>
      <NavBar />
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

        <Route exact path="/bands">
          <Bands />
        </Route>

        <Route path="/bands/:id">
          <BandInfo />
        </Route>

        <Route exact path="/listings/:id">
          <ListingDetails />
        </Route>

        <Route path="/listings/:id/applicants">
          <Applicants />
        </Route>

        <Route path="/listings/:id/edit">
          <EditListingForm />
        </Route>

      </Switch>
    </>
  );
}

export default App;
