import Home from "./Home";
// import CollectionInfo from "../components/Collection/CollectionInfo";
// import AlphaLeak from "../components/Alpha/AlphaLeak";
import Community from "../components/Community/Community";
import AlphaLeak from "./AlphaLeak";
import Collection from "./Collection";
import FAQ from "./FAQ";
import Footer from "../components/Footer";

const Landing = () => (
    <div className="">
			{/* nav & intro */}
			<div className="bg-light">
				<Home />

				<Footer />
			</div>
    </div>
);

export default Landing;