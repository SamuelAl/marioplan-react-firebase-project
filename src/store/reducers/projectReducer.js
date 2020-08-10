const initState = {
    projects: [
        {
            id :1,
            title: "First Project",
            content: "peach is sexy"
        },
        {
            id: 2,
            title: "Second Project",
            content: "super cool"
        }
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer