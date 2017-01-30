var config = require('../../config'),
    getUrl = require('./url');

function getCanonicalUrl(data) {
    var url = config.urlJoin(config.getBaseUrl(false),
        getUrl(data, false));

    if (url.indexOf('/amp/')) {
        url = url.replace(/\/amp\/$/i, '/');
    }
    if (url.indexOf('/oP/')) {
        url = url.replace(/\/page_2\/$/i, '/');
    }
    return url;
}

module.exports = getCanonicalUrl;
