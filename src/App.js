import Map from "./components/map";
import Header from "./components/Header";
import Main from "./components/About";
import Rooms from "./components/Rooms";
import Services from "./components/Services";
import Gallary from "./components/Gallary";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Rooms />
      <Services />
      <Gallary />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
