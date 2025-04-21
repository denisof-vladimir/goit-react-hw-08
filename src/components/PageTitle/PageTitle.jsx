import css from "./PageTitle.module.css";

export default function PageTitle({ children }) {
  return <h3 className={css.heading}>{children}</h3>;
}