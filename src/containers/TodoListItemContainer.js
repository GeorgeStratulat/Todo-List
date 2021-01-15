import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TodoListItem from "../components/TodoListItem";
import { updateTodo, deleteTodo } from "../store/actions";

// using updateTodo, deleteTodo method from redux
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      updateTodo: (id, changes) => updateTodo(id, changes),
      deleteTodo: (id) => deleteTodo(id),
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(TodoListItem);
