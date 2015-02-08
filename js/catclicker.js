var Kitty = function(name) {
	this.name = name;
	var container = document.getElementsByClassName('container')[0];

	var list = document.getElementsByClassName('catList')[0];

	var box = document.createElement('div');
	box.id = this.name + 'Box';
	box.style.display = 'none';

	var img = document.createElement('img');
	img.src = 'http://placehold.it/300/200';
	img.className = 'clickable';
	img.id = this.name;

	var nameH1 = document.createElement('h1');
	nameH1.innerText = this.name;

	var scoreP = document.createElement('p');
	scoreP.className = 'score';
	scoreP.id = this.name + 'Score';
	scoreP.innerText = 0;

	var li = document.createElement('li');
	li.id = this.name + 'List';
	li.innerText = this.name;

	this.score = 0;
	this.selected = false;


	container.appendChild(box);
	this.box = document.getElementById(box.id);
	this.box.appendChild(nameH1);
	this.box.appendChild(img);
	this.box.appendChild(scoreP);
	list.appendChild(li);

	this.img = document.getElementById(img.id);
	this.scoreP = document.getElementById(scoreP.id);
	this.li = document.getElementById(li.id);

	this.img.addEventListener('click', this.click.bind(this), false);
	this.li.addEventListener('click', this.select.bind(this), false);
};

Kitty.prototype.select = function() {
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