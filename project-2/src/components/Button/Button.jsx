import styles from "./Button.module.css";

const Button = ({ icon, text, isOutline, ...rest }) => {
  return (
    <>
      {/* <div className={styles.container}> */}
      <button {...rest} className={isOutline ? styles.outline_btn : styles.btn}>
        {icon}
        {text}
      </button>
      {/* </div> */}
    </>
  );
};

export default Button;
