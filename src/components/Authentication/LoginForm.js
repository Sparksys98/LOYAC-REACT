import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../redux/actions/userAuthentication"
class Login extends Component {
    state = {
        email: "",
        password: ""
    };

    handleChange = event =>
        this.setState({ [event.target.name]: event.target.value });

    handleSubmit = event => {
        event.preventDefault();
        this.props.login(this.state, this.props.history);
    };

    render() {
        if (this.props.user) return <Redirect to="/welcome" />;
        const { email, password } = this.state;

        return (
            <div className="my-6" style={{ fontFamily: "Lilita One" }}>
                <div className="container-fluid jumbotron bg-transparent my-5 text-center align-ceneter">
                    <div className=" col-6 mx-auto my-5">
                        <div className="card my-5">
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            value={email}
                                            name="email"
                                            placeholder="email"
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            value={password}
                                            name="password"
                                            placeholder="Password"
                                            onChange={this.handleChange}
                                        />
                                        <p style={{ color: "red" }}>
                                            {" "}
                                            {this.props.errors
                                                ? this.props.errors.non_field_errors
                                                : ""}
                                        </p>
                                    </div>
                                    <p style={{ color: "red" }}>
                                        {" "}
                                        {this.props.errors
                                            ? this.props.errors.detail
                                            : ""}
                                    </p>
                                    <button type="submit" className="btn btn-secondary">
                                        Login
                  </button>
                                    <br />
                                    <Link
                                        to="/signup/staff/"
                                        className="btn btn-link my-2 my-sm-0"
                                        style={{ color: "gray" }}
                                    >
                                        Staff Signup
                  </Link>
                                    <Link
                                        to="/signup/applicant/"
                                        className="btn btn-link my-2 my-sm-0"
                                        style={{ color: "gray" }}
                                    >
                                        Applicants Signup
                  </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        errors: state.errors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (userData, history) => dispatch(login(userData, history))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
