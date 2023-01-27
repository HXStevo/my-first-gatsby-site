require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `myfirstgatsbysitemain97955`,
        accessToken: `${process.env.MC5ZOU9lSWhJQUFDSUFhVTBi.77-9WHMMEO-_ve-_ve-_vTXvv73vv73vv73vv73vv73vv73vv71_77-977-9Ne-_ve-_vTZP77-9Iu-_vXfvv73vv73vv73vv70}`,
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

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `your-repository-name`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
        schemas: {
          post: require("./custom_types/post.json"),
        },
      },
    },
  ],
}
