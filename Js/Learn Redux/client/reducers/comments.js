//a reducer takes thow things:

// 1. the action( info about what happened)
//2. copy of current state

// na primeira vez que rodar, state não estará setada, por isso iniciamos ela
function postComments(state = [], action) {

    switch (action.type) {
        case "ADD_COMMENT":

            return [...state, {
                user: action.author,
                text: action.comment,
            }]
        case "REMOVE_COMMENT":
            
            return [
                ...state.slice(0, action.i),
                ...state.slice(action.i + 1),
            ]

        default: return state;
    }

}

function comments(state = [], action) {
    if(typeof action.postId !== 'undefined'){
        return {
            ...state,
            [action.postId]: postComments(state[action.postId], action),
        }
    }
    switch(action.type){
        case "ADD_COMMENT" :

            return 

        default: return state;
    }

}

export default comments;