import { Routes as ReactDomRoutes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Register/Register';
import { ForgotPassword } from '../pages/ForgotPassword/ForgotPassword';
import { Checkout } from '../pages/Checkout/Checkout';
import { Sneakers } from '../pages/Sneakers/Sneakers';

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/sneakers" element={<Sneakers />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/register" element={<Register />} />
      <Route path="/checkout" element={<Checkout />} />
    </ReactDomRoutes>
  );
}

export default Routes;
