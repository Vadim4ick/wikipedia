import articleJSON from "../modules/allArticles.js";
import renderNewArticles from "../modules/threeArticle.js";

const allArticle = document.getElementById("allArticle");
const newArticles = document.getElementById("newArticles");
const lastArticle = document.getElementById("lastNewArticle");
const readArticleBtn = document.getElementById("readArticleBtn");

const lastFreeArticles = articleJSON.slice(-3);
const lastNewArticle = articleJSON[articleJSON.length - 1];

function renderAllArticle(item) {
  const markyp = `
  <li class="other-list__item">
    <a class="other-list__link" href="article.html?id=${item.id}}">${item.title}</a>
  </li>
  `;

  allArticle.insertAdjacentHTML("afterbegin", markyp);
}

function renderLastNewArticle(item) {
  lastArticle.innerHTML = marked.parse(item.content.substr(0, 250) + "...");
}

articleJSON.forEach((el) => {
  renderAllArticle(el);
});

lastFreeArticles.forEach((el) => {
  renderNewArticles(el, newArticles);
});

renderLastNewArticle(lastNewArticle);

readArticleBtn.addEventListener("click", (e) => {
  location.replace(`article.html?id=${lastNewArticle.id}`);
});
