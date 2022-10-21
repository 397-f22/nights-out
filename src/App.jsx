import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import MainPage from "./components/mainPage";
import Header from "./components/Header";
// import SidePanel from "./components/sidePanel";

const App = () => {	
	return (
		<div className="container">
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} /> 											
					<Route path="/user/:user" element={<MainPage />} />					
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
