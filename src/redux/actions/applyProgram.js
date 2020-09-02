import instance from "./instance";
import { APPLY_PROGRAM } from "./types";

export const applyProgram = (programID) => async (dispatch) => {
    try {
        const response = await instance.get("applicant/");

        const user = response.data;

        if (user.program.length !== 0) {
            const programDataID = user.program.map((data) => { return data.id })
            programDataID.push(programID)
            const res = await instance.put('applicant/apply/',
                {
                    program: programDataID
                }

            );
            const program = res.data;
            dispatch({ type: APPLY_PROGRAM, payload: program });
        }
        else {
            const res = await instance.put('applicant/apply/',
                {
                    program: [programID]
                }
            );
            const program = res.data;
            dispatch({ type: APPLY_PROGRAM, payload: program });
        }

    } catch (err) {
        console.error(err);
    }
};