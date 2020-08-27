import db from './DBConnector';

// let todos = [
//   {id: 1, title: '할일을 입력해 보세요.'},
// ];

// let delay = 300

export const fetchTodo = () => {
  console.log('api fetchTodos', db.table('todos').toArray());
  return db.table('todos').toArray();
  // return new Promise(resolve => {
  //   setTimeout(_=> resolve(todos), delay)
  // })
}

export const createTodo = ({title}) => {
  console.log('api createTodo', title)
  return db.table('todos').add({ title });
  // return new Promise(resolve => {
  //   todos.push({
  //     id: todos[todos.length - 1].id + 1,
  //     title
  //   })
  //   setTimeout(_=>resolve(todos), delay) 
  // })
}

export const deleteTodo = ({ id }) => {
  return db.table('todos').delete(id);
  // return new Promise(resolve => {
  //   todos = todos.filter(u => u.id !== id)
  //   setTimeout(_=> resolve(todos), delay)
  // })
  
}

export const updateTodo = ({id, title}) => {
  console.log('api updateTodo', id, title);
  return db.table('todos').update(id, { title });
  // return new Promise(resolve => {
  //   const todo = todos.filter(u => u.id === id)[0]
  //   if (!todo) return Promise.reject(Error('no todo'))
  //   todo.title = title 
  //   setTimeout(_=> resolve(todos), delay)
  // })
}