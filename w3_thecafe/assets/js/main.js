var menuEat = document.querySelector('.menu-eat');
var menuDrink = document.querySelector('.menu-drink');
var eatList = document.querySelector('.eat');
var drinkList = document.querySelector('.drink');

menuDrink.onclick = function() {
    if(menuEat.classList.contains('menu-on')) {
        menuEat.classList.remove('menu-on');
    }
    if(!menuDrink.classList.contains('menu-on')) {
        menuDrink.classList.add('menu-on');
    }
    if(!eatList.classList.contains('list-food-off')) {
        eatList.classList.add('list-food-off');
    }
    if(drinkList.classList.contains('list-food-off')) {
        drinkList.classList.remove('list-food-off');
    }
}

menuEat.onclick = function() {
    if(menuDrink.classList.contains('menu-on')) {
        menuDrink.classList.remove('menu-on');
    }
    if(!menuEat.classList.contains('menu-on')) {
        menuEat.classList.add('menu-on');
    }
    if(!drinkList.classList.contains('list-food-off')) {
        drinkList.classList.add('list-food-off');
    }
    if(eatList.classList.contains('list-food-off')) {
        eatList.classList.remove('list-food-off');
    }
}