var fs = require('fs');

var form = {
  checkDirStructure: function(obj) {
      if (!fs.existsSync('/Users/john/')) {
        console.log('error');
      }
      console.log(obj);
  }
}

module.exports = form;