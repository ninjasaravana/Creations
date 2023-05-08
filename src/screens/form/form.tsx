import { useCallback, useMemo, useState } from "react";
import styles from "./form.module.css";

const Form: React.FC = () => {
  const intialState = useMemo(() => {
    return {
      name: "",
      dob: "",
      email: "",
      phone: "",
      errors: {
        name: "",
        dob: "",
        email: "",
        phone: "",
      },
    };
  }, []);
  const [formData, setFormData] = useState(intialState);
  const [success, setSuccess] = useState(false);
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validation = useCallback(() => {
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[A-Za-z0-9.-_$]+@+[A-Za-z]+.+[A-Za-z]$/;
    const validate = {
      name: "",
      dob: "",
      email: "",
      phone: "",
    };
    if (formData.name.trim() === "") {
      validate.name = "Name should not be empty";
    }
    if (formData.dob === "") {
      validate.dob = "Invalid DOB";
    }

    if (!emailRegex.test(formData.email)) {
      validate.email = "Invalid Email Id";
    }
    if (!phoneRegex.test(formData.phone)) {
      validate.phone = "Invalid phone number";
    }
    setFormData((d) => {
      return { ...d, errors: validate };
    });
    return {
      input: validate,
      status:
        validate.name === "" &&
        validate.dob === "" &&
        validate.email === "" &&
        validate.phone === "",
    };
  }, [formData.dob, formData.email, formData.name, formData.phone]);

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
        <form className={styles.submitForm} onSubmit={onSubmit}>
          <h2>Form</h2>
          <div className={styles.inputPart}>
            <span className={styles.label}>Name</span>
            <input
              className={styles.inputField}
              placeholder='Ram'
              name='name'
              type='text'
              value={formData.name}
              onChange={handleChange}
              maxLength={50}
            />
          </div>
          {formData.errors.name !== "" && (
            <p className={styles.error}>Name Required</p>
          )}
          <div className={styles.inputPart}>
            <span className={styles.label}>DOB</span>
            <input
              className={styles.inputField}
              placeholder='01-01-2023'
              name='dob'
              type='date'
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          {formData.errors.dob !== "" && (
            <p className={styles.error}>Invalid DOB</p>
          )}
          <div className={styles.inputPart}>
            <span className={styles.label}>Email-Id</span>
            <input
              className={styles.inputField}
              placeholder='abc@gmail.com'
              name='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
              maxLength={50}
            />
          </div>
          {formData.errors.email !== "" && (
            <p className={styles.error}>Invalid Email id</p>
          )}
          <div className={styles.inputPart}>
            <span className={styles.label}>Phone.no</span>
            <input
              className={styles.inputField}
              placeholder='9876543210'
              name='phone'
              type='tel'
              value={formData.phone}
              onChange={handleChange}
              maxLength={15}
            />
          </div>
          {formData.errors.phone !== "" && (
            <p className={styles.error}>Invalid Phone no</p>
          )}
          <button className={styles.submitButton} type='submit'>
            Submit
          </button>
        </form>
        {success && (
          <h3 className={styles.success}>Form Submitted Successfully!!!</h3>
        )}
      </div>
    </div>
  );
};

export default Form;
