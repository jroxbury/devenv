const form: {} = {
  // Initial Values
  siteName:<HTMLElement> document.querySelector('#siteName'),
  env:<HTMLElement> document.querySelector('#env'),
  docRoot:<HTMLElement> document.querySelector('#docRoot'),
  dbName:<HTMLElement> document.querySelector('#dbName'),
  repoName:<HTMLElement> document.querySelector('#repoName'),
  createDB:<HTMLElement> document.querySelector('#dbChk'),
  getRepo:<HTMLElement> document.querySelector('#repoChk'),

  cloneRepo: function(): void {
    if(this.getRepo.value !== 'no') {
      console.log('clone repo? ', this.getRepo.value);
    }
    console.log('clone repo? ', this.getRepo.value);
  },

  createDatabase: function(): void {
    if(!this.createDB.checked) {
      console.log('create db? ', this.createDB.checked);
    }  // i love you :);
    console.log('create db? ', this.createDB.checked);
  },

  sendForm: function(): void {
    const runArr: Array<Object> = [
      { 'name': this.siteName },
      { 'env': this.env },
      { 'docRoot': this.docRoot },
      { 'dbName': this.dbName },
      { 'repo': this.repoName },
      { 'createDB': this.createDB },
      { 'clone': this.getRepo },
    ];

    let res: Object = runArr
      .filter((x: HTMLInputElement) =>
        x.type == "select-one" && x.value != 'no' ||
        x.type == "text" && x.value != ''
      ).map((x: HTMLInputElement) => x.value);

    console.log(res);
  },
};

// var Creator = function() {
//   this.siteName = document.querySelector('#siteName');
//   this.env = document.querySelector('#env');
//   this.docRoot = document.querySelector('#docRoot');
//   this.dbName = document.querySelector('#dbName');
//   this.repoName = document.querySelector('#repoName');
//   this.createDB = document.querySelector('#dbChk');
//   this.getRepo = document.querySelector('#repoChk');
// }