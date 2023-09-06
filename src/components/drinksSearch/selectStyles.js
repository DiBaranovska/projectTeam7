export const customSelectStyles = {
  placeholder: (baseStyles, state) => ({
    ...baseStyles,
    color: '#FFFFFF',
    // color: state.isFocused ? '#161f37' : '#FFFFFF',
  }),
  container: (baseStyles, state) => ({
    ...baseStyles,
    border: 'none',
    width: '100%',
    fontFamily: 'Manrope',
    fontSize: '17px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '1.56',

    '@media screen and (min-width: 768px)': {
      width: '199px',
    },
  }),
  control: (baseStyles, state) => ({
    ...baseStyles,
    paddingLeft: '24px',
    backgroundColor: '#161f37',
    // backgroundColor: state.isFocused ? '#FFFFFF' : '#161f37',
    border: state.isFocused ? 'none' : 'none;',
    borderRadius: '200px',
    height: '56px',
    '@media screen and (min-width: 768px)': {
      width: '199px',
    },
    transition: 'background-color 0.4s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#2d3b5e',
    },
  }),
  menu: (baseStyles, state) => ({
    ...baseStyles,
    borderRadius: '20px',
    padding: '10px',
    backgroundColor: '#161f37',
    animation: 'fade--in 0.4s ease-in-out',
    '@keyframes fade--in': {
      '0%': {
        opacity: '0',
      },
      '100%': {
        opacity: '1',
      },
    },
  }),
  menuList: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: '#161f37',
    border: state.isFocused ? 'none' : 'none;',
    color: 'white',
    '&::-webkit-scrollbar': {
      width: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#434d67',
      borderRadius: '5px',
    },
  }),
  selectContainer: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: '#161f37',
    border: state.isFocused ? 'none' : 'none;',
    borderRadius: '20px',
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: '#161f37',
    color: state.isFocused ? '#f3f3f3' : 'rgba(243, 243, 243, 0.5)',
    cursor: 'pointer',
    padding: '0 10px 5px',
  }),
  valueContainer: (baseStyles, state) => ({
    ...baseStyles,
    padding: '0',
  }),
  Input: (baseStyles, state) => ({
    ...baseStyles,
    color: 'white',
    fontSize: '40px',
  }),
  singleValue: (baseStyles, state) => ({
    ...baseStyles,
    color: '#FFFFFF',
  }),
  indicatorSeparator: (baseStyles, state) => ({
    ...baseStyles,
    display: 'none',
  }),
  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    color: state.isFocused ? '#161f37' : '#F3F3F3',
    paddingRight: '24px',
  }),
};
