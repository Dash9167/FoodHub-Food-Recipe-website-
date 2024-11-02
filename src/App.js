import { useState } from "react";
import "./App.css";
import Login from "./component/login";
import Register from "./component/Register";
import { Landing } from "./component/Landing";
import Forgetpage from "./component/Forgetpage";

function App() {
  const [page, setPage] = useState(false);
  const [Landingpage, setLandingpage] = useState(false);
  const [forgetpage, setForgtegpage] = useState(false);

  const HandleRegister = () => {
    setPage(!page);
  };
  const HandleLandingpage = () => {
    setLandingpage(!Landingpage);
  };
  const handleForget = () => {
    setForgtegpage(!forgetpage);
  };
  return (
    <>
      {Landingpage ? (
        <Landing />
      ) : page ? (
        <Register handleRegister={HandleRegister} />
      ) : forgetpage ? (
        <Forgetpage handleForget={handleForget} />
      ) : (
        <Login
          handleRegister={HandleRegister}
          HandleLandingpage={HandleLandingpage}
          handleForget={handleForget}
        />
      )}
     
    </>
  );
}

export default App;
