import { useRoutes } from "react-router-dom";
import Home from "../components/Home";
import Register from "../auth/register/Register";
import Login from "../auth/login/Login";
import ContactUs from "../components/contact/ContactUs";
import ForgotPassword from "../auth/forgetPassword/ForgotPassword";
import VerifyOtp from "../auth/verifyOtp/VerifyOtp";
import ResetPassword from "../auth/resetPassword/ResetPassword";
import ResetPasswordSuccess from "../auth/resetPasswordSuccess/ResetPasswordSuccess";
import MainDashboard from "../components/mainDashboard/MainDashboard";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageWhatsapp from "../pages/manageWhatsapp/ManageWhatsapp";
import QuickMessage from "../pages/quickMessage/QuickMessage";
import QuickMessage2 from "../pages/quickMessage2/QuickMessage2";
import AutoReply from "../pages/autoReply/AutoReply";
import IncomingMessage from "../pages/incomingMessage/IncomingMessage";
import OutGoingMessage from "../pages/outgoingMessage/OutGoingMessage";
import PaymentHistory from "../pages/paymentHistory/PaymentHistory";
import BuyPlan from "../pages/buyPlan/BuyPlan";
import WebHooks from "../pages/webHooks/WebHooks";
import WebHooksApi from "../pages/webHooks/WebHooksApi";
import PersonalDetails from "../pages/accountSettings/PersonalDetails";
import AccountSettings from "../pages/accountSettings/AccountSettings";
import Billing from "../pages/accountSettings/Billing";
import Setting from "../pages/accountSettings/Setting";
import Notifications from "../pages/accountSettings/Notifications";
import Support from "../pages/support/Support";
import ViewProfile from "../pages/viewProfile/ViewProfile";
import ChangePassword from "../pages/changePassword/ChangePassword";

const AppRoutes = () => {
  const routes = [
    { path: "/", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/contact", element: <ContactUs /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/verify-otp", element: <VerifyOtp /> },
    { path: "/reset-password", element: <ResetPassword /> },
    { path: "/reset-password-success", element: <ResetPasswordSuccess /> },
    {
      path: "/dashboard",
      element: <MainDashboard />,
      children: [
        { path: "", element: <Dashboard /> }, 
        { path: "manage-whatsapp", element: <ManageWhatsapp /> }, 
        { path: "manage-whatsapp-login", element: <QuickMessage /> }, 
        { path: "quick-message", element: <QuickMessage2 /> }, 
        { path: "auto-reply", element: <AutoReply /> }, 
        { path: "incoming-messages", element: <IncomingMessage /> }, 
        { path: "outgoing-messages", element: <OutGoingMessage /> }, 
        { path: "payment-history", element: <PaymentHistory /> }, 
        { path: "buy-plan", element: <BuyPlan /> }, 
        { path: "webhooks", element: <WebHooks /> }, 
        { path: "webhooks-api", element: <WebHooksApi /> }, 
        { path: "support", element: <Support /> }, 
        { path: "profile", element: <ViewProfile /> }, 
        { path: "change-password", element: <ChangePassword /> }, 
        {
          path: "account", // ✅ Removed the incorrect leading "/"
          element: <AccountSettings />,
          children: [
            { path: "Personal", element: <PersonalDetails /> }, 
            { path: "Billing", element: <Billing /> }, 
            { path: "Setting", element: <Setting /> }, 
            { path: "Notifications", element: <Notifications /> }, 
          ],
        },
      ],
    },
  ];
  
  return useRoutes(routes);
};

export default AppRoutes;
