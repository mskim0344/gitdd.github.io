
$(document).ready(function(){
    let count = 0; // icon 개별인식하는 숫자변수
  
    setInterval(function(){
      count++; // 1초마다 하나씩 증가시켜라
      count %= $(".bi").length; //증가된 count를 4로 나눈 나머지를 다시 count에 저장해라
      $(".bi").removeClass("text-info");
      $(".bi").eq(count).addClass("text-info");
      
  
    }, 1000);
    // 1초마다 주기적으로 실행
    // settimeout(실행함수, 시간)-> 시간이 지나면 한번 실행해라.
  });