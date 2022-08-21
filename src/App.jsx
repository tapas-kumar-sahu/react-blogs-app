import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Blogs from "./components/Blogs";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";

const App = () => {

  return (
    <>
      <Nav />
      <Banner />
      <Blogs />
      <Subscription />
      <Footer />
    </>
  );
}

export default App;
