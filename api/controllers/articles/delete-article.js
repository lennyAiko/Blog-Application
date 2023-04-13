module.exports = {


  friendlyName: 'Delete article',


  description: '',


  inputs: {
    id: {
      type: 'number',
      isInteger: true,
      required: true
    }

  },


  exits: {
    success: {
      responseType: 'redirect'
    }

  },


  fn: async function ({ id }) {

    await Article.destroyOne(id);

    // All done.
    return '/articles';

  }


};
