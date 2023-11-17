export const Add = (iteams) => {
    return {
        type: "ADD_DATA",
        payload: iteams
    }
}

// Remove data

export const Remove = (id) => {
    return {
        type: "RVM_DATA",
        payload: id
    }
}

// Update Data
export const Update_data = (iteams, id) => {
    return {
        type: "UPDATE_DATA",
        payload: iteams,
        d_id: id
    }
}

// Count Data
export const Count_data = (iteams, count) => {
    return {
        type: "COUNT_DATA",
        payload: iteams,
        set_count: count
    }
}

// Submit Form Data
export const Submit_Form_data = (iteams) => {
    console.log(iteams, "Action.JS iteams SUBMIT");
    return {
        type: "SUBMIT_FORM_DATA",
        payload: iteams
    }
}