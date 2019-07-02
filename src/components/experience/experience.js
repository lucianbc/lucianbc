import React from 'react';

import "./experience.scss"

import imgUb from "../../assets/unibuc.png"
import imgGtl from "../../assets/gtl.jpeg"
import imgAmz from "../../assets/logo-amazon-square.jpg"

import Item from "./experienceItem"

export default () => (
  <section id="experience" className='accent-background'>
    <div className='container columns'>
      <article className='column'>
        <div>
          <h2 className='text-2'>
            Education
          </h2>

          <div>
            { 
              data.education.map((value, index) => <Item model={value} key={index}/>) 
            }
          </div>
        </div>
      </article>
      <article className='column'>
        <div>
          <h2 className='text-2'>
            Work
          </h2>
          <div>
            {
              data.work.map((value, index) => <Item model={value} key={index}/>)
            }
          </div>
        </div>
      </article>
    </div>
  </section>
)

const data = {
  education: [
    {
      image: imgUb,
      alt: 'Logo Unibuc',
      title: 'BSc. Computer Science',
      vendor: 'University of Bucharest',
      period: 'October 2016 - September 2019',
      bullets: [
        "Took a wide spectrum of courses, ranging from Math and abstract Computer Science to more applied Software Engineering",
        "Applied the theoretical knowledge on <a href='https://github.com/lucianbc?utf8=%E2%9C%93&tab=repositories&q=%23university&type=&language=' target='_blank' rel='noopener noreferrer'><b>projects</b></a> on different subjects and involving different technologies"
      ]
    }
  ],
  work: [
    {
      image: imgAmz,
      alt: 'Logo Amazon',
      title: 'Software Developer Intern',
      vendor: 'Amazon EU',
      period: 'July 2018 - December 2018',
      location: 'Luxembourg',
      bullets: [
        "Used Python to automate some parts of a data migration, which sped it up by more than a month.",
        "Developed a serverless application to watch a stream of millions of messages a day, helping the ops team with dashboards on traffic and errors.",
        "Worked on migrating and maintaining a data pipeline comprised of Redshift ETL jobs.",
        "Used various AWS services, including Lambda, SQS, SNS, Kinesis Firehose and further developed my Java and Python skills."
      ]
    },
    {
      image: imgGtl,
      alt: 'Logo Gtl',
      title: 'Junior Backend Developer',
      vendor: 'Gentlab',
      period: 'March 2017 - March 2018',
      location: 'Bucharest',
      bullets: [
        "Worked on an e-learning platform as a part time backend developer for 20 to 25 hours a week",
        "Implemented a quiz feature with support for random quizzes for each user and import from external sources.",
        "Implemented a service to manage conferences and live streaming sessions",
        "Worked mainly with Java and Spring, but I also used Elastic Search and React. Here I also got familiar with Docker."
      ]
    }
  ]
}