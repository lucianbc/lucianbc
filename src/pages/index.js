import React from "react"

import Layout from "../layouts/layout"
import Home from "../components/home"
import Experience from "../components/experience"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Blog from "../components/blog"

const IndexPage = () => (
  <Layout>
    <Home />
    <Blog />
    <Projects />
    <Experience />
    {/* <Contact /> */}
  </Layout>
)

export default IndexPage
