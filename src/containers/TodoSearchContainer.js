import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TodoSearch from "../components/ToDoSearch";
import { setSearch } from "../store/actions";

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setSearch: (word) => setSearch(word),
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(TodoSearch);
