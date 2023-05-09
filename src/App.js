
import './App.css';
import { Routes, Route} from "react-router-dom";
import NavBar from './components/Shared/NavBar';
import Home from './Pages/Home';
import AddProduct from './Pages/AddProduct';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProductDetails from './Pages/ProductDetails';
import PlaceOrder from './Pages/PlaceOrder';
import ThankYou from './Pages/ThankYou';
import Orders from './Pages/Admin/Orders';
import AcceptOrderOrCancleOrder from './Pages/Admin/AcceptOrderOrCancleOrder';
import EditOrder from './Pages/Admin/EditOrder';
import PendingOrders from './Pages/Admin/PendingOrders';
import DeliveredOrders from './Pages/Admin/DeliveredOrders';
import Dashboard from './Pages/Admin/Dashboard';
import Categories from './Pages/Admin/Categories';
import EditCategory from './Pages/Admin/EditCategory';

import Category from './Pages/Category';
import Customers from './Pages/Admin/Customers';

import HomepageSectionOne from './Pages/Admin/HomepageSectionOne';
import HomepageSectionOneEdit from './Pages/Admin/HomeSectionOneEdit';
import HomepageSectionTwo from './Pages/Admin/HomepageSectionTwo';
import HomeSectionTwoEdit from './Pages/Admin/HomeSectionTwoEdit';
import HomepageSectionThree from './Pages/Admin/HomepageSectionThree';
import HomeSectionThreeEdit from './Pages/Admin/HomeSectionThreeEdit';
import Footer from './components/Shared/Footer/Footer';
import HomePageSetting from './Pages/Admin/HomePageSetting';
import BannerOne from './Pages/Admin/BannerOne';
import BannerOneEdit from './Pages/Admin/BannerOneEdit';
import BannerTwo from './Pages/Admin/BannerTwo';
import BannerTwoEdit from './Pages/Admin/BannerTwoEdit';
import PaymentSetting from './Pages/Admin/PaymentSetting';
import EnableCashOndelivery from './Pages/Admin/EnableCashOndelivery';
import DisableCashOnDelivery from './Pages/Admin/DisableCashOnDelivery';
import PaymentSettingEdit from './Pages/Admin/PaymentSettingEdit';
import TopBannerSetting from './Pages/Admin/TopBannerSetting';
import ContactUs from './Pages/Admin/ContactUs';
import EmailThankYou from './Pages/EmailThankYou';
import EditTopBanner from './Pages/Admin/EditTopBanner';
import FooterSetting from './Pages/Admin/FooterSetting';
import PaymentApprove from './Pages/Admin/PaymentApprove';
import OrderDeliveryUpdate from './Pages/Admin/OrderDeliveryUpdate';
import EditFooterAbout from './Pages/Admin/EditFooterAbout';
import EditFooterSocial from './Pages/Admin/EditFooterSocial';
import EditFooterAddress from './Pages/Admin/EditFooterAddress';
import EditCopyright from './Pages/Admin/EditCopyright';
import RequireAuth from './components/Shared/RequireAuth';
import MyAccount from './Pages/MyAccount';
import MyOrders from './Pages/Admin/MyOrders';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/contact-us' element={<ContactUs></ContactUs>}></Route>
        <Route path='/message-sent' element={<EmailThankYou></EmailThankYou>}></Route>
        <Route path='/product-details/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/category/:id' element={<Category></Category>}></Route>
        <Route path='/place-order/:id' element={<RequireAuth><PlaceOrder></PlaceOrder></RequireAuth>}></Route>
        <Route path='/thank-you/:id' element={<ThankYou></ThankYou>}></Route>


        <Route path='/add-product' element={<AddProduct></AddProduct>}></Route>
        <Route path='/admin/categories' element={<Categories></Categories>}></Route>
        <Route path='/admin/edit-category/:id' element={<EditCategory></EditCategory>}></Route>
        <Route path='/admin/dashboard' element={<Dashboard></Dashboard>}></Route>
      
        <Route path='/admin/order/accept-cancel/:id' element={<AcceptOrderOrCancleOrder></AcceptOrderOrCancleOrder>}></Route>
        <Route path='/admin/order/edit/:id' element={<EditOrder></EditOrder>}></Route>
        <Route path='/admin/order/pending' element={<PendingOrders></PendingOrders>}></Route>
        <Route path='/admin/aprove-payment/:id' element={<PaymentApprove></PaymentApprove>}></Route>
        <Route path='/admin/delivery/:id' element={<OrderDeliveryUpdate></OrderDeliveryUpdate>}></Route>
        <Route path='/admin/order/delivered' element={<DeliveredOrders></DeliveredOrders>}></Route>
        <Route path='/admin/dashboard/admin/orders' element={<Orders></Orders>}></Route>
        <Route path='/admin/dashboard/admin/delivered' element={<DeliveredOrders></DeliveredOrders>}></Route>
        <Route path='/admin/dashboard/admin/customers' element={<Customers></Customers>}></Route>
        <Route path='/my-account' element={<RequireAuth><MyAccount></MyAccount></RequireAuth>}></Route>
        <Route path='/my-orders' element={<RequireAuth><MyOrders></MyOrders></RequireAuth>}></Route>


        <Route path='/admin/homepage-setting' element={<HomePageSetting></HomePageSetting>}></Route>
        <Route path='/admin/top-banner' element={<TopBannerSetting></TopBannerSetting>}></Route>
        <Route path='/admin/topbanner/:id' element={<EditTopBanner></EditTopBanner>}></Route>
        
        <Route path='/admin/banner-one' element={<BannerOne></BannerOne>}></Route>
        <Route path='/admin/banner-one/:id' element={<BannerOneEdit></BannerOneEdit>}></Route>

        <Route path='/admin/banner-two' element={<BannerTwo></BannerTwo>}></Route>
        <Route path='/admin/banner-two/:id' element={<BannerTwoEdit></BannerTwoEdit>}></Route>

        <Route path='/admin/section-one' element={<HomepageSectionOne></HomepageSectionOne>}></Route>
        <Route path='/admin/homepagesection-one/:id' element={<HomepageSectionOneEdit></HomepageSectionOneEdit>}></Route>
        
        <Route path='/admin/section-two' element={<HomepageSectionTwo></HomepageSectionTwo>}></Route>
        <Route path='/admin/homepagesection-two/:id' element={<HomeSectionTwoEdit></HomeSectionTwoEdit>}></Route>
        
        <Route path='/admin/section-three' element={<HomepageSectionThree></HomepageSectionThree>}></Route>
        <Route path='/admin/homepagesection-three/:id' element={<HomeSectionThreeEdit></HomeSectionThreeEdit>}></Route>

      
        <Route path='/admin/payment-setting' element={<PaymentSetting></PaymentSetting>}></Route>
        <Route path='/admin/payment-edit/:id' element={<PaymentSettingEdit></PaymentSettingEdit>}></Route>
        <Route path='/admin/enable-cash-on-delivery/:id' element={<EnableCashOndelivery></EnableCashOndelivery>}></Route>
        <Route path='/admin/disable-cash-on-delivery/:id' element={<DisableCashOnDelivery></DisableCashOnDelivery>}></Route>



        
        <Route path='/admin/footer-edit/' element={<FooterSetting></FooterSetting>}></Route>

        <Route path='/admin/footer-about-edit/:id' element={<EditFooterAbout></EditFooterAbout>}></Route>
        <Route path='/admin/footer-social-edit/:id' element={<EditFooterSocial></EditFooterSocial>}></Route>
        <Route path='/admin/footer-address-edit/:id' element={<EditFooterAddress></EditFooterAddress>}></Route>
        <Route path='/admin/footer-copyright-edit/:id' element={<EditCopyright></EditCopyright>}></Route>

    

        

      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;
