import Navbar from './Components/Navbar';
import Contacts from './Components/Pages/Contacts';
import Services from './Components/Pages/Sevices';
import Home from './Components/Pages/Home';
import About from './Components/Pages/Abouts';


function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break;
    case "/about":
      component = <About />
      break;
    case "/services":
      component = <Services />
      break;
    case "/contacts":
      component = <Contacts />
      break;

    default:
      break;
  }
  return (
    <>
      <Navbar />
      <div className='container'>
        {component}
      </div>
    </>
  );
}

export default App;
