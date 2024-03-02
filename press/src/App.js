import Navbar from './components/navbar/navbar';
import MainPage from './pages/mainPage/mainPage';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <MainPage></MainPage>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
