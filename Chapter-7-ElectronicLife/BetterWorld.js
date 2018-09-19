var plan = ["##########################################################",
  "##### o o ***       #######********#####oooooooooo      ##",
  "#   oo ££ ££ ££ ££ ££  oooo ***     ££ ££ ££ ££ ££ ££    #",
  "#   ***                 ##########*******    £          ##",
  "## ££ o ££ oo ££ o ££ o ##  *** ##       oo  *** oo      #",
  "###    ***              ## o     #  ££ oo oo oo ### oo ###",
  "##      ££  **  oo ##                £     ###           #",
  "#    #### ******           o o o o   £ooooooo£ oo   ######",
  "#########      ***    ££££££        o  o         ####   £#",
  "####    ***o   ###       o oo oo oo oo oo       ££       #",
  "##       ######     ######                   ***      ####",
  "##   ** ** oo  ££ ##    ***     o o o o         ##       #",
  "#        ##  o      ##   £    ## ***    ###          #####",
  "##                   £ £ £ £ £  oo oo oo oo oo       ## ##",
  "##########################################################"];

function Vector(x, y) {
    this.x = x;
    this.y = y;
};

Vector.prototype.plus = function(vec2) {
    return new Vector(this.x + vec2.x, this.y + vec2.y);
};

function Grid(width, height) {
  this.space = new Array(width * height);
  this.width = width;
  this.height = height;
};

Grid.prototype.isInside = function(vector) {
  return vector.x >= 0 && vector.x < this.width && vector.y >= 0 && vector.y < this.height;
};

Grid.prototype.get = function(vector) {
  return this.space[vector.x * this.width + vector.y];
}

Grid.prototype.set = function(vector, value) {
  this.space[vector.x * this.width + vector.y] = value;
}

var directions = {
  "n": new Vector(0, 1),
  "ne": new Vector(1,1),
  "e": new Vector(1, 0),
  "se": new Vector(1, -1),
  "s": new Vector(0, -1),
  "sw": new Vector(-1, -1),
  "w": new Vector(-1, 0),
  "nw": new Vector(-1, 1)
};

var directionNames = "n ne e se s sw w nw".split(" ");

function randomElement(array) {
  var rand = Math.floor(Math.random() * array.length);
  return array[rand];
};

function PlantEater() {
  this.energy = 3 * Math.ceil(Math.random() * 5);
}

function Predator() {
  this.energy = (5 * Math.ceil(Math.random() * 5));
};

PlantEater.prototype.act = function(view) {
  var space = view.find(" ")
  if (this.energy > 20 && space)
      return {type:"reproduce", direction: space};
  var plant = view.find("*")
  if(plant)
    return {type:"eat", direction: plant};
  if(space)
    return {type: "move", direction: space};
};

Predator.prototype.act = function(view) {
  var space = view.find(" ")
  if(this.energy > 15 && space)
    return {type:"birth", direction: space};
  var prey = view.find("o")
  if(prey)
    return {type:"kill", direction: prey};
  if(space)
    return {type: "hunt", direction: space};
};

function elementFromChar(legend, ch) {
  if (ch == " ")
    return null;
  var element = new legend[ch]();
  element.originChar = ch;
  return element;
}

function World(layOut, legend) {
  var grid = new Grid(layOut[0].length, layOut.length);
  this.grid = grid;
  this.legend = legend;

  layOut.forEach(function(line, y) {
    for(var x = 0; x < line.length; x++){
      grid.set(new Vector(x, y), elementFromChar(legend, line[x]));
    }
  });
};

function charFromEle(ch) {
  if (ch == null)
    return " ";
  else
    return ch.originChar;
}

World.prototype.toView = function() {
  var output = "";
  for (var y = 0; y < this.grid.height; y++) {
    for (var x = 0; x < this.grid.width; x++) {
      var element = this.grid.get(new Vector(x, y));
      output += charFromEle(element);
      }
      output += "\n";
  }
  return output;
};


function Wall() {};

Grid.prototype.forEach = function (p, context) {
  for (var y = 0; y < this.height; y++){
    for (var x = 0; x < this.width; x++) {
      var value = this.space[x * this.width + y];
      if (value != null)
        p.call(context, value, new Vector(x, y))
    }
  }
};

/*
i modified my turn interface, by:
->if it is a predator, it does the action handlers for the predators
-if it is a plantEater or plant it does the action handlers for the plant.
*/

World.prototype.turn = function() {
  var acted = [];
  var kill = [];
  this.grid.forEach(function(pretor, vector) {
    var iden = charFromEle(this.grid.get(vector))
    if(iden == "£"){
      if (pretor.act && kill.indexOf(pretor) == -1) {
        kill.push(pretor);
        this.letChase(pretor, vector);
      }
    }
    if (iden == "o" || "*"){
      if (pretor.act && acted.indexOf(pretor) == -1){
        acted.push(pretor)
        this.letAct(pretor, vector);
      }
    }
  }, this)
};

