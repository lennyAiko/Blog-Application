module.exports = {


  friendlyName: 'Login',


  description: 'Login user.',


  inputs: {
    emailAddress: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    }

  },


  exits: {
    success: {
      responseType: 'redirect'
    },
    notFound: {
      responseType: 'notFound'
    }

  },


  fn: async function ({ emailAddress, password }) {

    const adminUser = await User.findOne({emailAddress, password});

    if (!adminUser) {throw 'notFound';}

    this.req.session.userId = adminUser.id;

    // All done.
    return '/';

  }


};
