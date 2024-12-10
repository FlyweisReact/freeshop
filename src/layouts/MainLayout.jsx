import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = ({ children }) => {
    return (
        <div>
            {/* Navbar */}
            <Header />

            {/* Main Content */}
            <main style={{ minHeight: "calc(100vh - 200px)" }}>
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;