var actionTypes = Object.create(null);
var actionHunt = Object.create(null);

World.prototype.letAct = function(plantEatr, vector) {
  var action = plantEatr.act(new View(this, vector));
  var handled = action && action.type in actionTypes && actionTypes[action.type].call(this, plantEatr, vector, action);
    if(!handled){
      plantEatr.energy -= 1;
      if(plantEatr.energy <= 0)
        this.grid.set(vector, null)
    }
};

//ACTION HANDLERS FOR PLANTS
/*
In the action handlers for the plants, there are two frameworks for reproduction
->One for plants (propergate)
->One for PlantEaters (reproduce)
*/

/*
I also modified my frame work for grow, to have different growth rates depending on the pop of the plants.
 */
actionTypes.grow = function(plantEatr) {
  var pop = this.popCheck()
  if(pop[2] <= 5){
    plantEatr.energy += 30;
  }
  else if(pop[2] < 10){
    plantEatr.energy += 20;
  }
  else if(pop[2] < 20){
    plantEatr.energy += 10;
  }
  else if (pop[2] > pop[3] * 5) {
    plantEatr.energy += 0.5;
  }
  else if (pop[5] < 60) { //if the available space is less 60 the growth rate of plants is greatly reduced.
    plantEatr.energy += 0.0001;
  }
  else{
    plantEatr.energy += 5;
  }
  
  return true;
}

/* 
Here I used my popCheck method 
->If the pop of the PlantEaters is > 6 times the width of the world, it should not reproduce.
->else it reproduce with different growth rates dpending on the pop.
*/

actionTypes.reproduce = function (plantEatr, vector, action) {
  var baby = elementFromChar(this.legend, plantEatr.originChar);
  var dest = this.checkDest(action, vector);
  var pop = this.popCheck();
  if ((pop[0] >= (pop[3] * 6)) || dest == null || plantEatr.energy <= 2 * baby.energy || this.grid.get(dest) != null)
    return false;
  else if(pop[0] <= 10){
    plantEatr.energy -= 0.2 * baby.energy;
    this.grid.set(dest, baby);
    return true;
  }
  else if(pop[0] <= 30){
    plantEatr.energy -= 0.75 * baby.energy;
    this.grid.set(dest, baby);
    return true;
  }
  else{
    plantEatr.energy -= 2 * baby.energy;
    this.grid.set(dest, baby);
    return true;
  }
 
};

/*
I modified the way my planEaters eat
-> if the population of the plantEaters is less than a quater of the plants, it eats all the it comes in contact with.
-> if the pop of the plantEaters is < twice the width of the wall, it eats all the plants it comes in contact with.
->else, the plantEater eats a third of the energy of the plant.
*/

actionTypes.eat = function (plantEatr, vector, action) {
    var dest = this.checkDest(action, vector);
    var atDest = dest != null && this.grid.get(dest);
    var pop = this.popCheck();
  if (!atDest || atDest.energy == null)
    return false;
  else {
    if(charFromEle(this.grid.get(dest)) == "*"){
      if ((pop[0] <= (pop[3] * 2) && atDest && atDest.energy != null || pop[0]) < (pop[2] / 4)) {
        plantEatr.energy += atDest.energy;
        this.grid.set(dest, null);
        this.grid.set(vector, plantEatr);
        return true;
      }
      else {
        if (atDest && atDest.energy) {
          plantEatr.energy += atDest.energy / 3;
          this.grid.set(vector, plantEatr);
          return true;
        }
      }
    } 
  }
}


actionTypes.move = function(plantEatr, vector, action) {
    var dest = this.checkDest(action, vector);
    if (dest == null || plantEatr.energy <= 1 || this.grid.get(dest) != null)
      return false;
    plantEatr.energy -= 1;
    this.grid.set(vector, null);
    this.grid.set(dest, plantEatr);
    return true;
};

actionTypes.propergate = function (plantEatr, vector, action) {
  var baby = elementFromChar(this.legend, plantEatr.originChar);
  var dest = this.checkDest(action, vector);
  if (dest == null || plantEatr.energy <= 0.5 * baby.energy || this.grid.get(dest) != null)
    return false;
  plantEatr.energy -= 0.5 * baby.energy;
  this.grid.set(dest, baby);
  return true;
};


World.prototype.letChase = function(preDator, vector) {
  var action = preDator.act(new View(this, vector));
  var handled = action && action.type in actionHunt && actionHunt[action.type].call(this, preDator, vector, action);
    if(!handled){
      preDator.energy -= 0.2;
      if(preDator.energy <= 0)
        this.grid.set(vector, null)
    }
};

