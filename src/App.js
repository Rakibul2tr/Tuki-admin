// import React from "react";
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import Home from "./pages/Home";
// import Package from "./pages/Package";
// import MobileHeader from "./components/MobileHeader"; // Adjust path as needed
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./App.css";
// import VipPackage from "./pages/VipPackage";
// import AddPackage from "./pages/AddPackage";
// import Daimond from "./pages/Daimond";
// import AddDaimond from "./pages/AddDaimond";
// import Users from "./pages/Users";
// import UpdateUser from "./pages/UpdateUser";
// import Agency from "./pages/Agency";
// import Gift from "./pages/Gift";
// import AddGift from "./pages/AddGift";
// import Animation from "./pages/Animation";
// import SendHistory from "./pages/SendHistory";
// import Login from "./pages/Login";
// import ForgetPassword from "./pages/ForgetPassword";
// import ResetPassword from "./pages/ResetPassword";
// import Notification from "./pages/Notification";

// const Layout = ({ children }) => {
//     const location = useLocation(); // Get the current route

//     // Define routes where MobileHeader should not appear
//     const noHeaderRoutes = [, "/login", "/forgot-password", "/reset-password"];

//     // Function to check if the current path matches any no-header routes
//     const shouldShowHeader = !noHeaderRoutes.some(route =>
//         location.pathname.startsWith(route)
//     );

//     return (
//         <>
//             {/* Conditionally render MobileHeader */}
//             {shouldShowHeader && <MobileHeader />}
//             {children}
//         </>
//     );
// };

// function App() {
//     return (
//         <BrowserRouter>
//             <Layout>
//                 <Routes>
//                     <Route path="/xnet/home" element={<Home />} />
//                     <Route path="/xnet/package" element={<Package />} />
//                     <Route path="/xnet/vip-package" element={<VipPackage />} />
//                     <Route path="/xnet/add-package" element={<AddPackage />} />
//                     <Route path="/xnet/daimond" element={<Daimond />} />
//                     <Route path="/xnet/add-daimond" element={<AddDaimond />} />
//                     <Route path="/xnet/users" element={<Users />} />
//                     <Route path="/xnet/updateUSer/:id" element={<UpdateUser />} />
//                     <Route path="/xnet/agency" element={<Agency />} />
//                     <Route path="/xnet/gift" element={<Gift />} />
//                     <Route path="/xnet/add-gift" element={<AddGift />} />
//                     <Route path="/xnet/animation" element={<Animation />} />
//                     <Route path="/xnet/send-history" element={<SendHistory />} />
//                     <Route path="/xnet/notification" element={<Notification />} />
//                     {/* <Route path="/login" element={<Login />} /> */}
//                     {/* <Route path="/forgot-password" element={<ForgetPassword />} /> */}
//                     {/* <Route path="/reset-password/:email" element={<ResetPassword />} /> */}
//                 </Routes>
//             </Layout>
//         </BrowserRouter>
//     );
// }

// export default App;

import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Package from "./pages/Package";
import MobileHeader from "./components/MobileHeader"; // Adjust path as needed
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import VipPackage from "./pages/VipPackage";
import AddPackage from "./pages/AddPackage";
import Daimond from "./pages/Daimond";
import AddDaimond from "./pages/AddDaimond";
import Users from "./pages/Users";
import UpdateUser from "./pages/UpdateUser";
import Agency from "./pages/Agency";
import Gift from "./pages/Gift";
import AddGift from "./pages/AddGift";
import Animation from "./pages/Animation";
import SendHistory from "./pages/SendHistory";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import Notification from "./pages/Notification";
import Reseller from "./pages/Reseller";
import Exchange from "./pages/Exchange";
import PackageRequestPage from "./pages/PackageRequestPage";
import Withdraw from "./pages/Withdraw";
import { SocketProvider } from "./context/SocketContext";
import Frame from "./pages/Frame";
import UserChat from "./pages/UserChat";
import UserInbox from "./pages/UserInbox";
import Moderator from "./pages/Moderator";
import Callinghour from "./pages/Callinghour";

const Layout = ({ children }) => {
  const location = useLocation();

  // Routes where you don't want the MobileHeader
  const noHeaderRoutes = ["/login", "/forgot-password", "/reset-password"];

  const shouldShowHeader = !noHeaderRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {shouldShowHeader && <MobileHeader />}
      {children}
    </>
  );
};

// Private Route Wrapper
const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Default: not logged in

  return (
    <SocketProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route
              path="/login"
              element={<Login setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route path="/forgot-password" element={<ForgetPassword />} />
            <Route path="/reset-password/:email" element={<ResetPassword />} />

            {/* Protected Routes */}
            <Route
              path="/xnet/home"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/xnet/package"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Package />
                </PrivateRoute>
              }
            />
            <Route
              path="/xnet/vip-package"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <VipPackage />
                </PrivateRoute>
              }
            />
            <Route
              path="/xnet/add-package"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <AddPackage />
                </PrivateRoute>
              }
            />
            <Route
              path="/xnet/daimond"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Daimond />
                </PrivateRoute>
              }
            />
            <Route
              path="/xnet/add-daimond"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <AddDaimond />
                </PrivateRoute>
              }
            />
            <Route
              path="/xnet/users"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Users />
                </PrivateRoute>
              }
            />
            <Route
              path="/xnet/updateUser/:id"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <UpdateUser />
                </PrivateRoute>
              }
            />
            <Route
              path="/xnet/agency"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Agency />
                </PrivateRoute>
              }
            />
            <Route
              path="/xnet/reseller"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Reseller />
                </PrivateRoute>
              }
            />
            <Route
              path="/xnet/moderator"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Moderator />
                </PrivateRoute>
              }
            />
            <Route
              path="/xnet/exchange-rate"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Exchange />
                </PrivateRoute>
              }
            />
            <Route
              path="/xnet/gift"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Gift />
                </PrivateRoute>
              }
            />
            <Route
              path="/xnet/add-gift"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <AddGift />
                </PrivateRoute>
              }
            />
            <Route
              path="/xnet/animation"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Animation />
                </PrivateRoute>
              }
            />
            <Route
              path="/xnet/frame"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Frame />
                </PrivateRoute>
              }
            />
            <Route
              path="/xnet/package-purchase"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <PackageRequestPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/xnet/calling-hour"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Callinghour />
                </PrivateRoute>
              }
            />

            <Route
              path="/xnet/withdraw-requests"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Withdraw />
                </PrivateRoute>
              }
            />
            <Route
              path="/xnet/user-chat"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <UserChat />
                </PrivateRoute>
              }
            />
            <Route
              path="/xnet/user-inbox"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <UserInbox />
                </PrivateRoute>
              }
            />
            <Route
              path="/xnet/send-history"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <SendHistory />
                </PrivateRoute>
              }
            />
            <Route
              path="/xnet/notification"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Notification />
                </PrivateRoute>
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </SocketProvider>
  );
}

export default App;

