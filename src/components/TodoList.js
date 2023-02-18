// import Todo from "./Todo"

export default function TodoList({todos}) {
  return todos.map((todo, index) => <div key={index} todo={todo}/>)
}