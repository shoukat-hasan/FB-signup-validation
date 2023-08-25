import React from 'react'
import "./Main.css"
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'


const Main = () => {
    const [userFName, setUserFName] = useState('');
    const [fNameMsg, setFNameMsg] = useState("What's your name?")
    const [showFNameError, setShowFNameError] = useState(false);

    const [userSurName, setUserSurName] = useState('');
    const [surNameMsg, setSurNameMsg] = useState("What's your name?");
    const [showSurNameError, setShowSurNameError] = useState(false);

    const [userEmail, setUserEmail] = useState('');
    const [emailMsg, setEmailMsg] = useState("You will use this when you log in and if you ever need to reset your password.")
    const [showEmailError, setShowEmailError] = useState(false);

    const [userPassword, setUserUserPassword] = useState('');
    const [passwordMsg, setPasswordMsg] = useState(">Enter a combination of at least six numbers, letters and puntuation marks (such as ! and &).")
    const [showPasswordError, setShowPasswordError] = useState(false);


    const userFNameHandler = (e) => {
        setUserFName(e.target.value);
        if (userFName !== "") {
            setFNameMsg("Looks Good!")
        }
    }

    const userSurNameHandler = (e) => {
        setUserSurName(e.target.value);
        if (userSurName !== "") {
            setSurNameMsg("Looks Good!")
        }
    }

    const userEmailHandler = (e) => {
        setUserEmail(e.target.value);
        if (userEmail !== "") {
            setEmailMsg("Looks Good!")
        }
    }

    const userPasswordHandler = (e) => {
        setUserUserPassword(e.target.value);
        if (userPassword !== "") {
            setPasswordMsg("Looks Good!")
        }
    }

    const userFormSubmitHandler = (e) => {
        e.preventDefault()
        if (userFName === "") {
            setShowFNameError(true)
        }

        if (userSurName === "") {
            setShowSurNameError(true)
        }

        if (userEmail === "") {
            setShowEmailError(true)
        }

        if (userPassword === "") {
            setShowPasswordError(true)
        }
    }

    return (
        <div className="container d-flex justify-content-center align-items-center vh-70">
            <div>
                <div className='mx-5'>
                    <div className='container-fluid mb-5'>
                        <div className="card mb-5 px-2">
                            <div className="container text-center my-2">
                                <h3 className='fw-bold fs-1'>Create a new account</h3>
                                <span className='text-muted fs-6'>It's quick & easy.</span>
                            </div>
                            <hr />
                            <form onSubmit={userFormSubmitHandler}>
                                <div className="container">
                                    <div className='container d-flex justify-content-center'>
                                        <div className='container position-relative'>
                                            <input type="text" value={userFName} onChange={userFNameHandler} className='form-control' placeholder='First Name' />
                                            <div className="position-absolute top-0 end-0">
                                                {showFNameError && fNameMsg !== "Looks Good!" && <FontAwesomeIcon icon={faCircleExclamation} className='mt-2 me-4' style={{color: "#ea2806",}} />}
                                            </div>
                                            {showFNameError && <p className={`text-white ${fNameMsg === "Looks Good!" ? "bg-success" : "bg-danger"} fw-bold mx-2 my-1 px-2 rounded`}>{fNameMsg}</p>}
                                        </div>

                                        <div className='container position-relative'>
                                            <input type="text" value={userSurName} onChange={userSurNameHandler} className='form-control' placeholder='Sur Name' />
                                            <div className="position-absolute top-0 end-0">
                                                {showSurNameError && surNameMsg !== "Looks Good!" && <FontAwesomeIcon icon={faCircleExclamation} className='mt-2 me-4' style={{color: "#ea2806",}} />}
                                            </div>
                                            {showSurNameError && <p className={`text-white ${surNameMsg === "Looks Good!" ? "bg-success" : "bg-danger"} fw-bold mx-2 my-1 px-2 rounded`}>{surNameMsg}</p>}
                                        </div>

                                    </div>

                                    <div className='d-flex justify-content-center position-relative mx-3 my-2'>

                                        <input type="text" value={userEmail} onChange={userEmailHandler} className='form-control' placeholder='Mobile Number or Email Address' />
                                        <div className="position-absolute top-0 end-0">
                                            {showEmailError && emailMsg !== "Looks Good!" && <FontAwesomeIcon icon={faCircleExclamation} className='mt-2 me-3' style={{color: "#ea2806",}} />}
                                        </div>

                                    </div>
                                    <div className='container'>
                                        {showEmailError && <p className={`text-white ${emailMsg === "Looks Good!" ? "bg-success" : "bg-danger"} fw-bold mx-2 my-1 px-2 rounded`}>{emailMsg}</p>}
                                    </div>
                                    <div className='d-flex justify-content-center position-relative mx-3 my-2'>
                                        <input type="password" value={userPassword} onChange={userPasswordHandler} className='form-control' placeholder='New Password' />
                                        <div className="position-absolute top-0 end-0">
                                            {showPasswordError && passwordMsg !== "Looks Good!" && <FontAwesomeIcon icon={faCircleExclamation} className='mt-2 me-3' style={{color: "#ea2806",}} />}
                                        </div>
                                    </div>
                                    <div className="container">
                                        {showPasswordError && <p className={`text-white ${passwordMsg === "Looks Good!" ? "bg-success" : "bg-danger"} fw-bold mx-2 my-1 px-2 rounded`}>{passwordMsg}</p>}
                                    </div>
                                    <div className="container mx-2 lh-large">
                                        <span className='text-muted fs-6'>People who use our service may have uploaded your contact information to <br /> Facebook. <span> </span>
                                            <a href="https://www.facebook.com/help/637205020878504">Learn More.</a></span> <br />
                                        <span className='text-muted fs-6'>By clicking Sign Up, you agree to our <a href='https://www.facebook.com/legal/terms/update'>
                                            Terms</a>, <a href='https://www.facebook.com/about/privacy/update'>Privacy Policy</a> and
                                            <a href='https://www.facebook.com/policies/cookies/'> Cookies Policy</a>. <br />
                                            You may receive SMS notifications from us and can opt out at any time.</span>
                                    </div>
                                    <div className="container text-center my-3 ">
                                        <button type="submit" className="btn btn-color text-white fw-bold fs-4 px-5">Signup</button>
                                    </div>
                                    <div className='container text-center mb-5'>
                                        <a href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjkyOTM3ODA4LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D"
                                            className='text-decoration-none'>
                                            Already have an account?
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Main