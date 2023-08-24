import { useSelector } from 'react-redux';
import { userSelector } from '../redux/selectors';
import { Navigate } from 'react-router-dom';
const PrivateRoure = ({ children }) => {
  const { isLoggedIn } = useSelector(userSelector);
  return isLoggedIn ? children : <Navigate to="/welcome" />;
};

export default PrivateRoure;
