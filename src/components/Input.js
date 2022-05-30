import { useState } from 'react';
import "./input.css";
import ArrowIcon from '../images/icon-arrow.svg';
import ErrorIcon from '../images/icon-error.svg';

function Input() {
    const [email, setMail] = useState("");
    const [error, setError] = useState(false);

    const checkEmail = (email) => {
        const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(email);
    }

    const handleChange = (e) => {
        setError(false);
        setMail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!checkEmail(email)) {
            setError(true);
        }
    }
    return (
        <>
        <form className="input">
            <input className={error ? "error" : ""} type="text" placeholder="Email Address" value={email} onChange={handleChange} />
            {error ? 
                <img className="error-icon" src={ErrorIcon} alt="error"></img> : null
            }
            <button onClick={handleSubmit}>
                <img src={ArrowIcon} alt="arrow"></img>
            </button>
        </form>
        {error ?
            <div className="error-info">
                Please provide a valid email
            </div> : null
        }
        </>
    );
}

export default Input;