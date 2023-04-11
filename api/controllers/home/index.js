module.exports = {


  friendlyName: 'Index',


  description: 'Index home.',


  inputs: {

  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/home/index'
    }
  },


  fn: async function (inputs) {

    // All done.
    return;

  }


};
