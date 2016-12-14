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
      this.siteName.value,
      this.env.value,
      this.docRoot.value,
      this.dbName.value,
      this.repoName.value,
      this.createDB.checked,
      this.getRepo.checked,
    ];

    runArr.map(x => console.log(x));
  },
};

// const submitBtn = document.querySelector('.submit-btn');
// form.submitForm(submitBtn)