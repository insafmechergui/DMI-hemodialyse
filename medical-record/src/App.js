import { Route, BrowserRouter as Router , Switch } from 'react-router-dom';
import './App.css';
import SignIn from './component/authentication/SignIn';
import SignUp from './component/authentication/SignUp';
import Nav from './component/home/Nav';
import AddPatient from './component/patient/AddPatient';

function App() {
  return (
      <Router>
        <div className="App">
          <Nav/>
          <Switch >

            <Route path='/signIn' component={SignIn}/>
            <Route path='/signUp' component={SignUp}/>
            <Route path='/addPatient' component={AddPatient}/>
   
          </Switch>
        </div>
      </Router>
  );
}

export default App;
