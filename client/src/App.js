import {useEffect} from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";
import Proyects from "./components/Proyects/Proyects";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";


import { useSelector, useDispatch } from 'react-redux';
import { getProfile } from './redux/actions/index';

function App() {
  const dispatch = useDispatch();
  const profile = useSelector( ( state ) => state.profile);

  useEffect(()=>{
      dispatch(getProfile());
      // console.log(profile);
  }, [dispatch])
  return (
    <>
      <NavBar />
      <About 
          headline={profile.headline?profile.headline: "FullStackDeveloper"}
          img={profile.img}
          name={profile.fullName}
          email={profile.email}
          address={profile.address}
          github={profile.github}
          about={profile.about}
      />
      <Skills 
        skillsTech={profile.skillstech?profile.skillstech:[]}
      />
      <Proyects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
