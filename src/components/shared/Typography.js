const getBreakpoint = (breakpointNumber) => {
  switch (breakpointNumber) {
    case 0:
      return ''
    case 1:
      return 'md:'
    case 2: 
      return 'lg:'
    case 3:
      return 'xl:'
    case 4:
      return '2xl:'
  } 
}

const getFontSizes = (sizes, variant) => {
  if (typeof sizes === 'string') return `text-${sizes}`
  
  if (sizes.length === 5) {
    return sizes.map((bSize, index) => `${getBreakpoint(index)}text-${variant}-${bSize}`).join(' ')
  }
  switch (sizes.length) {
    case 1:
      return `text-${variant}-${sizes[0]}`
    case 2:
      return `text-${variant}-${sizes[0]} lg:text-${variant}-${sizes[1]}`
    case 3:
      return `text-${variant}-${sizes[0]} md:text-${variant}-${sizes[1]} lg:text-${variant}-${sizes[2]}`
    case 4:
      return `text-${variant}-${sizes[0]} md:text-${variant}-${sizes[1]} lg:text-${variant}-${sizes[2]} xl:text-${variant}-${sizes[3]}`
    default: 
      return `text-${variant}-sm md:text-${variant}-md lg:text-${variant}-lg xl:text-${variant}-xl 2xl:text-${variant}-2xl`
  }
}

const getFontFamily = (variant, fontFamily) => {
  if (fontFamily) return `font-${fontFamily}`
  else return `font-${variant}`
}

const getTextColor = (variant, color) => {
  if (color) return `text-${color}`
  switch (variant) {
    case "title":
      return "text-title"
    case "header":
      return "text-header"
    case "subheader":
      return "text-subheader"
    case "body":
      return "text-body"
  }
}

const Typography = ({
  variant = 'body',
  fontSize = ['sm', 'md', 'lg', 'xl', '2xl'],
  fontFamily,
  styles,
  color,
  children
}) => {
  return (
    <p className={`${getFontSizes(fontSize, variant)} ${getTextColor(variant, color)} ${getFontFamily(variant, fontFamily)} ${styles}`}>{children}</p>
  )
}

export default Typography;