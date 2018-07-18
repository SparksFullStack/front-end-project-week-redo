export const CREATE_NOTE = "CREATE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

export const createNote = (newTitle, newContent) => {
    return {
        type: CREATE_NOTE,
        payload: {
            title: newTitle,
            content: newContent,
        },
    }
}

export const updateNote = (newTitle, newContent, id) => {
    return {
        type: UPDATE_NOTE,
        payload: {
            title: newTitle,
            content: newContent,
            id: id,
        }
    }
}

export const deleteNote = (id) => {
    return {
        type: DELETE_NOTE,
        payload: {
            id: id,
        }
    }
}