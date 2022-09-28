import * as React from "react";

import Layout from "../components/layout";
import About from "../components/about";
import AboutMe from "../components/about-me";
import Work from "../components/work";
import Education from "../components/education";
import Projects from "../components/projects";
import GetInTouch from "../components/get-in-touch";
import Footer from "../components/footer";

const IndexPage = () => (
  <Layout>
    <About/>
    <AboutMe/>
    <Work/>
    <Education/>
    <Projects/>
    <GetInTouch/>
    <Footer/>
  </Layout>
)

export default IndexPage
