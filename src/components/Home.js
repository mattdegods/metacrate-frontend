import YouTubeEmbed from "./YouTubeEmbed";

const Home = () => {
  return (
    <div className="h-full mt-10 w-full text-center flex flex-col justify-between">
      <div className="py-4 text-[40px] sm:text-[55px] px-3 uppercase leading-tight">
        Welcome to<span className="text-metacrateRed"> MetaCrate.</span>
      </div>
      {/* <div className="hidden xl:flex justify-center my-4 mx-auto border-8 border-black w-fit z-40" >
        <YouTubeEmbed embedId="A91ymdbTZlA" width={600} height={320} />
      </div>
      <div className="hidden md:flex xl:hidden justify-center my-4 mx-auto border-8 border-black w-fit z-40">
        <YouTubeEmbed embedId="A91ymdbTZlA" width={400} height={220} />
      </div>
      <div className="flex md:hidden justify-center my-2 mx-auto border-8 border-black w-fit z-40" >
        <YouTubeEmbed embedId="A91ymdbTZlA" width={300} height={180} />
      </div> */}
      <div className="relative my-8 z-40 h-[300px] w-fit sm:w-[500px] mx-auto">
        <iframe
          src="https://player.vimeo.com/video/666803743?h=abe773636c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          className="w-full h-full"
          title="Meta Crate Trailer"
        ></iframe>
      </div>
      <div className="text-[16px] sm:text-[22px] uppercase px-20 pb-10 sm:mt-0 z-40">
        COLLECT, CONSUME, AND TRADE EXCLUSIVE NFT RECORDS FROM YOUR FAVORITE
        ARTISTS
      </div>
    </div>
  );
};
export default Home;
