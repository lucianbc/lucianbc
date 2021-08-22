import React from "react"

type ExperienceItem = {
  comapny: string
  period: string
  location: string
  title: string
  titlePeriod?: string
  tech?: string[]
  subitems?: {
    title: string
    period: string
    tech?: string[]
  }[]
}

const experiences: ExperienceItem[] = [
  {
    comapny: "Babylon Health",
    period: "September 2019 - Present",
    location: "London",
    title: "Senior Software Engineer",
    titlePeriod: "November 2020 - Present",
    tech: ["React Native", "GraphQL", "Apollo", "Redux"],
    subitems: [
      {
        title: "Software Engineer",
        period: "May 2020 - November 2020",
      },
      {
        title: "Software Engineer",
        period: "September 2019 - May 2020",
      },
    ],
  },
  {
    comapny: "Amazon EU",
    period: "July 2019 - December 2019",
    location: "Luxembourg",
    title: "Software Developer Intern",
    tech: ["Java", "Python", "AWS"],
  },
  {
    comapny: "Gentlab",
    location: "Bucharest",
    period: "March 2017 - March 2018",
    title: "Junior Software Developer (Part Time)",
    tech: ["Java", "Spring", "ElasticSearch", "Docker"],
  },
]

const experience = () => {
  return (
    <section id="experience" className="accent-background full-box">
      <div className="container">
        <h2>Experience</h2>
        <div>
          {experiences.map(experience => {
            return (
              <div
                style={{ display: "flex", flexDirection: "row", width: "100%" }}
              >
                <div
                  style={{
                    flex: 1,
                    textAlign: "right",
                    paddingRight: "20px",
                    boxSizing: "border-box",
                  }}
                >
                  <div>{experience.comapny}</div>
                  <div>{experience.location}</div>
                  <div>{experience.period}</div>
                </div>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "red",
                  }}
                >
                  sep
                </div>
                <div style={{ flex: 1, paddingLeft: "20px" }}>
                  <div>{experience.title}</div>
                  {experience.titlePeriod ? (
                    <div>{experience.titlePeriod}</div>
                  ) : null}
                  {experience.tech ? <div>{experience.tech}</div> : null}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default experience
