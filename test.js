const { User, Comment, CommentSetting, Proxy, Post } = require('./app/models');
// const cheerio = require('cheerio');
// const fs = require('fs');
const ParseService = require('./app/services/format/ParseService')

const helper = require('./app/services/format/HelperService')

async function write_test_html(content) {
	fs.writeFile('test_html.html', content, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
	}); 
}

async function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

async function test() {
  const BrowserPostService = require('./app/services/browser/BrowserPostService')
  const user = await User.findOne({where: {id: 2}})
  const BrowserPostServiceInstance = new BrowserPostService(user)
  const browser = await BrowserPostServiceInstance.openBrowser()
  await BrowserPostServiceInstance.autoTagFriends({browser: browser, postId: 'pfbid09XDUmu3C84LuQQsXmWj7CRJcPuqZeafTgu9NrA4SKbwKQTvMr8nxNh3b3RMQ2ed5l'})
}

test();

