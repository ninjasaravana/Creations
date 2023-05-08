import { useCallback, useMemo, useState } from "react";
import styles from "./loginForm.module.css";

const LoginForm: React.FC = () => {
  const intialState = useMemo(() => {
    return {
      username: "",
      password: "",

      errors: {
        username: "",
        password: "",
      },
    };
  }, []);
  const [formData, setFormData] = useState(intialState);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validation = useCallback(() => {
    const validate = {
      username: "",
      password: "",
    };
    if (formData.username !== "saravana") {
      validate.username = "Username not found";
    }
    if (formData.password !== "12345678") {
      validate.password = "Incorrect password";
    }
    setFormData((d) => {
      return { ...d, errors: validate };
    });
    return {
      input: validate,
      status: validate.username === "" && validate.password === "",
    };
  }, [formData.password, formData.username]);

  const stateReset = useCallback(() => {
    setFormData(intialState);
    setSuccess(false);
  }, [intialState]);

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      const errorCheck = validation();
      if (errorCheck.status) {
        setSuccess(true);
        setTimeout(stateReset, 3000);
      }
      return;
    },
    [stateReset, validation]
  );
  return (
    <div className={styles.parent}>
      <div className={styles.head}>
        <form onSubmit={onSubmit}>
          <h2>Login Form</h2>
          <div className={styles.inputPart}>
            <span className={styles.label}>Username</span>
            <input
              placeholder='Ram'
              name='username'
              type='text'
              value={formData.username}
              onChange={handleChange}
              maxLength={50}
            />
          </div>
          {formData.errors.username !== "" && <p>{formData.errors.username}</p>}
          <div className={styles.inputPart}>
            <span className={styles.label}>Password</span>
            <input
              name='password'
              type='password'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {formData.errors.password !== "" && <p>{formData.errors.password}</p>}
          <button className={styles.submitButton} type='submit'>
            Login
          </button>
        </form>
        {success && (
          <h3 className={styles.success}>Logged In Successfully!!!</h3>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
