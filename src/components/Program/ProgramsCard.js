import React, { Component } from "react";
import { applyProgram } from "../../redux/actions";
import { connect } from "react-redux";
import { Card, Button, CardGroup } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class ProgramsCard extends Component {
    apply() {
        this.props.applyProgram(this.props.program.id);
        alert("Applied Successfully");
    }
    submit = () => {
        confirmAlert({
            title: 'Apply Confirmation',
            message: 'Are you sure you want to apply to this program?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => { this.apply() }
                },
                {
                    label: 'No',

                }
            ]
        });
    };

    render() {
        const applicant = this.props.applicant
        return (
            <CardGroup>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`${this.props.program.image}`} alt={this.props.program.image} width="600" height="250" />
                    <Card.Body>
                        <Card.Title>{this.props.program.name}</Card.Title>
                        <Card.Text>
                            {this.props.program.description}
                        </Card.Text>
                        {applicant.age >= this.props.program.age_group.from_age && applicant.age <= this.props.program.age_group.to_age ? <Button variant="primary" onClick={this.submit}>
                            Apply </Button> : <Button variant="secondary" disabled>
                                Not in the correct age group</Button>}
                    </Card.Body >
                </Card >
            </CardGroup >
        );

    }
}

const mapStateToProps = state => ({
    applicant: state.user.applicant
});


const mapDispatchToProps = (dispatch) => ({
    applyProgram: (programID) => dispatch(applyProgram(programID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProgramsCard);
