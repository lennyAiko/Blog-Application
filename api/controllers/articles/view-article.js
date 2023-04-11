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
    }

  },


  fn: async function ({ id }) {

    const article = await Article.findOne(id);

    // Respond with view.
    return { article };

  }


};
