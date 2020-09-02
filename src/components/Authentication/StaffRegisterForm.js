import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signup } from "../../redux/actions/userAuthentication";
import { connect } from "react-redux";

class StaffRegisterForm extends Component {
    state = {
        email: "",
        password: "",
        birth_date: "",
        first_name: "",
        last_name: "",
    };
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitHandler = (e) => {
        e.preventDefault();
        this.props.signup(this.state, this.props.history);
    };

    render() {
        const errors = this.props.errors;
        return (
            <div className="card col-6 mx-auto p-0 mt-5">
                <div className="card-body">
                    <h5 className="card-title mb-4 log">
                        Register Staff
                    </h5>
                    <form onSubmit={this.submitHandler}>
                        <div className="form-group">
                            <input
                                className={`form-control ${errors.email && "is-invalid"}`}
                                type="text"
                                placeholder="Email"
                                name="email"
                                value={this.state.email}
                                onChange={this.changeHandler}
                            />
                            <div className="invalid-feedback">{errors.email}</div>
                        </div>

                        <div className="form-group">
                            <input
                                className={`form-control ${
                                    errors.non_field_errors &&
                                    errors.non_field_errors &&
                                    "is-invalid"
                                    }`}
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={this.changeHandler}
                            />
                            <div className="invalid-feedback">{errors.non_field_errors}</div>
                        </div>


                        <div className="form-group">
                            <input
                                className={`form-control ${errors.birth_date && "is-invalid"}`}
                                type="text"
                                placeholder="Birth Date in: YYYY-MM-DD"
                                name="birth_date"
                                value={this.state.birth_date}
                                onChange={this.changeHandler}
                            />
                            <div className="invalid-feedback">{errors.birth_date}</div>
                        </div>

                        <div className="form-group">
                            <input
                                className={`form-control ${
                                    errors.first_name && "is-invalid"
                                    }`}
                                type="text"
                                placeholder="First Name"
                                name="first_name"
                                value={this.state.first_name}
                                onChange={this.changeHandler}
                            />
                            <div className="invalid-feedback">{errors.first_name}</div>
                        </div>

                        <div className="form-group">
                            <input
                                className={`form-control ${
                                    errors.last_name && "is-invalid"
                                    }`}
                                type="text"
                                placeholder="Last Name"
                                name="last_name"
                                value={this.state.last_name}
                                onChange={this.changeHandler}
                            />
                            <div className="invalid-feedback">{errors.last_name}</div>
                        </div>

                        <input
                            className="btn btn-dark"
                            type="submit"
                            value="Create Account"
                        />
                    </form>
                </div>
                <div className="card-footer log">
                    <Link
                        to="/login"
                        className="btn btn-link  my-2 my-sm-0"
                        style={{ color: "gray" }}
                    >
                        Login With an Existing Account
                  </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        errors: state.errors,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        signup: (userData, history) =>
            dispatch(signup(userData, history)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StaffRegisterForm);
