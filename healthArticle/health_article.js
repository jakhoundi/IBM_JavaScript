var xhr = new XMLHttpRequest();
var url = './health.json';

xhr.open('GET' , url , true);

/*In this step, you need to inform the XMLHttpRequest object that the expected response from the server should be in JSON format.*/
xhr.responseType = 'json';

/*
You need to define what should happen when the data is successfully loaded using xhr.onload = function() { ... } function.

var articles = xhr.response.articles; to retrieve the articles array from the JSON response.
var articlesDiv = document.getElementById('articles'); to retrieve the HTML element with the ID 'articles' where the fetched content will be displayed.
*/
xhr.onload = function(){
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    /*
Now, you need to iterate health data to fetch on the front page using loops. For this, you need to use the forEach array method as follows:
*/
articles.forEach(function(article) {
    /*Create HTML elements dynamically for example, <div>, <h2>, <p>, <h3>, <ul>, <li> for each article's title, description,ways_to_achieve, and benefits using createElement DOM method as follows:*/
    var articleDiv = document.createElement('div');
    /*Populate these HTML elements with corresponding content from the fetched JSON data as follows:*/
    articleDiv.classList.add('article');

    var title = document.createElement('h2');
    title.textContent = article.title;

    var description = document.createElement('p');
    description.textContent = article.description;

    var waysHeader = document.createElement('h3');
    waysHeader.textContent = 'Ways to Achieve:';

    var waysList = document.createElement('ul');
    article.ways_to_achieve.forEach(function(way) {
      var listItem = document.createElement('li');
      listItem.textContent = way;
      waysList.appendChild(listItem);
    });

    var benefitsHeader = document.createElement('h3');
    benefitsHeader.textContent = 'Benefits:';

    var benefitsList = document.createElement('ul');
    article.benefits.forEach(function(benefit) {
      var listItem = document.createElement('li');
      listItem.textContent = benefit;
      benefitsList.appendChild(listItem);
    });

    /*Attach these elements to the articlesDiv to display each article's details on the webpage as follows:*/
    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitsList);

    articlesDiv.appendChild(articleDiv);
  });
}



  xhr.send();
  





