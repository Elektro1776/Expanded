/**
 * Main controller for Ghost frontend
 */

/*global require, module */

var api         = require('../../api'),
    config      = require('../../config'),
    filters     = require('../../filters'),
    templates   = require('./templates'),
    handleError = require('./error'),
    formatResponse = require('./format-response'),
    postLookup     = require('./post-lookup'),
    setResponseContext = require('./context'),
    setRequestIsSecure = require('./secure'),
     db          = require('../../data/db'),
    frontendControllers;

/*
* Sets the response context around a post and renders it
* with the current theme's post view. Used by post preview
* and single post methods.
* Returns a function that takes the post to be rendered.
*/
function renderPost(req, res) {
    return function renderPost(post) {
        var view = templates.single(req.app.get('activeTheme'), post),
            response = formatResponse.single(post);

        setResponseContext(req, res, response);
        res.render(view, response);
    };
}

frontendControllers = {
  search: function search(req,res,next) {
var q = req.query.q;
//console.log(db.knex('posts'));
if (q) {
    db.knex('posts')
    .whereRaw('search @@ plainto_tsquery(?)',[q])
    .andWhere('status', '=', "published")
    .limit(50)
     .then(function (results) {
       var slugURL;
         for (var i=0; i<results.length; i++){
            // console.log(results[i].slug+'Im The Loop Results');
             slugURL = results[i].slug;
  }
         var out = {
         posts: results,
         query: q,
         count: results.length,
         queryUrl: 'http://dev.groupxondemand.com/'+slugURL
         };
      console.log(out.Url+ 'Im Results!');
res.render('search',out);
}).catch(function(err){
//console.log(err);
res.render('search');
});
}
},
  trending: function trending(req,res,next) {
      api.posts.browse({limit:20}).then(function (result) {
        res.render('trending',{posts:result.posts});
    });
  },
    preview: function preview(req, res, next) {
        var params = {
                uuid: req.params.uuid,
                status: 'all',
                include: 'author,tags'
            };

        api.posts.read(params).then(function then(result) {
            var post = result.posts[0];

            if (!post) {
                return next();
            }

            if (post.status === 'published') {
                return res.redirect(301, config.urlFor('post', {post: post}));
            }

            setRequestIsSecure(req, post);

            filters.doFilter('prePostsRender', post, res.locals)
                .then(renderPost(req, res));
        }).catch(handleError(next));
    },
    single: function single(req, res, next) {
        // Query database to find post
        return postLookup(req.path).then(function then(lookup) {
            var post = lookup ? lookup.post : false;

            if (!post) {
                return next();
            }

            // CASE: last param is of url is /edit, redirect to admin
            if (lookup.isEditURL) {
                return res.redirect(config.paths.subdir + '/ghost/editor/' + post.id + '/');
            }

            // CASE: permalink is not valid anymore, we redirect him permanently to the correct one
            if (post.url !== req.path) {
                return res.redirect(301, post.url);
            }

            setRequestIsSecure(req, post);

            filters.doFilter('prePostsRender', post, res.locals)
                .then(renderPost(req, res));
        }).catch(handleError(next));
    }
};

module.exports = frontendControllers;
