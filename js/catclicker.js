var model = {
  cats: [
    {
      name: 'Bridget',
      img: 'http://placehold.it/300/200',
      score: 0,
      li: {}
    },
    {
      name: 'Eleanor',
      img: 'http://placehold.it/200/200',
      score: 0,
      li: {}
    },
    {
      name: 'Lillian',
      img: 'http://placehold.it/200/100',
      score: 0,
      li: {}
    },
    {
      name: 'Elliot',
      img: 'http://placehold.it/100/100',
      score: 0,
      li: {}
    },
    {
      name: 'Dorian',
      img: 'http://placehold.it/100/50',
      score: 0,
      li: {}
    }
  ],
  currCat: {},
  admin: false
};

var list = {
  init: function() {
    this.ul = document.getElementById('catList');
    this.render();
    theHand.getClicker().li.classList.add('selected');
  },
  render: function() {
    var cats = theHand.getCats();
    var clicker = theHand.getClicker();
    cats.forEach(function(cat) {
      var catLi = document.createElement('li');
      catLi.innerText = cat.name;
      list.ul.appendChild(catLi);
      theHand.setLi(cat, catLi);
      catLi.addEventListener('click', (function(cat) {
        return function() {
          list.select(cat);
          theHand.changeCat(cat);
        };
      })(cat));
    });
  },
  select: function(cat) {
    var clicker = theHand.getClicker();
    cat.li.classList.add('selected');
    clicker.li.classList.remove('selected');
  }
};

var gameBoard = {
  render: function() {
    var clicker = theHand.getClicker();
    this.img.src = clicker.img;
    this.catName.innerText = clicker.name;
    this.score.innerText = clicker.score;
  },
  init: function() {
    this.img = document.getElementById('catImg');
    this.catName = document.getElementById('catName');
    this.score = document.getElementById('score');
    this.img.addEventListener('click', function() {
      theHand.scoreUpdate();
    });
    this.render();
  }
};

var theHand = {
  scoreUpdate: function() {
    model.currCat.score++;
    gameBoard.render();
  },
  changeCat: function(cat) {
    model.currCat = cat;
    gameBoard.render();
  },
  getCats: function() {
    return model.cats;
  },
  getClicker: function() {
    return model.currCat;
  },
  init: function() {
    model.currCat = model.cats[0];
    admin.init();
    gameBoard.init();
    list.init();
  },
  setLi: function(cat, catLi) {
    cat.li = catLi;
  },
  getInfo: function(info) {
    return model.currCat[info];
  },
  changeInfo: function(info, value) {
    if (info === 'score' && isNaN(value)) {
      return function() {
        alert('Score may only be numbers');
      };
    }
    if (info === 'url') {
      var urlTest = /^http:\/\/|^https:\/\//i;
      if(urlTest.test(value)) {
        return model.currCat[info] = value;
      }
      else {
        return model.currCat[info] = 'http://' + value;
      }
    }
    model.currCat[info] = value;
  },
  adminMode: function(mode) {
    model.admin = mode;
    admin.render();
  }
};

var admin = {
  init: function() {
    this.adminPanel = document.getElementById('admin-right');
    this.nameField = document.getElementById('nameField');
    this.urlField = document.getElementById('urlField');
    this.scoreField = document.getElementById('scoreField');
    admin.render();
  },
  render: function() {
    if (model.admin) {
      this.adminPanel.style.visibility = 'visible';
      this.nameField.value = theHand.getInfo('name');
      this.urlField.value = theHand.getInfo('url');
      this.scoreField.value = theHand.getInfo('score');
    }
    else {
      this.adminPanel.style.visibility = 'hidden';
    }
  },
  update: function() {
    if (this.nameField.value !== theHand.getInfo('name')) {
      theHand.changeInfo('name', this.nameField.value);
    }
    if (urlField.value !== theHand.getInfo('url')) {
      theHand.changeInfo('name', this.urlField.value);
    }
    if (scoreField.value !== theHand.getInfo('score')) {
      theHand.changeInfo('score', this.scoreField.value);
    }
  },
  cancel: function() {
    theHand.adminMode(false);
  }
};

theHand.init();