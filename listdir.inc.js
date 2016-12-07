module.exports = {

  appinit: function(folder) {
    var fs = require('fs');
    console.log(" init loaded");
    module.exports.dirlist(folder);

    fs.watch(folder, function (event, filename) {
        console.log('event is: ' + event);
        if (filename) {
            console.log('filename provided: ' + filename);
            module.exports.dirlist(folder);
        } else {
            console.log('filename not provided');
        }
    });

	},


  dirlist: function(folder) {
    var fs = require('fs');
    fs.readdir(folder, function(err, items) {
      console.log(items);
      for (var i=0; i<items.length; i++) {
        console.log(items[i]);
      }
    });
  },



};
