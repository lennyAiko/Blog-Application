module.exports = {


  friendlyName: 'View home',


  description: 'Display "Home" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/home/home'
    }

  },


  fn: async function () {

    const recentArticles = await Article.find().sort('createdAt DESC').limit(5);

    // Respond with view.
    return { recentArticles };

  }


};
