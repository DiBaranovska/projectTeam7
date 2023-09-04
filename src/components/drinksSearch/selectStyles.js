export const customSelectStyles = {
  placeholder: (baseStyles, state) => ({
    ...baseStyles,
    color: state.isFocused ? '#161f37' : '#FFFFFF',
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
    backgroundColor: state.isFocused ? '#FFFFFF' : '#161f37',
    border: state.isFocused ? 'none' : 'none;',
    borderRadius: '200px',
    height: '56px',
    '@media screen and (min-width: 768px)': {
      width: '199px',
    },
    cursor: 'pointer',
  }),
  menu: (baseStyles, state) => ({
    ...baseStyles,
    borderRadius: '20px',
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
    borderRadius: '20px',
    color: 'white',
    '@media screen and (min-width: 768px)': {
      padding: '23px 10px',
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
    color: state.isFocused ? 'rgba(243, 243, 243, 0.5)' : '##f3f3f3',
    cursor: 'pointer',
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
