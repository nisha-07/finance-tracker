import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" element={<Home />}>
            <Home />
          </Route>
          <Route path="/login" element={<Login />}>
            <Login />
          </Route>
          <Route path="/signup" element={<Signup />}>
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
