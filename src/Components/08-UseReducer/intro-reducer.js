
const initalState = [{
    id:1,
    todo:'Buy Bread',
    done:false
}]

const todoReducer= (state=initalState,action) =>{
    if (action?.type === 'add'){
        return [...state,action.payload]
    }
    return state
}

let todos = todoReducer()

const newTodo = {
    id:2,
    todo:'Go to the shopping',
    done:false
}

const addToDoAction = {
    type:'add',
    payload:newTodo
}

todos = todoReducer(todos,addToDoAction)




console.log(todos);
