const form: {} = {
  // Initial Values
  siteName: document.querySelector('#siteName'),
  env: document.querySelector('#env'),
  docRoot: document.querySelector('#docRoot'),
  dbName: document.querySelector('#dbName'),
  repoName: document.querySelector('#repoName'),
  createDB: document.querySelector('#dbChk'),
  getRepo: document.querySelector('#repoChk'),

  cloneRepo: function() {
    if(this.getRepo.value !== 'no') {
      console.log('clone repo? ', this.getRepo.value);
    }
    console.log('clone repo? ', this.getRepo.value);
  },

  createDatabase: function() {
    if(!this.createDB.checked) {
      console.log('create db? ', this.createDB.checked);
    }  // i love you :);
    console.log('create db? ', this.createDB.checked);
  },

  sendForm: function() {
    const runArr = [
      this.siteName,
      this.env,
      this.docRoot,
      this.dbName,
      this.repoName,
      this.createDB,
      this.getRepo
      // { key: 'name', value: this.siteName.value },
      // { key: 'env',  value: this.env.value },
      // { key: 'docRoot', value: this.docRoot.value },
      // { key: 'dbName', value: this.dbName.value },
      // { key: 'repo', value: this.repoName.value },
      // { key: 'createDB', value: this.createDB.value },
      // { key: 'clone', value: this.getRepo.value },
    ];

    let res = runArr
      .filter((x) =>
        x.type == "select-one" && x.value != 'no' ||
        x.type == "text" && x.value != '')

    console.log(res);
  },
};

var sendForm = function() {

  // this.siteName = document.querySelector('#siteName').value;
  // this.env = document.querySelector('#env').value;
  // this.docRoot = document.querySelector('#docRoot').value;
  // this.dbName = document.querySelector('#dbName').value;
  // this.repoName = document.querySelector('#repoName').value;
  // this.createDB = document.querySelector('#dbChk').value;
  // this.getRepo = document.querySelector('#repoChk').value;
}