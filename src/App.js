import Nav from "./components/Nav/Nav";
import Home from "./views/home";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Project1 from "./components/Projects/Project1";

function App() {
	return (
		<div className="App">
			<Nav path="/" element={<Nav />} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/project1" element={<Project1 />} />
			</Routes>
			<Footer path="/" element={<Footer />} />
		</div>
	);
}

export default App;
