import Nav from "./components/Nav/Nav";
import Home from "./views/home";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Project1 from "./views/Projects/Project1";
import Project2 from "./views/Projects/Project2";
import Project3 from "./views/Projects/Project3";
import Project4 from "./views/Projects/Project4";
import {Suspense} from "react"


function App() {
	return (
		<div className="App">
			 <Suspense fallback="Loading Translations">
			<Nav path="/" element={<Nav />} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/project1" element={<Project1 />} />
				<Route path="/project2" element={<Project2 />} />
				<Route path="/project3" element={<Project3 />} />
				<Route path="/project4" element={<Project4 />} />
			</Routes>
			<Footer path="/" element={<Footer />} />
			
			</Suspense>
		</div>
	);
}

export default App;
