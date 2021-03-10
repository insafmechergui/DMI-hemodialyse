import './App.css';
import SignIn from './component/authentication/SignIn';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import SignUp from './component/authentication/SignUp';
import AddPatient from './component/patient/AddPatient';


function App() {
  return (
    <Router>

    <div className="App">
      <Switch>
          <Route path='/signIn' component={SignIn}/>
          <Route path='/signUp' component={SignUp}/>
          <Route path='/addPatient' component={AddPatient}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
