module.exports = {


  friendlyName: 'Create comment',


  description: '',


  inputs: {
    id: {
      type: 'number',
      isInteger: true,
      required: true
    },
    commenter: {
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


  fn: async function ({ id, commenter, body }) {

    const comment = await Comment.create({
      commenter,
      body,
      article: id
    }).fetch();

    // All done.
    return `/articles/${comment.article}`;

  }


};