//ACTION HANDLERS FOR THE PREDATORS

actionHunt.birth = function (preDator, vector, action) {
    var baby = elementFromChar(this.legend, preDator.originChar);
    var dest = this.checkDest(action, vector);
    var pop = this.popCheck();
    if (dest == null || preDator.energy <= 1 * baby.energy || this.grid.get(dest) != null)
      return false;
    else if(pop[1] <= 5){
      preDator.energy -= 0.1 * baby.energy;
      this.grid.set(dest, baby);
      return true;
    }
    else if(pop[1] <= 15){
      preDator.energy -= 0.5 * baby.energy;
      this.grid.set(dest, baby);
      return true;
    }
    else{
      preDator.energy -= 0.5 * baby.energy;
      this.grid.set(dest, baby);
      return true;
    }
};

/*
I modified the way my predators eat
-> if the population of the  predators is less than half of the planteaters, it eats all the planteaters it comes in contact with.
-> if the pop of the  predators is < the width of the wall, it eats all the planteaters it comes in contact with.
->else, the pradator eats half of the energy of the planteater to keep it for the next meal.
*/

actionHunt.kill = function (preDator, vector, action) {
  var dest = this.checkDest(action, vector);
  var atDest = dest != null && this.grid.get(dest);
  var pop = this.popCheck();
  if (!atDest || atDest.energy == null)
    return false;
  else {
    if (charFromEle(this.grid.get(dest)) == "o") {
      if (pop[1] < (pop[0] / 2)) {
        preDator.energy += atDest.energy;
        this.grid.set(dest, null);
        this.grid.set(vector, plantEatr);
        return true;
      }
      else {
        if (atDest && atDest.energy) {
          preDator.energy += atDest.energy / 2;
          this.grid.set(vector, preDator);
          return true;
        }
      }
    }
  }
}

actionHunt.hunt = function(preDator, vector, action) {
    var dest = this.checkDest(action, vector);
    if (dest == null || preDator.energy <= 2 || this.grid.get(dest) != null)
        return false;
    preDator.energy -= 0.5;
    this.grid.set(vector, null);
    this.grid.set(dest, preDator);
    return true;
};

World.prototype.checkDest = function(action, vector) {
  if(directions.hasOwnProperty(action.direction)){
    var dest = vector.plus(directions[action.direction]);
    if (this.grid.isInside(dest))
      return dest;
  }
}

//Here is my code to check the pop of the world, predators, plants and plantEaters

World.prototype.popCheck = function() {
  var preDator,plantEatr, plants, space;
  preDator = plantEatr = plants = space = 0;
  for (var y = 0; y < this.grid.height; y++) {
    for (var x = 0; x < this.grid.width; x++) {
      if(charFromEle(this.grid.get(new Vector(x, y))) == "o"){
        plantEatr += 1;
      }
      else if (charFromEle(this.grid.get(new Vector(x, y))) == "£") {
        preDator += 1;
      }
      else if (charFromEle(this.grid.get(new Vector(x, y))) == "*") {
        plants += 1;
      }
      else if (charFromEle(this.grid.get(new Vector(x, y))) == " ") {
        space += 1;
      }
    }
  }
  var popLog = [plantEatr, preDator, plants, x, y, space];
  return popLog;
}

function View(world, vector) {
  this.world = world;
  this.vector = vector;
};

View.prototype.look = function (dir) {
  var target = this.vector.plus(directions[dir]);
  if (this.world.grid.isInside(target))
    return charFromEle(this.world.grid.get(target));
  else
    return "#";
};

View.prototype.findAll = function (ch) {
  var found = [];
  for (var dir in directions) {
    if (this.look(dir) == ch) {
      found.push(dir);
    }
  }
  return found;
};
View.prototype.find = function (ch) {
  var found = this.findAll(ch);
  if (found.length == 0) {
    return null;
  }
  return randomElement(found);
};


function dirPlus(dir, n){
  var index = directionNames.indexOf(dir);
  return directionNames[(index + n + 8) % 8];
}

function Plant() {
    this.energy = (3 + (Math.ceil(Math.random() * 4)));
}

Plant.prototype.act = function(view) {
    if (this.energy > 15) {
        var space = view.find(" ");
        if (space)
          return { type:"propergate", direction: space};
    }
    if (this.energy < 20)
        return {type:"grow"};
}

var world = new World(plan, {
    "#": Wall,
    "o": PlantEater,
    "£": Predator,
    "*": Plant
  });

for (var i = 0; i < 400; i++) {
  world.turn();
  console.log(world.toView());
}