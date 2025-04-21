import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import css from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  console.log("Navigation-",isLoggedIn,"-", user);
  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
        
      )}
    </nav>
  );
}