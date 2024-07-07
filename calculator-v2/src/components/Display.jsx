import styles from "./Display.module.css"
const Display = ({ displayVal }) => {
  return <input className={styles.disp} type="text" value={displayVal} readOnly/>;
};
export default Display;