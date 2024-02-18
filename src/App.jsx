import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";

function App() {
  return (
    <div className="w-screen h-screen">
        <Header />

        <Outlet />
    </div>
  );
}

export default App;
