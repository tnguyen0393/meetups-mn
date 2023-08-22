import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups MN</div>
      <nav>
        <ul>
          <li>
            <Link to="/meetups-mn/">All Meetups</Link>
          </li>
          <li>
            <Link to="/meetups-mn/new-meetup">Add New Meetups</Link>
          </li>
          <li>
            <Link to="/meetups-mn/favorites">
              My Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
