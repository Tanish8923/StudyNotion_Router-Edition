import { Navigate } from 'react-router-dom';

const PrivateRoute = ({isLoggedIn , children}) => {
 if(isLoggedIn){
    return children;
 }else{
    return <Navigate to={"/LogIn"}/>
 }
}

export default PrivateRoute
