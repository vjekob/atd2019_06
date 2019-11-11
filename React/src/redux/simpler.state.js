import { connect } from "react-redux";
import { mapDispatchSimplerSelectToProps } from "./simpler.actions";

const mapStateToSimplerData = state => ({ data: state.simpler.data });
const mapStateToSimplerEntry = (state, ownProps) => ({
    entry: state.simpler.data.find(entry => entry.entryNo === ownProps.entryNo),
    selected: !!state.simpler.selected.find(entry => entry.entryNo === ownProps.entryNo)
});
const mapStateToSimplerSelected = state => ({ selected: state.simpler.selected });

const enhancerEntry = {
    areStatePropsEqual: (next, prev) => next.entry.amount === prev.entry.amount && next.selected === prev.selected
};

export const connectToSimplerData = component => connect(mapStateToSimplerData)(component);
export const connectToSimplerEntry = component => connect(mapStateToSimplerEntry, mapDispatchSimplerSelectToProps, null, enhancerEntry)(component);
export const connectToSimplerSelected = component => connect(mapStateToSimplerSelected)(component);
