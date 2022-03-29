import { TodoListItem } from "./TodoListItem"


export const TodoList = ({todos,handleDelete,handleToggle}) => {


  return (
    <ul className="list-gruop list-group-flush">
            {todos.map((todo, index) => (
              <TodoListItem 
              key = { todo.id }
              todo = { todo }
              handleDelete = { handleDelete } 
              handleToggle = { handleToggle }
              index = {index} 
              />
            ))}
          </ul>
  )
}
