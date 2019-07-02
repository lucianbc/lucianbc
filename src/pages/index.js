import React from "react"

import Layout from "../layouts/layout"
import Home from "../components/home"
import Experience from "../components/experience"
import Projects from "../components/projects"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <Home />
    <Experience />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
