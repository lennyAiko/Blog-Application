module.exports = {


  friendlyName: 'View new',


  description: 'Display "New" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/articles/new'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
