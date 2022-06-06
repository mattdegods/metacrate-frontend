import Typography from "./shared/Typography";

const Footer = () => {
  return (
    <div className=" h-[100px] md:h-[140px] px-10">
      <div className="h-full flex items-end justify-center md:justify-start pb-6">
        <div className="text-center">
          <Typography
            variant="subheader"
            fontSize="body-xl"
            styles="text-[#E1E8F6]"
          >
            Duppies 2022
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
