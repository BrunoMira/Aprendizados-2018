//a reducer takes thow things:

// 1. the action( info about what happened)
//2. copy of current state

// na primeira vez que rodar, state não estará setada, por isso iniciamos ela
function posts(state = [], action){
    const i = action.index;

    switch( action.type ){
        case 'INCREMENT_LIKES' :
            return [
                ...state.slice(0, i),
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1),
            ];
        default:
            return state;
    }
}

export default posts;