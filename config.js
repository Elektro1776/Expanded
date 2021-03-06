// # Ghost Configuration
// Setup your Ghost install for various
// [environments](http://support.ghost.org/config/#about-environments).

// Custom Helpers
// require('./helpers');

// Ghost runs in `development` mode by default. Full documentation can be found
// at http://support.ghost.org/config/

var path = require('path'), config;

config = {
  // ### Production
  // When running Ghost in the wild, use the production environment.
  // Configure your URL and mail settings here
  production : {
      url : 'http://expandedconsciousness.com/',
      mail : {
        transport : 'SMTP',
        options : {
          service : 'Mailgun',
          auth : {
            user :
                'postmaster@sandbox64693ca142e14e93b60c4a87e7326ab9.mailgun.org', // mailgun username
            pass : '882fdfc4ac6600fffb0ebbe62045ce56' // mailgun password
          }
        }

      },
    database : {
      client : 'pg',
      connection : {
        host : '130.211.215.155',
	port:'5432',
        user : 'groupx',
        password : 'Austin1776#',
        database : 'currentExpanded',
        charset : 'utf8'
      },
      debug : false
    },
        storage: {
active: 'gcloud',
'gcloud': {
    projectId: '348800233321',
    key: 'key.json', // if is in the ghost root folder just add the name of the file
    bucket: 'expanded-2017'
}
},

    server : {host : '127.0.0.1', port : '2368'}

  },


  // ### Development **(default)**
  development : {
    // The url to use when providing links to the site, E.g. in RSS and email.
    // Change this to your Ghost blog's published URL.
     url : 'http://expandedconsciousness.com/',
 
    // Example mail config
    // Visit http://support.ghost.org/mail for instructions
    // ```
    //  mail: {
    //      transport: 'SMTP',
    //      options: {
    //          service: 'Mailgun',
    //          auth: {    //              user: '', // mailgun username
    //              pass: ''  // mailgun password
    //          }
    //      }
    //  },
    // ```

    // #### Database
    // Ghost supports sqlite3 (default), MySQL & PostgreSQL
       database : {
      client : 'pg',
      connection : {
        host : '130.211.215.155',
        port:'5432',
        user : 'groupx',
        password : 'Austin1776#',
        database : 'currentExpanded',
        charset : 'utf8'
      },
      debug : false
    },
               storage: {
active: 'gcloud',
'gcloud': {
    projectId: '348800233321',
    key: 'key.json', // if is in the ghost root folder just add the name of the file
    bucket: 'expanded-2017'
}
} ,
    // #### Server
    // Can be host & port (default), or socket
    server : {
      // Host to be passed to node's `net.Server#listen()`
      host : '127.0.0.1',
      // Port to be passed to node's `net.Server#listen()`, for iisnode set this
      // to `process.env.PORT`
      port : '2368'
    },
    // #### Paths
    // Specify where your content directory lives
    paths : {contentPath : path.join(__dirname, '/content/')}
  },

  // **Developers only need to edit below here**

  // ### Testing
  // Used when developing Ghost to run tests and check the health of Ghost
  // Uses a different port number
  testing : {
    url : 'http://127.0.0.1:2369',
    database : {
      client : 'sqlite3',
      connection :
          {filename : path.join(__dirname, '/content/data/ghost-test.db')},
      pool : {
        afterCreate : function(conn, done) {
          conn.run('PRAGMA synchronous=OFF;' +
                       'PRAGMA journal_mode=MEMORY;' +
                       'PRAGMA locking_mode=EXCLUSIVE;' +
                       'BEGIN EXCLUSIVE; COMMIT;',
                   done);
        }
      }
    },
    server : {host : '127.0.0.1', port : '2369'},
    logging : false
  },

  // ### Testing MySQL
  // Used by Travis - Automated testing run through GitHub
  'testing-mysql' : {
    url : 'http://127.0.0.1:2369',
    database : {
      client : 'mysql',
      connection : {
        host : '127.0.0.1',
        user : 'root',
        password : '',
        database : 'ghost_testing',
        charset : 'utf8'
      }
    },
    server : {host : '127.0.0.1', port : '2369'},
    logging : false
  },

  // ### Testing pg
  // Used by Travis - Automated testing run through GitHub
  'testing-pg' : {
    url : 'http://127.0.0.1:2369',
    database : {
      client : 'pg',
      connection : {
        host : '127.0.0.1',
        user : 'postgres',
        password : '',
        database : 'ghost_testing',
        charset : 'utf8'
      }
    },
    server : {host : '127.0.0.1', port : '2369'},
    logging : false
  }
};

module.exports = config;
