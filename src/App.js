import User from "./Component/User";
import { createStore } from 'redux';
import { Provider } from "react-redux";

const App = () => {

  const reducer = (state = "", action) => {
    if (action.type === 'Testing') {
      return "SUCCESS"
    }
  }

  const store = createStore(reducer);

  const design = (
    <>
      <Provider store={store}>
        <User />
      </Provider>
    </>
  );
  return design;
}

export default App;