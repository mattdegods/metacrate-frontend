import Home from "./Home";
import Footer from "../components/Footer";

const Landing = () => (
    <div>
			<div className="bg-light h-screen flex flex-col justify-between">
				<div><Home /></div>
				<div><Footer /></div>
			</div>
    </div>
);

export default Landing;