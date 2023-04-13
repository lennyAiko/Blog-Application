module.exports = {


  friendlyName: 'Create article',


  description: '',


  inputs: {
    title: {
      type: 'string',
      required: true
    },
    body: {
      type: 'string',
      required: true
    },
    status: {
      type: 'string'
    }
  },


  exits: {
    success: {
      responseType: 'redirect',
    }
  },


  fn: async function ({ title, body, status }) {

    const { id } = await Article.create({ title, body, status }).fetch();

    // All done.
    return `/articles/${id}`;

  }


};
