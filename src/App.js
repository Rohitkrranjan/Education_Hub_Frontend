import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Service from "./pages/Service";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Page404 from "./pages/Page404";
import {Logout} from "./pages/Logout";
import AdminLayout from "./layouts/Admin-Layout";
import AdminUser from "./pages/Admin-User";
import AdminContact from "./pages/Admin-Contact";
// // import adminHome from "./pages/Admin-Home";
// import adminUpdateUser from "./pages/Admin-Update-user";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/*" element={<Page404/>} />
        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="users" element={<AdminUser/>}/>
          <Route path="contacts" element={<AdminContact/>} />
         </Route>
       </Routes>
       <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
