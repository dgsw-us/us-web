function dishName(){
    const dish = document.getElementById('dishName');
    const dishArray = ['치킨','피자','찌개','덮밥','볶음밥','햄버거','샐러드','라면']
    random = Math.floor(Math.random()  * 8);
    dish.innerHTML = dishArray[random];
}