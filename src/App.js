import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Form from "./components/form/Form";
import Page from "./components/Pages/Page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Home/> */}
      <Router>
      <Routes>
          <Route path="/item/:id" component={Page} />
          <Route path="/" element={<Form />} />

        </Routes>
        </Router>
    </div>
  );
}

export default App;
