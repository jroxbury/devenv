var form = {
    // Initial Values
    siteName: document.querySelector('#siteName'),
    env: document.querySelector('#env'),
    docRoot: document.querySelector('#docRoot'),
    dbName: document.querySelector('#dbName'),
    repoName: document.querySelector('#repoName'),
    createDB: document.querySelector('#dbChk'),
    getRepo: document.querySelector('#repoChk'),
    cloneRepo: function () {
        if (this.getRepo.value !== 'no') {
            console.log('clone repo? ', this.getRepo.value);
        }
        console.log('clone repo? ', this.getRepo.value);
    },
    createDatabase: function () {
        if (!this.createDB.checked) {
            console.log('create db? ', this.createDB.checked);
        } // i love you :);
        console.log('create db? ', this.createDB.checked);
    },
    sendForm: function () {
        var runArr = [
            { 'name': this.siteName },
            { 'env': this.env },
            { 'docRoot': this.docRoot },
            { 'dbName': this.dbName },
            { 'repo': this.repoName },
            { 'createDB': this.createDB },
            { 'clone': this.getRepo },
        ];
        var res = runArr
            .filter(function (x) {
            return x.type == "select-one" && x.value != 'no' ||
                x.type == "text" && x.value != '';
        }).map(function (x) { return x.value; });
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
