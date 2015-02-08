var model = {
  [
    {
      name: Bridget,
      img: 'http://placehold.it/300/200',
      score: 0
    },
    {
      name: 'Eleanor',
      img: 'http://placehold.it/200/200',
      score: 0
    },
    {
      name: 'Lillian',
      img: 'http://placehold.it/200/100',
      score: 0
    },
    {
      name: 'Elliot',
      img: 'http://placehold.it/100/100',
      score: 0
    },
    {
      name: 'Dorian',
      img: 'http://placehold.it/100/50',
      score: 0
    }
  ],
  currCat = 0
};

var list = {
  init: function(cats) {
    this.ul = document.getElementById('catList');
    this.render();
  }'
  render: function() {
    var cats = theHand.getCats();
    var clicker = theHand.getClicker();
    cats.forEach(function(cat) {
      var catLi = document.createElement('li');
      catLi.innerText = cat.name;
      this.ul.appendChild(catLi);
      catLi.addEventLister('click', (function(cat) {
        return function() {
          cats[clicker].classList.remove('selected');
          theHand.changeCat(cat);
        };
        })(cat));
    }
  }
};
	
	
	kittens.forEach(function(kitten) {
		kitten.selected = false;
		kitten.li.classList.remove('selected');
		kitten.box.style.display = 'none';
	});
	this.selected = true;
	this.li.classList.add('selected');
	this.box.style.display = 'block';
};

Kitty.prototype.click = function() {
	this.score++;
	this.scoreP.innerText = this.score;
};

var kittens = [];
kittens.push(new Kitty('Bridget'));
kittens.push(new Kitty('Eleanor'));
kittens.push(new Kitty('Lillian'));
kittens.push(new Kitty('Elliot'));
kittens.push(new Kitty('Dorian'));
