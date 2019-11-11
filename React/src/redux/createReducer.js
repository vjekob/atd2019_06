export function createReducer(initialState, handlers) {
    return (state = initialState, action) => {
        const { type, payload, ...middleware } = action;
        return typeof handlers[type] === "function"
            ? handlers[type](state, payload, middleware)
            : state;
    }
};
