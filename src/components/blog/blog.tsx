import React from "react"
import "./blog.scss"

type BlogPreviewItem = {
  title: string
  slug: string
  tags: string[]
  url: string
  date: string
}

const blogPosts: BlogPreviewItem[] = [
  {
    title: "Building a responsive, horizontal photo grid",
    slug:
      "Unexpected challenges when displaying photos on a grid and my approach to laying out photos in a horizontal, staggered, responsive grid.",
    tags: ["javascript", "gatsby", "react"],
    url:
      "https://dev.to/lucianbc/building-a-responsive-horizontal-photo-grid-14kn",
    date: "22 Aug 2021",
  },
  {
    title: "Union Type Merging in Typescript",
    slug:
      "Make object unions more useful by accessing all the possible fields and marking the non-common ones as optional.",
    tags: ["typescript", "tutorial", "webdev"],
    url: "https://dev.to/lucianbc/union-type-merging-in-typescript-9al",
    date: "4 Jun 2021",
  },
]

export default () => {
  return (
    <section
      id="blog"
      className="accent-background full-box"
      style={{ paddingBottom: "30px" }}
    >
      <div className="container">
        <h2 className="text-2">Blog</h2>
        <p>
          I wrote a few articles about some coding topics that I found
          interesting. I hope to pick up the habbit of writing blog posts.
        </p>
        <div className="columns">
          {blogPosts.map(blog => (
            <article
              className="column"
              key={blog.title}
              style={{
                marginRight: "30px",
                display: "flex",
                flexFlow: "column nowrap",
              }}
            >
              <h3>
                <a href={blog.url} target="_blank">
                  {blog.title}
                </a>
              </h3>
              <small>{blog.date}</small>
              <p style={{ textAlign: "justify" }}>{blog.slug}</p>
              <div style={{ display: "flex", marginTop: "auto" }}>
                {blog.tags.map(tag => (
                  <span className="chip">#{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
