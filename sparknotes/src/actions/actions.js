export const CREATE_NOTE = "CREATE_NOTE";

export const createNote = (newTitle, newContent) => {
    return {
        type: CREATE_NOTE,
        payload: {
            title: newTitle,
            content: newContent,
        },
    }
}