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
				<div className="py-8 md:py-16 border-b border-[#3142EA33]/10">
					<Collection />
				</div>
				<div className="py-16 border-b border-[#3142EA33]/10 ">
        	<AlphaLeak />
				</div>
				<div className="py-16 lg:py-40 px-12 md:px-20 border-b border-[#3142EA33]/10">
					<Community />
				</div>
				<div className="py-12 lg:px-20 2xl:px-40 md:border-b border-[#3142EA33]/10">
					<FAQ />
				</div>
				<Footer />
			</div>
    </div>
);

export default Landing;