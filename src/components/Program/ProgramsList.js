import React, { Component } from "react";
import { connect } from "react-redux";
import ProgramsCard from "./ProgramsCard";

class ProgramsList extends Component {
    render() {
        const programCards = this.props.programs.map((program) => (
            <ProgramsCard key={program.id} program={program} />
        ));

        return (
            <div className="container">
                {programCards.length !== 0 ?
                    <div>
                        <h3>Our Programs</h3>
                        <div className="row">{programCards}</div>
                    </div>
                    : <h3>No Programs Yet</h3>}
            </div>
        );
    }
}

const mapStateToProps = ({ programs }) => ({
    programs
});

export default connect(mapStateToProps)(ProgramsList);