module.exports = {


  friendlyName: 'Index',


  description: 'Index articles.',


  inputs: {

  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/articles/index'
    }
  },


  fn: async function (inputs) {

    // All done.
    return;

  }


};
