import React from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import google from "../../../images/icon/google.png";
import github from "../../../images/icon/github.png";

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const redirect = location?.state?.from || "/home";

    const {
        getEmail,
        getPassword,
        signInWithEmail,
        error,
        setUser,
        setError,
        signInWithGoogle,
        signInWithGithub,
        setEmail,
        setPassword,
    } = useAuth();

    const handellogin = (e) => {
        e.preventDefault();
        signInWithEmail()
            .then((result) => {
                setEmail()
                setPassword()
                setUser(result.user)
                history.push(redirect)
            })
            .catch((err) => {
                setError(err.message);
            });
    }

    return (
        <div className="text-center my-4">
            <h2>Please Login</h2>
            <p className=" mt-2">Login with Email & Password</p>
            <p className="text-danger text-center">{error}</p>
            <div className="w-25 mx-auto">
                <Form onSubmit={handellogin}>
                    <Row>
                        <Col className="text-start">
                            <Form.Label htmlFor="email" visuallyHidden>
                                Your Email Address
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                </InputGroup.Text>
                                <FormControl
                                    required
                                    onBlur={getEmail}
                                    type="email"
                                    autoComplete="current-email"
                                    id="email"
                                    placeholder="Enter your email address"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col className="text-start">
                            <Form.Label htmlFor="password" visuallyHidden>
                                Your Password
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                                </InputGroup.Text>
                                <FormControl
                                    required
                                    onBlur={getPassword}
                                    type="password"
                                    autoComplete="current-password"
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <button type="submit" className="btn btn-primary mt-2 w-100">
                        Login
                    </button>
                </Form>
            </div>
            <p className="mt-2">
                <NavLink className="text-decoration-none" to="/signup">
                    Need an Account? Please Sign up!
                </NavLink>
                <br />
                <NavLink className="text-decoration-none" to="/reset">
                    Forget password? Reset!
                </NavLink>
            </p>
            <p className="mt-3">Or</p>
            <p> Login with</p>
            <div>
                <button
                    onClick={() => {
                        signInWithGoogle()
                            .then((result) => {
                                setUser(result.user);
                                history.push(redirect);
                            })
                            .catch((err) => {
                                setError(err.message);
                            });
                    }}
                    className="btn"
                >
                    <img src={google} width="46px" alt="google-icon" />
                </button>

                <button
                    onClick={() => {
                        signInWithGithub()
                            .then((result) => {
                                setUser(result.user);
                                console.log(result._tokenResponse)
                                history.push(redirect);
                            })
                            .catch((err) => {
                                setError(err.message);
                            });
                    }}
                    className="btn"
                >
                    <img width="55px" src={github} alt="github-icon" />
                </button>
            </div>
        </div>
    );
};

export default Login;
