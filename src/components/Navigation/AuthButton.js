import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions";
// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSignOutAlt,
    faSignInAlt,
    faUserPlus
} from "@fortawesome/free-solid-svg-icons";

const AuthButton = ({ user, logout }) => {
    let buttons = [
        <li
            key="loginButton"
            className="nav-item"
            style={{ fontFamily: "Lilita One" }}
        >
            <Link to="/login" className="nav-link">
                <FontAwesomeIcon icon={faSignInAlt} /> Login
      </Link>
        </li>,
        <li
            key="StaffsignupButton"
            className="nav-item"
            style={{ fontFamily: "Lilita One" }}
        >
            <Link to="/signup/staff/" className="nav-link">
                <FontAwesomeIcon icon={faUserPlus} /> Staff Signup
      </Link>
        </li>,
        <li
            key="ApplicantsignupButton"
            className="nav-item"
            style={{ fontFamily: "Lilita One" }}
        >
            <Link to="/signup/applicant/" className="nav-link">
                <FontAwesomeIcon icon={faUserPlus} /> Applicant Signup
      </Link>
        </li>

    ];

    if (user) {
        buttons = (
            <>
                <li className="nav-item">
                    <span className="nav-link" style={{ fontFamily: "Verdana" }}>
                        <Link to="/" className="nav-link" onClick={logout}>
                            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                        </Link>
                    </span>
                </li>
            </>
        );
    }

    return <ul className="navbar-nav ml-auto" key="Signup_button">{buttons}</ul>;
};

const mapStateToProps = state => ({
    user: state.user.user,
    applicant: state.user.applicant
});

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actionCreators.logout())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
