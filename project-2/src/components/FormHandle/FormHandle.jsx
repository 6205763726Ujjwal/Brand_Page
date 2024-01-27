import React from "react";
import Button from "../Button/Button";
import { MdOutlineMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "./FormHandle.module.css";
import { useState } from "react";

const FormHandle = () => {
  const [name, setName] = useState(" nandani");
  const [email, setEmail] = useState("121coolujjwal@gmail.com");
  const [text, setText] = useState("12345");
  const hello = () => {
    console.log("hello i am from via call");
  };

  const formSubmit = (e) => {
    e.preventDefault();

    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  };

  // console.log(e.target[0].value);
  // console.log(e.target[1].value);
  // console.log(e.target[2].value);

  return (
    <section className={styles.main}>
      <div className={styles.input_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage />} />
          <Button onClick={hello} text="VIA CALL" icon={<FaPhoneAlt />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdOutlineMessage />}
        />
        <form onSubmit={formSubmit}>
          <div className={styles.control_form}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.control_form}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.control_form}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="5" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="Submit" />
          </div>
        </form>
        <div>{name + " " + email + " " + text}</div>
      </div>
      <div className={styles.image_section}>
        <img src="Image/Girl.svg" alt="girl" />
      </div>
    </section>
  );
};
export default FormHandle;
 