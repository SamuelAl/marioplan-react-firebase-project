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

    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log("create project");
            console.log(action.project);
            return state
        case 'CREATE_PROJECT_ERROR': 
            console.log('create project error', action.err)
            return state
        default:
            return state
    }
}

export default projectReducer