import React from "react"

import Layout from "../layouts/layout"
import Home from "../components/home"
import Experience from "../components/experience"
import Projects from "../components/projects"

const IndexPage = () => (
  <Layout>
    <Home />
    <Experience />
    <Projects />
  </Layout>
)

export default IndexPage
