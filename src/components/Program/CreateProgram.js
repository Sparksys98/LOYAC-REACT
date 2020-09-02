import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
class CreateProgram extends Component {
    state = {
        name: "",
        image: null,
        description: "",
        age_group: "",
        points: "",
    };

    handleChange = (event) =>
        this.setState({ [event.target.name]: event.target.value });

    handleImage = (event) =>
        this.setState({ image: event.target.files[0] });

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createProgram(this.state, this.props.history);
    };

    render() {
        if (this.props.user.is_staff === false) return <Redirect to="/welcome" />;
        const { name, description, age_group, points } = this.state;
        const errors = this.props.errors;
        return (
            <div className="my-6">
                <div className="container-fluid jumbotron bg-transparent my-5 text-center align-ceneter">
                    <div className=" col-6 mx-auto my-5">
                        <div className="card my-5">
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Program Name</label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.name && "is-invalid"}`}
                                            id="name"
                                            value={name}
                                            name="name"
                                            placeholder="Type Program Name..."
                                            onChange={this.handleChange}
                                        />
                                        <div className="invalid-feedback">{errors.name}</div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="image">Image</label>
                                        <input
                                            type="file"
                                            className={`form-control ${errors.image && "is-invalid"}`}
                                            id="image"
                                            name="image"
                                            placeholder="Image"
                                            onChange={this.handleImage}
                                        />
                                        <div className="invalid-feedback">{errors.image}</div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.description && "is-invalid"}`}
                                            id="description"
                                            value={description}
                                            name="description"
                                            placeholder="Type Description..."
                                            onChange={this.handleChange}
                                        />
                                        <div className="invalid-feedback">{errors.description}</div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="age_group">Age</label>
                                        <select className="custom-select"
                                            name="age_group"
                                            placeholder="age_group"
                                            value={age_group}
                                            onChange={this.handleChange}
                                            required>
                                            <option value="">Choose Age Group...</option>
                                            <option value="1">Kids</option>
                                            <option value="2">Teens</option>
                                            <option value="3">Adults</option>
                                        </select>
                                        <div className="invalid-feedback">{errors.age_group}</div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="points">Points</label>
                                        <input
                                            type="points"
                                            className={`form-control ${errors.points && "is-invalid"}`}
                                            id="points"
                                            value={points}
                                            name="points"
                                            placeholder="Points"
                                            onChange={this.handleChange}
                                        />
                                        <div className="invalid-feedback">{errors.points}</div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Create Program
                                    </button>
                                    <br />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        errors: state.errors
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createProgram: (programData, history) => dispatch(actions.createProgram(programData, history)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProgram);
