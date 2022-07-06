import YouTubeEmbed from "./YouTubeEmbed";

const Home = () => {
  return (
    <div className="h-full -mt-10 xl:-mt-28 3xl:-mt-32 w-full text-center flex flex-col justify-between">
      <div className="text-[32px] md:text-[48px] uppercase">
        Welcome to <span className="text-metacrateRed">MetaCrate.</span>
      </div>
      <div className="hidden md:flex justify-center py-4">
        <YouTubeEmbed embedId="A91ymdbTZlA" width={600} height={320} />
      </div>
      <div className="md:hidden flex justify-center py-4">
        <YouTubeEmbed embedId="A91ymdbTZlA" width={300} height={200} />
      </div>
      <div className="text-[16px] uppercase px-8 pb-10">
        COLLECT, CONSUME, AND TRADE EXCLUSIVE NFT RECORDS FROM YOUR FAVORITE
        ARTISTS
      </div>
    </div>
  );
};
export default Home;
