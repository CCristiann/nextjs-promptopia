import "../styles/globals.css";
import { Poppins } from "next/font/google";

import Provider from "../components/Provider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Promptopia",
  description: "App made with Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider>
          <div className="main">
          </div>
          <main className="app">
            <Navbar />
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </Provider>
        <ToastContainer />
      </body>
    </html>
  );
}
