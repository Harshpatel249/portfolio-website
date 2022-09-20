import * as React from "react";

import Layout from "../components/layout";
import About from "../components/about";
import AboutMe from "../components/about-me";
import Work from "../components/work";

const IndexPage = () => (
  <Layout>
    <About/>
    <AboutMe/>
    <Work/>
  </Layout>
)

export default IndexPage
