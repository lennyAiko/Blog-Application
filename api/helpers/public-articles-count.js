module.exports = {


  friendlyName: 'Public articles count',


  description: '',


  inputs: {

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function () {

    return await Article.count({ status: 'public' });
  }


};

