import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom"
import { Button } from "react-bootstrap"
const Welcome = ({ user, applicant }) => {
    if (!user) return <Redirect to="/login" />;
    return (

        <div className="container">
            {user.is_staff ? <>
                <Link to="/program/create/">
                    <Button variant="secondary">Create Program</Button>
                </Link>
            </> : <><Link to="/programs">
                <Button variant="secondary">Our Programs</Button>
            </Link>
                    <div>
                        {applicant.total_points === null ? <h2>Total Points: 0</h2> : <h2>Total Points: {applicant.total_points}</h2>}
                    </div>
                </>}

        </div>
    );
}


const mapStateToProps = state => {
    return {
        user: state.user.user,
        applicant: state.user.applicant,
    };
};


export default connect(mapStateToProps)(Welcome);