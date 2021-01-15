import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TodoList from "../components/TodoList";
import { getTodoList } from "../store/actions";

// getting redux state of loading and todos
const mapStateToProps = (state) => ({
  loading: state.todos.loading,
  todos: state.todos.data,
});

// using getToDoList method from redux
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getTodoList: (id) => getTodoList(id),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
