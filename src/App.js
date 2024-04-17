import React from 'react';
import { AuthProvider } from './hooks/AuthContext';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Dashboard from './components/Dashboard';


import SignUp from './components/Presidents/Signup';
import UserList from './components/Presidents/PresidentList';
import UpdateUser from './components/Presidents/updatePresident';
import UserProfileDashboard from './components/Presidents/UserProfileDashboard';
import DashboardPr from './components/President/DashboardPr';
import CreateProgramme from './components/Presidents/CreateProgramme';
import ListAllPrograms from './components/Presidents/ListAllPrograms';

import SignupAdmin from './components/AdminPublique/SignupAdmin';
import AdminPubliqueList from './components/AdminPublique/AdminPubliqueList';
import UpdateAdmin from './components/AdminPublique/UpdateAdmin';
import ListProgramsForAdmin from './components/AdminPublique/ListProgramsForAdmin'

import conseillerList from './components/conseillerLocale/conseillerList';
import SignupConseilleur from './components/conseillerLocale/SignupConseilleur';
import UpdateConseilleur from './components/conseillerLocale/UpdateConseilleur';

import ListProgramsConseiller from './components/conseillerLocale/ListProgramsConseiller';
import CreateEvaluationForm from './components/conseillerLocale/CreateEvaluationForm';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/dashboard" component={Dashboard} />
          
          <Route path="/PresidentList" component={UserList} />
          <Route path="/update/:id" component={UpdateUser} />
          <Route path="/CreateProgramme" component={CreateProgramme} />
          <Route path="/ListAllPrograms" component={ListAllPrograms} />
          
          

          <ProtectedRoute path="/profile" component={UserProfileDashboard} />
          <ProtectedRoute path="/dashboardpr" component={DashboardPr} />

          <Route path="/SignupAdmin" component={SignupAdmin} />
          <Route path="/adminpublique/:id" component={UpdateAdmin} />
          <Route path="/admins" component={AdminPubliqueList} />
          <Route path="/ListProgramsForAdmin/:id" component={ListProgramsForAdmin} />
          

          <Route path="/signup_conseilleur" component={SignupConseilleur} />
          <Route path="/conseilleur/:id" component={UpdateConseilleur} />
          <Route path="/conseillerList" component={conseillerList} />
          <Route path="/update/:id" component={UpdateUser} />
          
          <Route path="/ListProgramsConseiller/:conseillerId" component={ListProgramsConseiller} />
          <Route path="/create-evaluation/:conseillerId/:programId" component={CreateEvaluationForm} />




        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
