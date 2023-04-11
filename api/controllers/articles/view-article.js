module.exports = {


  friendlyName: 'View article',


  description: 'Display "Article" page.',

  inputs: {

  },

  exits: {

    success: {
      viewTemplatePath: 'pages/articles/article'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
