let cnt = 0;
function dishName(){
    const dish = document.getElementById('dishName');
    const dishArray = ['치킨','피자','찌개','덮밥','볶음밥','햄버거','샐러드','라면']
    cnt += 1;
    dish.innerHTML = dishArray[cnt-1];
    if (cnt == 5){
        alert('히루 사용 한도를 초과 하였습니다.')
    }
       

   
   
}