
import logo from './logo.svg';
import Dashboard from './components/dashboard'
import Signup from './components/signup'
import Signin from './components/signin'
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from "./components/popup"
import './App.css'; 
import Navbar from "./components/Navbar"
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
   <Navbar />
   <BrowserRouter>
   <Switch>
     <Route exact path="/dashboard" component={Dashboard}/>
     <Route exact path="/signin" component={Signin}/>
     <Route exact path="/signup" component={Signup}/>
   </Switch>
   </BrowserRouter>
       </div>
  );
}

export default App;
