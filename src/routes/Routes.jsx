import { Routes as ReactDomRoutes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Register/Register';
import { ForgotPassword } from '../pages/ForgotPassword/ForgotPassword';
import { Checkout } from '../pages/Checkout/Checkout';
import { Sneakers } from '../pages/Sneakers/Sneakers';
import { AdminLogin } from '../pages/Admin/AdminLogin/AdminLogin';
import { AdminDashboard } from '../pages/Admin/AdminDashboard/AdminDashboard';
import { AdminUsers } from '../pages/Admin/AdminUsers/AdminUsers';
import { AdminProducts } from '../pages/Admin/AdminProducts/AdminProducts';
import { AdminBrands } from '../pages/Admin/AdminBrands/AdminBrands';
import { EditBrand } from '../pages/Edit/EditBrand';
import { EditProduct } from '../pages/Edit/EditProduct';
import { AdminOrders } from '../pages/Admin/AdminOrders/AdminOrders';

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/sneakers" element={<Sneakers />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/register" element={<Register />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/users" element={<AdminUsers />} />
      <Route path="/admin/products" element={<AdminProducts />} />
      <Route path="/admin/brands" element={<AdminBrands />} />
      <Route path="/admin/orders" element={<AdminOrders />} />
      <Route path="/admin/brands/edit/:id" element={<EditBrand />} />
      <Route path="/admin/products/edit/:id" element={<EditProduct />} />
    </ReactDomRoutes>
  );
}

export default Routes;
