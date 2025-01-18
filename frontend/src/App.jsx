import "./App.css";
import Navbar from "./components/nav/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BookingComponent from "./route/Booking";
import Home from "./route/Home.jsx";
import SignupForm from "./route/user/SignUpFrom";
import Footer from "./components/nav/Footer";
import { BookingProvider } from "./BookingContext.jsx";
import SuccessPage from "./route/user/Success.jsx";
import Admin from "./route/user/admin/Admin.jsx";
import Contact from "./route/contact/Contact.jsx";
import Service from "./route/services/Service.jsx";
import Blog from "./route/blog/Blog.jsx";
import About from "./route/About.jsx";
import Register from "./route/user/log/Register.jsx";
import Login from "./route/user/log/Login.jsx";
import Profile from "./route/user/Profile.jsx";

function App() {
  return (
    <div className="montserrat">
      <Router>
        <BookingProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookings" element={<BookingComponent />} />
            <Route path="/sign-up" element={<SignupForm />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Service />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </BookingProvider>
      </Router>
    </div>
  );
}

export default App;
