import AppBar from "components/AppBar";
import { Switch, Route, Redirect } from "react-router-dom";
import WelcomePage from "pages/WelcomePage";
import MeetingPage from "pages/MeetingPage";

function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route path="/start" component={MeetingPage} />
        <Route path="/" component={WelcomePage} />
        <Redirect from="/" to="/" />
      </Switch>
    </>
  );
}

export default App;
