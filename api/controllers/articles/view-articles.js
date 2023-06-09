module.exports = {


  friendlyName: 'View articles',


  description: 'Display "Articles" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/articles/articles'
    }

  },


  fn: async function () {

    const articles = await Article.find({ status: 'public' }).sort('createdAt DESC');

    // Respond with view.
    return { articles, articlesCount: await sails.helpers.publicArticlesCount() };

  }


};
