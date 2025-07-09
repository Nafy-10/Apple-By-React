import React from "react";
import Header from "./Components/Header/Header";
import Footer from './Components/Footer/Footer';
import SectionOne from "./Components/Section-1/SectionOne";
import SectionTwo from "./Components/Section-2/SectionTwo";
import Alert from "./Components/AlertSection/Alert";
import SectionThree from "./Components/Section-3/SectionThree";
import SectionFour from "./Components/Section-4/SectionFour";
import SectionFive  from "./Components/Section-5/SectionFive";
import SectionSix from "./Components/Section-6/SectionSix";
import YoutubeVideos from "./Components/YoutubeVideos";


function App() {
  return (
    <>
      {/* <h1>React</h1> */}
      <Header />
      <Alert/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <h2  className="bold">Latest Youtube Videos</h2>
      <YoutubeVideos/>
      <Footer/>
    </>
  );
}
export default App;
