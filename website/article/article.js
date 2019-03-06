// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = "expand";
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", () => this.expandArticle())
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle("article-open");
  }

    static addArticle(obj) {
        const h2 = document.createElement("h2");
        h2.innerText = obj.heading;
        const date = document.createElement("p");
        date.classList.add("date");
        date.innerText = obj.date;
        const p = document.createElement("p");
        p.innerText = obj.paragraph;
        const span = document.createElement("span");
        span.classList.add("expandButton");
        const div = document.createElement("div");
        div.classList.add("article");
        div.append(h2, date, p, span);
        return div;
    }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

const newObj = {heading: "Our new heading", date: "March 6th 2019", paragraph: "Our new paragraph"};
const articleContainer = document.querySelector(".articles");
articleContainer.appendChild(Article.addArticle(newObj));

const articles = document.querySelectorAll(".article");
articles.forEach(function(article) {
    return new Article(article)
});

