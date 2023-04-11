module.exports = {


  friendlyName: 'View article',


  description: 'Display "Article" page.',

  inputs: {
    id: {
      type: 'number',
      isInteger: true,
      required: true
    }
  },

  exits: {

    success: {
      viewTemplatePath: 'pages/articles/article'
    },

    notFound: {
      responseType: 'notFound'
    }

  },


  fn: async function ({ id }) {

    const article = await Article.findOne(id);

    if (!article) { throw 'notFound';}

    // Respond with view.
    return { article };

  }


};
