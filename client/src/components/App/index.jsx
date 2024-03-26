import './App.css';

import Login from '../Login';
import { useSelector } from 'react-redux';

const App = () => {
  //check state & session for token
  const token = useSelector((state) => state.login.token) || getToken();

  // if no token, show login
  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
    </div>
  );
};

const setToken = (token) => {
  sessionStorage.setItem('token', JSON.stringify(token));
};

const getToken = () => {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  console.log({ userToken });
  return userToken?.token;
};

export default App;
