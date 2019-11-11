import { createReducer } from "./createReducer";
import { SIMPLER_ACTIONS } from "./simpler.actions";

const INITIAL_STATE = {
    data: [],
    selected: []
};

export const simpler = createReducer(INITIAL_STATE, {
    [SIMPLER_ACTIONS.UPDATE]: (state, payload) => (
        {
            data: [ ...payload.data ],
            selected: state
                .selected
                .filter(invoice => payload.data.find(newInvoice => newInvoice.entryNo === invoice.entryNo))
        }
    ),

    [SIMPLER_ACTIONS.SELECT]: (state, payload) => (
        {
            data: state.data,
            selected: state.selected.find(entry => entry.entryNo === payload.entryNo)
                ? state.selected.filter(entry => entry.entryNo !== payload.entryNo)
                : [...state.selected, payload]
        }
    )
});
