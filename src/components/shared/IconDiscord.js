
const IconDiscord = ({
  width = 'w-10'
}) => (
  <a 
    href="https://discord.gg/duppies" 
    target="_blank" 
    rel="noreferrer"
  >
    <img 
      src="/images/discord_dark_purple.svg" 
      alt="Discord" 
      className={`cursor-pointer w-6 md:w-8`}
    />
  </a>
)

export default IconDiscord;