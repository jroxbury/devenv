const form = {
  // Initial Values
  siteName: document.querySelector('#siteName'),
  env: document.querySelector('#env'),
  docRoot: document.querySelector('#docRoot'),
  dbName: document.querySelector('#dbName'),
  repoName: document.querySelector('#repoName'),
  createDB: document.querySelector('#dbChk'),
  getRepo: document.querySelector('#repoChk'),

  cloneRepo: function() {
    if(!this.getRepo.checked) {
      console.log('clone repo? ', this.getRepo.checked);
    }
    console.log('clone repo? ', this.getRepo.checked);
  },

  createDatabase: function() {
    if(!this.createDB.checked) {
      console.log('create db? ', this.createDB.checked);
    }  // i love you :);
    console.log('create db? ', this.createDB.checked);
  },

  sendForm: function() {
    runArr = [
      this.siteName,
      this.env,
      this.docRoot,
      this.dbName,
      this.repoName,
      this.createDB,
      this.getRepo,
    ];

    let res = runArr
      .filter(x =>
        x.type == "select-one" && x.value != 'no' ||
        x.type == "text" && x.value != '');
    
    console.log(res);
  },
};

// const submitBtn = document.querySelector('.submit-btn');
// form.submitForm(submitBtn)