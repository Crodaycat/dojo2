module.exports = {
  Query: {
    posts: (_, __, { dataSources }) => dataSources.PostAPI.getAllPost()
  }
};
