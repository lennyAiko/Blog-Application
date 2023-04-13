module.exports = {


  friendlyName: 'Update article',


  description: '',


  inputs: {
    id: {
      type: 'number',
      required: true,
      isInteger: true
    },
    title: {
      type: 'string',
      required: true
    },
    body: {
      type: 'string',
      required: true
    }

  },


  exits: {
    success: {
      responseType: 'redirect'
    }

  },


  fn: async function ({ id, title, body }) {

    const updatedArticle = await Article.updateOne(id).set({title, body});

    // All done.
    return `/articles/${updatedArticle.id}`;

  }


};
