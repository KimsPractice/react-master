import Router from "./Router";
import Globalstyle from "./Globalstyle";
import { ReactQueryDevtools } from "react-query/devtools";

const App = () => {
  return (
    <>
      <Globalstyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
};

export default App;
