import AppBar from "../AppBar/AppBar";
import Navigation from '../Navigation/Navigation';
import css from "./Layout.module.css";

export default function Layout({ children }) {
  console.log("Layout-",);
  return (
    <div className={css.container}>
      <AppBar />
      {/* <Navigation /> */}
      {children}
    </div>
  );
}