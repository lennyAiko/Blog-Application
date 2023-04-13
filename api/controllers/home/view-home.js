module.exports = {


  friendlyName: 'View home',


  description: 'Display "Home" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/home/home'
    }

  },


  fn: async function () {

    const recentArticles = await Article.find({ status: 'public' }).sort('createdAt DESC').limit(5);

    // Respond with view.
    return { recentArticles, articlesCount: await sails.helpers.publicArticlesCount() };

  }


};
