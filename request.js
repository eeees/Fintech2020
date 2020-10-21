const request = require('request');
/*request('http://newsapi.org/v2/top-headlines?apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5&country=kr&category=business',
function (error, response, body) {
    var parseData=JSON.parse(body);
    //JSON String으로 되어있는 데이터를 js object로 변환
  console.log(parseData); // Print the HTML for the Naver homepage.
  // console.log(parseData.totalResults);
});*/

//TITLE만 뽑는 코드
//acticle 배열임, 길이를 찾아서 
//work2 Title 목록만 조회하기(for, object select)

request('http://newsapi.org/v2/top-headlines?apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5&country=kr&category=business',
function (error, response, body) {
    var parseData=JSON.parse(body);
    //JSON String으로 되어있는 데이터를 js object로 변환
  console.log(parseData.articles); // Print the HTML for the Naver homepage.

  for(let index=0; index<parseData.articles.length; index++){
      const element=parseData.articles[index];
      console.log(index+1,element.title);
  }
});