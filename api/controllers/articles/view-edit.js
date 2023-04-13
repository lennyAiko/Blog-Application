module.exports = {


  friendlyName: 'View edit',


  description: 'Display "Edit" page.',

  inputs: {
    id: {
      type: 'number',
      required: true,
      isInteger: true
    }
  },

  exits: {

    success: {
      viewTemplatePath: 'pages/articles/edit'
    }

  },


  fn: async function ({ id }) {

    const articleToBeUpdated = await Article.findOne(id);

    // Respond with view.
    return { articleToBeUpdated };

  }


};
