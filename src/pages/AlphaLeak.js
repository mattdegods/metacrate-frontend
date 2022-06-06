import Typography from "../components/shared/Typography";

const AlphaLeak = () => (
  <div className="py-10 px-2 text-center mt-0 flex flex-col justify-center ">
   <Typography variant="header" styles='text-[20px]' > 
      ALPHA LEAK #1
    </Typography>
    <Typography variant="subheader" styles={'pt-2'} fontSize={['lg','xl']}>
      Stake your Duppies,
    </Typography>
    <Typography variant="subheader" fontSize={['xl']}>
      but with a twist.
    </Typography>
    <div className="px-10 md:pt-8 flex flex-col sm:flex-row items-start 4xl:justify-center sm:mt-12 md:mt-18 xl:px-[15%]">
      <img 
        src="/images/caveload.svg" 
        alt="Discord" 
        className="sm:w-[60%] md:w-[40%] 4xl:w-[30%] -mt-[10%] md:mt-0]"
      />
      <div className="px-4 flex flex-col -mt-6 sm:mt-[12%] md:mt-[4%] md:max-w-[540px] sm:ml-[10%]" >
        <ul className="text-left pl-2">
          <li> 
            <Typography variant="body" fontSize={['md','lg', 'xl']}>
              Staking <span className="font-base-bi">without</span> any tokens.
            </Typography>
          </li>
          <li className="mt-3">
            <Typography variant="body" fontSize={['md','lg', 'xl']} styles=''>
              We will be launching with a unique <span className="font-base-bi">leveling up system</span> to reward our most loyal holders.
            </Typography>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default AlphaLeak;