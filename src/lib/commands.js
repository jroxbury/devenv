const fs = require('fs');
const mkdirp = require('mkdirp');

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

/**
 * Check if directory already exists
 * @return void
 */
Command.prototype.checkDirStructure = function() {
  // Check if dir exists
  if (fs.existsSync(this.path)) {
    console.error('This directory or file exists, would you like to overwrite it?');
    this.rmDir(this.path);
  } else {
    // @TODO make directory structure
    this.cloneRepo == 'no' ? this.mkDir(this.pathNoRepo) : this.mkDir(this.pathWithRepo);
  }
};

/**
 * List directory contents
 * @return void
 */
Command.prototype.lsDir = function() {
  fs.readdir(this.path, (err, files) => {
    files.forEach(file => {
      console.log(file);
      return;
    });
  });
};

// Remove Directory
Command.prototype.rmDir = function(path) {
  fs.readdir(path, (err, file) => {
    let curPath = `${path}/${file}`;
    fs.rmdirSync(curPath);
    console.log('Directory Removed...')
  });
}

// Create Directory
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