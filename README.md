# Lucian Boacă - Personal Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/f1626856-6091-4968-8738-bc0b0f1d352f/deploy-status)](https://app.netlify.com/sites/lucianbc/deploys)

This is my personal website, serving as a point that aggregates all of my links and work and shows them in a nice and presentable way.

## Development

This website is built using [GatsbyJs](https://www.gatsbyjs.org/) Framework and hosted for free on Netlify. GatsbyJs is build on top of React and leverages GraphQl to generate fast static sites. It also provides a lot of plug-ins to make tasks like optimizing images or integrating Google Analytics very easy.

To run locally:

```(shell)
# Install dependencies
npm install

# Start the development server
gatsby develop
```

To build the website:

```(shell)
gatsby develop
```

The command from above builds the static site under the `/public` folder. From here, the result can be hosted on any web server.

## Roadmap

- [x] build the basic website
- [x] optimize images using `gatsby-image`
- [x] deploy the site on Netlify
- [x] set up a custom domain
- [ ] decouple the content from the code by using markdown files
- [ ] create a blog (based on markdown files)
- [ ] move the content to [Netlify CMS](https://www.netlifycms.org/)
- [ ] further develop the app to be a personal customizable journal. It should hold all the information about me and be easily configurable to display only some of it. It should also be able to generate customizable resumes.
