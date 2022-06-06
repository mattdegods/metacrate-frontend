module.exports = {
  darkMode: 'media',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/libs/components/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    {
      pattern: /(text)-(body|header|subheader)-(sm|md|lg|xl|2xl)/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl']
    },
    {
      pattern: /(font)-(.*)/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl']
    },
    {
      pattern: /(text)-(.*)/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl']
    }
  ],
  theme: {
    extend: {
      fontSize: {
        'body-sm': '0.875rem',
        'body-md': '1rem',
        'body-lg': '1.125rem',
        'body-xl': '1.25rem',
        'body-2xl': '1.5rem'
      },
      fontFamily: {
        duppies: ['duppies'],
      },
      colors:{
        // Background Colors
        metacrateRed: "#D83E40",
        metacrateWhite: "#F5F5F5",
        metacrateBlack: "#353535",
        // Primary Colors
        primary: '#40C38C',
        secondary: '#EF8CA4',
        alt: '#FFFFFF',
        // Text Colors
        title: '#3142EA',
        header: '#EF8CA4',
        subheader: '#3142EA',
        body: '#2F4181',
        // General Duppy Colors

      },
      fontSize: {
        //title
        'title-sm': '3rem',
        'title-md': '3.5rem',
        'title-lg': '3.5rem',
        'title-xl': '4rem',
        'title-2xl': '5rem',
        //header
        'header-sm': '1rem',
        'header-md': '1rem',
        'header-lg': '1rem',
        'header-xl': '1.25rem',
        'header-2xl': '1.5rem',
        //subheader
        'subheader-sm': '1rem',
        'subheader-md': '1.875rem',
        'subheader-lg': '2rem',
        'subheader-xl': '2.25rem',
        'subheader-2xl': '2.5rem',
        //body
        'body-sm': '0.875rem',
        'body-md': '1rem',
        'body-lg': '1.1875rem',
        'body-xl': '1.25rem',
        'body-2xl': '1.25rem',
      },
      screens: {
        '3xl': '1800px',
        '4xl': '2100px',
      },
    },
    fontFamily: {
      //component fonts
      'title': ['bingodilan'],
      'header': ['pressura-b'],
      'subheader': ['bingodilan'],
      'body': ['pressura-r','Helvetica', 'Arial', 'sans-serif'],
      //fonts
      'duppies': ['duppies'],
      'bingodilan': ['bingodilan'],
      'base-bi' : ['pressura-bi','Helvetica', 'Arial', 'sans-serif'],
      'base-b' : ['pressura-b','Helvetica', 'Arial', 'sans-serif'],
      'base-li' : ['pressura-li','Helvetica', 'Arial', 'sans-serif'],
      'base-l' : ['pressura-l','Helvetica', 'Arial', 'sans-serif'],
      'base-mbi' : ['pressura-mbi','Helvetica', 'Arial', 'sans-serif'],
      'base-mb' : ['pressura-mb','Helvetica', 'Arial', 'sans-serif'],
      'base-mli' : ['pressura-mli','Helvetica', 'Arial', 'sans-serif'],
      'base-li' : ['pressura-li','Helvetica', 'Arial', 'sans-serif'],
      'base-mri' : ['pressura-mi','Helvetica', 'Arial', 'sans-serif'],
      'base-mr' : ['pressura-m','Helvetica', 'Arial', 'sans-serif'],
      'base-i' : ['pressura-ri','Helvetica', 'Arial', 'sans-serif'],
      'base' : ['pressura-r','Helvetica', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
}
