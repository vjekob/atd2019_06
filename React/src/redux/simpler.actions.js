import { bindActionCreators } from "redux";

export const SIMPLER_ACTIONS = {
    UPDATE: "UPDATE",
    SELECT: "SELECT"
};

export const update = data => ({ type: SIMPLER_ACTIONS.UPDATE, payload: { data: data } });
const select = entry => ({ type: SIMPLER_ACTIONS.SELECT, payload: entry });

export const mapDispatchSimplerSelectToProps = dispatch => bindActionCreators({ select }, dispatch);
