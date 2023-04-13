/**
 * Article.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    title: {
      type: 'string',
      required: true
    },

    body: {
      type: 'string',
      required: true
    },
    status: {
      type: 'string',
      isIn: ['public', 'private', 'unlisted'],
      defaultsTo: 'public'
    },
    comments: {
      collection: 'comment',
      via: 'article'
    }
  },
  beforeDestroy: async function(criteria, proceed) {
    await Comment.destroy({article: criteria.where.id});
    return proceed();
  }

};

