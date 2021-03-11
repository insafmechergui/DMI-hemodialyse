import { Route, BrowserRouter as Router , Switch } from 'react-router-dom';
import './App.css';
import SignIn from './component/authentication/SignIn';
import SignUp from './component/authentication/SignUp';
import Nav from './component/home/Nav';
import Abstract from './component/patient/record/Abstract';
import AddPatient from './component/patient/AddPatient';
import Antecedent from './component/patient/record/Allergies';
import GeneralInformation from './component/patient/record/GeneralInformation';
import Tests from './component/patient/record/Tests';
function App() {
  return (
      <Router>
        <div className="App">
          <Nav/>
          <Switch >

            <Route path='/signIn' component={SignIn}/>
            <Route path='/signUp' component={SignUp}/>
            <Route path='/addPatient' component={AddPatient}/>
            <Route path='/generalInformation' component={GeneralInformation}/>
            <Route path='/allergies' component={Antecedent}/>
            <Route path='/tests' component={Tests}/>
            <Route path='/abstract' component={Abstract}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
