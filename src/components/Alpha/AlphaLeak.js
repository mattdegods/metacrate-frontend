import Typography from "../shared/Typography"
import CollectionCard from "../Collection/CollectionCard"

const AlphaLeak = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-10/12 border-t border-black/10 py-10" />
      <Typography variant="subheader" color='secondary'>Alpha Leak #1</Typography>
      <Typography variant="subheader" color='title' fontFamily='bingodilan'>Stake your Duppies,</Typography>
      <Typography variant="subheader" color='title' fontFamily='bingodilan'> but with a twist.</Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img 
          src="/images/duppyCave.png" 
          alt="Duppie Cave" 
        />
        <div className="inline-block align-middle">
          <div className="flex items-center">
            <img
              src="/images/bulletPoint.svg"
              alt="Bullet Point"
              className="mr-6"
            />
            Testing a bullet point
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlphaLeak