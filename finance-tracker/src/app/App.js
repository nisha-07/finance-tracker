import "./App.css"

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"

import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Navbar from '../components/Navbar/Navbar';
import Signup from '../pages/signup/Signup';
import useAuthContext from '../hooks/useAuthContext';

function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" element={<Home />}>
              {user ? <Home /> : <Redirect to="/login" />}
            </Route>
            <Route path="/login" element={<Login />}>
              {!user ? <Login /> : <Redirect to="/" />}
            </Route>
            <Route path="/signup" element={<Signup />}>
              {!user ? <Signup /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
