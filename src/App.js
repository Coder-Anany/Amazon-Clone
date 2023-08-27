import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe("pk_test_51NZJKDSIBn56VI0IOHsy758iV65VF63XTHBg8oRbI00dsn1pOBaVTyupqnFSNhFydOmT0jjgqL3N2FwfelBUYSJy00xGwXPDCY");
function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        dispatch({
         type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<><Header /><Home /></>} />
          <Route path='/orders' element={<><Header /><Orders /></>} />
          <Route path='/checkout' element={<><Header /><Checkout /></>} />
          <Route path='/login' element={<><Login /></>} />
          <Route path='/payment' element={<><Header /><Elements stripe={promise}><Payment /></Elements> </>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
