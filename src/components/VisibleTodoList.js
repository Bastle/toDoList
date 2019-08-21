/**
 * Created by cyb on 2019/8/16.
 */
import { connect } from 'react-redux';
import { toggleTodo } from '../action/action';
import TodoList from './TodoList';



function getTodos(todos, filter){
  switch (filter){
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
  }
}

const mapStateToProps = state =>{
  return {
   todos: getTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
 return {
   onTodoClick: id => {
      dispatch(toggleTodo(id))
   }
 }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);


export default VisibleTodoList;