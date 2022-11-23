import '../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./header";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
    return (
        <main>
            <Header />
            <Navbar />
            {children}
            <Footer/>
        </main>
    );
};

export default Layout;
