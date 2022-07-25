import articleJSON from "../modules/allArticles.js";
import renderNewArticles from "../modules/threeArticle.js";

const editArticleBtn = document.getElementById("editArticleBtn");
const readArticleContent = document.getElementById("readArticleContent");
const articleNewArticles = document.getElementById("articleNewArticles");

const articleLastFreeArticles = articleJSON.slice(-3);

const id = parseInt(location.search.substring(4));

function viewReadArticle(items, id) {
  const itemIndex = items.findIndex((el) => {
    if (el.id == id) {
      return true;
    }
  });

  readArticleContent.innerHTML = marked.parse(items[itemIndex].content);
}

editArticleBtn.addEventListener("click", (e) => {
  location.replace(`new.html?id=${id}`);
});

viewReadArticle(articleJSON, id);

articleLastFreeArticles.forEach((el) => {
  renderNewArticles(el, articleNewArticles);
});
