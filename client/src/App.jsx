import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Dashbord from './admin/Dashbord';
import BlogAdmin from './admin/BlogAdmin';
import MessagesAdmin from './admin/MessagesAdmin';
import ServicesAdmin from './admin/ServicesAdmin';
import PrivacyPolicy from './pages/policy/PrivacyPolicy';
import TermsandConditions from './pages/policy/TermsandConditions';
import RefundPolicy from './pages/policy/RefundPolicy';
import DeliveryPolicy from './pages/policy/DeliveryPolicy';
import ScrollToTop from './component/ScrollToTop';
import PaymentPage from './pages/payment/PaymentPage';
import CheackOut from './pages/payment/CheackOut';


function App() {
  return (
    <Router>
      <ScrollToTop/>
        <Routes>
          <Route path="/" exact element={<Navbar/>}/>
          <Route path="/privacyPolicy" exact element={<PrivacyPolicy/>}/>
          <Route path="/termsandConditions" exact element={<TermsandConditions/>}/>
          <Route path="/refundPolicy" exact element={<RefundPolicy/>}/>
          <Route path="/deliveryPolicy" exact element={<DeliveryPolicy/>}/>

{/* ADMIN */}
          <Route path="/admin" exact element={<Dashbord/>}>
            <Route path="" exact element={<MessagesAdmin/>}/>
            <Route path="blog" exact element={<BlogAdmin/>}/>
            <Route path="services" exact element={<ServicesAdmin/>}/>
          </Route>

{/* PAYMENT */}
          <Route path="/avanshika/payment/:id" exact element={<PaymentPage/>}/>
          <Route path="/checkout/:id" exact element={<CheackOut/>}/>

        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;