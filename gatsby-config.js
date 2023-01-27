require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `airparks-de`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
        schemas: {
          post: require("./custom_types/post.json"),
        },
      },
    },
  ],
}require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
