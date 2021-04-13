import { Route, BrowserRouter as Router , Switch } from 'react-router-dom';
import './App.css';
import SignIn from './component/authentication/SignIn';
import SignUp from './component/authentication/SignUp';
import Nav from './component/home/Nav';
import AddPatient from './component/patient/AddPatient';
import DisplayPatient from './component/patient/DisplayPatient';
import Antecedent from './component/patient/record/Antecedent';

function App() {
  return (
      <Router>
        <div className="App">
          <Nav/>
          <Switch >

            <Route path='/signIn' component={SignIn}/>
            <Route path='/signUp' component={SignUp}/>
            <Route path='/addPatient' component={AddPatient}/>
            <Route path='/displayPatient' component={DisplayPatient}/>
   
          </Switch>
        </div>
      </Router>
  );
}

export default App;
