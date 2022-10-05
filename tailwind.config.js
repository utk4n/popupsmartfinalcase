/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundColor: {
        primary: 'rgba(125, 74, 234, 1)',
        secondary: 'rgba(245, 245, 245, 1)',
        footer: 'rgba(102, 102, 102, 1)',
        templateHoverBtn: 'rgba(255, 255, 255, 1)',
        templateHoverOverlay: 'rgba(125, 74, 234, 0.6)',
        hoverCardBg: 'rgba(125, 74, 234, 0.6)',
        textBg: 'rgb(234, 234, 234)',
        colorOption1: '#F37C34',
        colorOption2: '#777777',
        colorOption3: '#DDDDDD',
      },
      boxShadow: {
        btnShadow: '0px 5px 10px 2px rgba(125, 74, 234, 0.27)',
      },
      borderColor: {
        btnBorder: 'rgba(210, 218, 227, 1)',
        gridBorder: 'rgba(221, 221, 221, 1)',
        colorOptions: 'rgba(0, 0, 0, 0.3)',
        dragDrop: '#DDDDDD',
        contentFocus: 'rgba(125, 74, 234, 1)',
        inputCheck: 'rgba(187, 187, 187, 1)',
      },
      colors: {
        primary: 'rgba(125, 74, 234, 1)',
        sizeBtn: 'rgba(119, 119, 119, 1)',
      },
      backgroundImage : {
        modal2Bg : "url('/assets/images/modals/Modal2/bgImage.png')"
      }
    },
  },
  plugins: [],
};
