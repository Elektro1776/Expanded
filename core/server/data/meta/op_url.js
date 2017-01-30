var config = require('../../config'),
    getUrl = require('./url'),
    _      = require('lodash');

function page_2Url(data) {
    var context = data.context ? data.context : null;

    if (_.includes(context, 'post') && !_.includes(context, 'oP')) {
        return config.urlJoin(config.getBaseUrl(false),
            getUrl(data, false)) + 'oP/';
    }
    return null;
}

module.exports = page_2Url;
