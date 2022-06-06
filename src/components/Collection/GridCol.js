import Typography
 from "../shared/Typography";
const GridCol = ({
  header,
  subheader,
  body,
  btnTitle,
  src,
  href
}) => {
  return (
    <div className={`flex flex-col items-center justify-between text-center py-4 px-4 md:px-8 mb-6 md:mb-2 sm:w-1/2 md:w-4/5 lg:w-5/6 `}>
      <div className={` flex flex-col-reverse items-center md:flex-col h-auto md:h-[240px] lg:h-[300px] 2xl:h-[380px] justify-between pt-6 md:pt-0`}>
        {/* image */}
        <img src={src} alt="Collection" className="pt-4 md:pt-0 w-[75%] 3xl:h-[340px] 4xl:h-[400px]" />
        {/* content */}
        <div className="flex flex-col content-start justify-center h-full ">
          <Typography variant="header">
            {header}
          </Typography>
          <Typography variant="subheader" fontSize={['md','xl']}>
            {subheader}
          </Typography>
        </div>
      </div>
      <div className="pt-8 md:pt-0 px-8 sm:px-auto h-auto md:h-[240px] lg:h-[200px] xl:h-[180px] flex flex-col justify-between">
          <Typography variant="body" fontSize={['md','lg']}>
            {body}
          </Typography>
          {/* button */}
          <div className="relative mt-6 flex flex-col items-center">
            {!href
              ?
              <div className="w-[200px] md:w-[120px] lg:w-[200px]">
                <img 
                   src='/images/revealSoon.png' 
                   alt="Reveal Soon" 
                 />
              </div>
              :
              <a href={href} target="_blank" rel="noreferrer">
                <button className="bg-duppyGreen text-white font-bold py-2 w-[200px] md:w-[120px] lg:w-[200px] rounded-md hover:opacity-80 ">
                  {btnTitle}
                </button> 
              </a>
            }
          </div>

          {/* <a className="mt-6 text-duppyGreen cursor-pointer underline font-base-i"> {btnTitle} </a> */}
      </div>
    </div>
  )
}

export default GridCol;