const request = require('request');

request('http://www.weather.go.kr/weather/forecast/mid-term-rss3.jsp?stnld=109',
function (error, response, body) {
    var parseData=JSON.parse(body);
   
  console.log(parseData.articles);

  for(let index=0; index<parseData.articles.length; index++){
      const element=parseData.articles[index];
      console.log(index+1,element.title);
  }
});