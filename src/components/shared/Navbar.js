
import Twitter from "./IconTwitter";
import Discord from "./IconDiscord";
import Logo from "./Logo";

const Navbar = ({children}) => (
  // bg-light sm:bg-transparent 
  <div className="flex justify-between px-4 md:px-16 py-8 md:py-10 ">
    {/* logo */}
    <Logo />
      {/* content */}
      <div className="flex items-center w-auto sm:w-full justify-center sm:justify-end sm:pr-20">
        {children}
      </div>
    <div className="flex space-x-10 sm:space-x-20">
      {/* icons */}
      <div className="inline-flex space-x-8 items-center">
        <Twitter />
        <Discord />
      </div>
    </div>
  </div>
)

export default Navbar;