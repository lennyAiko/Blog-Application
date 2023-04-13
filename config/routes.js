/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': 'home/view-home',

  'GET /articles': 'articles/view-articles',

  'GET /articles/:id': 'articles/view-article',

  'GET /articles/new': 'articles/view-new',

  'POST /articles': 'articles/create-article',

  'GET /articles/:id/edit': 'articles/view-edit',

  'POST /articles/:id/edit': 'articles/update-article',

  'POST /articles/:id/delete': 'articles/delete-article',

  'POST /articles/:id/comments': 'comment/create-comment',

  'GET /login': 'user/view-login',

  'POST /login': 'user/login'


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
