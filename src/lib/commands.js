// Requires
const fs = require('fs');
const mkdirp = require('mkdirp');
const readline = require('readline');

// Implement readline stdin, and stdout to take user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Base path for my local
const basePath = '/Users/john/opensource/devenv-testing/ebs001/sites/clg/';

// "Constructor"
const Command = function(obj) {
  this.sitename = obj.sitename;
  this.env = obj.environment;
  this.docRoot = obj.docroot;
  this.createDB = obj.databasechk;
  this.dbName = obj.dbname;
  this.cloneRepo = obj.repochk;
  this.repoName = obj.reponame;
  this.path = basePath + obj.sitename;
  this.pathWithRepo = `${this.path}/${this.env}/repo`;
  this.pathNoRepo = `${this.path}/${this.env}/${this.docRoot}`;
}

// maybe make a function to filter the values that get passed in here in server.js

/**
 * Manage directory structure
 * @return void
 */
Command.prototype.manageDirStructure = function() {
  // for some future validation ideas
  // if (this.env === '') {
  //   rl.question('Please resubmit your form with the marked fields.', (answer) => {
  //      *****SOME REDIRECT HERE*****
  //   });
  //   return;
  // };
   // See if the form is going to return yes or no to clone a repo
  const chosePath = (this.cloneRepo != '') ? this.pathWithRepo : this.pathNoRepo;
  // Check if dir exists
  if (fs.existsSync(chosePath)) {
    // If directory exists get the users input, should we overwrite it?
    rl.question('Directory already exists, would you like to overwrite? y/n: ', (answer) => {
      // if answer is not an empty string, remove the directory, else return an empty string,
      // and continue execution....for now..terminate ^C or submit another form.
      if (answer == 'y') {
        // @TODO Some saftey measures
        this.rmDir(chosePath);
      } else {
        rl.question('Enter another path? "n" to end current session: ', (answer) => {
          // @TODO Need to get some saftey in here
          answer != '' ? this.rmDir(answer) : '';
        });
      }
      // Close the connection
      rl.close();
    });
  } else {
    // @TODO make directory structure
    console.log(chosePath);
    // this.mkDir(chosePath);
  }
};

/**
 * List directory contents
 * @return void
 *
 * @TODO: needs more thought
 */
Command.prototype.lsDir = function() {
  fs.readdir(this.path, (err, files) => {
    files.forEach(file => {
      console.log(file);
    });
  });
};

/**
 * Remove specified directory
 * @param  path [Path to the directory to delete]
 * @return void
 */
Command.prototype.rmDir = function(path) {
  fs.readdir(path, (err, file) => {
    let curPath = `${path}/${file}`;
    fs.rmdirSync(curPath);
    console.log('Directory Removed...')
  });
}

/**
 * Make directory for specified path
 * @param  path [Path of the directory to be made]
 * @return void
 */
Command.prototype.mkDir = function(path) {
  console.log('Creating Directory at ', path);
  mkdirp(path, (err) => {
    if (err) {
      console.error('Error creating directory!');
    } else {
      console.log('Directory created successfully..');
    }
  });
}

module.exports = Command;