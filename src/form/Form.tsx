import { useCallback, useMemo, useState } from "react";
import "./Form.css";

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
  // const [error, setError] = useState(intialState);
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
    <div className='parent'>
      <div className='head'>
        <h2>Form</h2>
        <form onSubmit={onSubmit}>
          <div className='inputPart'>
            <span className='label'>Name</span>
            <input
              placeholder='Ram'
              name='name'
              type='text'
              value={formData.name}
              onChange={handleChange}
              maxLength={50}
            />
          </div>
          {formData.errors.name !== "" && <p>Name Required</p>}
          <div className='inputPart'>
            <span className='label'>DOB</span>
            <input
              placeholder='01-01-2023'
              name='dob'
              type='date'
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          {formData.errors.dob !== "" && <p>Invalid DOB</p>}
          <div className='inputPart'>
            <span className='label'>Email-Id</span>
            <input
              placeholder='abc@gmail.com'
              name='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
              maxLength={50}
            />
          </div>
          {formData.errors.email !== "" && <p>Invalid Email id</p>}
          <div className='inputPart'>
            <span className='label'>Phone.no</span>
            <input
              placeholder='9876543210'
              name='phone'
              type='tel'
              value={formData.phone}
              onChange={handleChange}
              maxLength={15}
            />
          </div>
          {formData.errors.phone !== "" && <p>Invalid Phone no</p>}
          <button className='submitButton' type='submit'>
            Submit
          </button>
        </form>
        {success && <h3 className='success'>Form Submitted Successfully!!!</h3>}
      </div>
    </div>
  );
};

export default Form;
