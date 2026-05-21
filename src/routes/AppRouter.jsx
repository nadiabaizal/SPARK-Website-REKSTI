import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

// KOMENTARI DULU IMPORT YANG BELUM ADA FILE-NYA
// import ForgotPassword from '../pages/auth/ForgotPassword';
// import VerifyOTP from '../pages/auth/VerifyOTP';
// import Home from '../pages/dashboard/Home';
// import Map from '../pages/map/Map';
// import Prediction from '../pages/prediction/Prediction';
// import History from '../pages/history/History';
// import Profile from '../pages/profile/Profile';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
          {/* <Route path="/verify-otp" element={<VerifyOTP />} /> */}
        </Route>

        {/* KOMENTARI DULU ROUTE MAIN APPLICATION */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/map" element={<Map />} /> */}
        {/* <Route path="/prediction" element={<Prediction />} /> */}
        {/* <Route path="/history" element={<History />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </BrowserRouter>
  );
}