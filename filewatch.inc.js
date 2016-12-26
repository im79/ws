var fs = require('fs');
var myfolder;

module.exports = {
  appinit: function(folder, s) {
    this.myfolder = folder;
	},

  watch: function(s) {
    //module.exports.dirlist(folder);

    fs.watch(this.myfolder, function (event, filename) {
      if (filename) {
        s.send( "WATCHER:" + event +"-"+ filename );
      } else {
        s.send( "WATCHER:" + event  );
      }
    });


  },


  dirlist: function(folder) {
    fs.readdir(folder, function(err, items) {
      console.log(items);
      for (var i=0; i<items.length; i++) {
        console.log(items[i]);
      }
    });
  },



};
