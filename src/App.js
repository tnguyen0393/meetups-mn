import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/meetups-mn/" exact={true}>
          <AllMeetupsPage />
        </Route>
        <Route path="/meetups-mn/new-meetup" exact={true}>
          <NewMeetupPage />
        </Route>
        <Route path="/meetups-mn/favorites" exact={true}>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
