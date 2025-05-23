import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopExit from "./components/PopExit/PopExit";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PopBrowse from "./components/PopBrowse/PopBrowse";

function App() {
  return (
    <>
      <div>
        <div className="wrapper">
          <PopExit />
          <PopNewCard />
          <PopBrowse />
          <Header />
          <Main />
        </div>
      </div>
      ;
    </>
  );
}

export default App;
