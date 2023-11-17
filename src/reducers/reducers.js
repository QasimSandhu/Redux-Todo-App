const Initial_State = {
    User_data: []
}


export const todoreducers = (state = Initial_State, action) => {
    switch (action.type) {
        case "ADD_DATA":
            return {
                ...state,
                User_data: [...state.User_data, action.payload]
            }
        case "RVM_DATA":
            // Remove matched id and return remaining data
            const deldata = state.User_data.filter((element, key) => key !== action.payload)

            return {
                ...state, User_data: deldata
            }
        case "UPDATE_DATA":
            const updatedata = state.User_data.map((element, key) => key === action.d_id ? action.payload : element)
            return {
                ...state, User_data: updatedata
            }
        case "COUNT_DATA":
            console.log("Count Data Reducers page");
            return {
                ...state,
                User_data: [...state.User_data, action.payload]
            }
        case "SUBMIT_FORM_DATA":
            return {
                ...state,
                User_data: [...state.User_data, action.payload]
            }
        default: return state;
    }
}