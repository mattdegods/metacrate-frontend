import Image from "next/image";
import Typography from "../components/shared/Typography";
import Navbar from "../components/shared/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col justify-between h-screen bg-cover bg-left sm:mb-16" style={{
      backgroundImage: "url('/images/introBG.png')"
    }}>
      {/* outer container for "intro" section */}
      <div>
        <Navbar>
          <Typography variant="body" color="duppyDarkPurple" fontSize={['md', 'lg']}>
            Art coming soon...
          </Typography>
        </Navbar>
      </div>
      <div className="sm:mb-5 mb-[400px] lg:px-16 sm:flex items-center px-4 md:px-16">
        <div className="w-full text-center mb-3 h-[280px] sm:h-auto flex flex-col  ">
          <div className="sm:text-left pt-[5%] sm:pt-0">
            <Typography color="header" variant="subheader" fontFamily="base-b">
              June 2022
            </Typography>
          </div>
          <div className="sm:text-left">
            <Typography variant="title">Duppies</Typography>
          </div>
        </div>
        <div className="text-center sm:text-left h-[260px] sm:h-auto flex justify-end items-end px-10 sm:px-4 pb-4">
          <Typography variant="header" color='body' fontSize={['xl','2xl']} >
            A new NFT project from the team that brought you DeGods
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default Home;
