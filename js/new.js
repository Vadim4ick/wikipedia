import articleJSON from "../modules/allArticles.js";

const markDownContainer = document.getElementById("markDownContainer");
const markDownView = document.getElementById("markDownView");
const markDownTitle = document.getElementById("markDownTitle");
const saveArticle = document.getElementById("saveArticle");

const id = parseInt(location.search.substring(4));

const itemIndex = articleJSON.findIndex((el) => {
  if (el.id == id) {
    return true;
  }
});

if (id) {
  markDownView.innerHTML = marked.parse(articleJSON[itemIndex].content);
  markDownContainer.value = articleJSON[itemIndex].content;
  markDownTitle.value = articleJSON[itemIndex].title;
}

markDownContainer.addEventListener("keyup", (e) => {
  markDownView.innerHTML = marked.parse(markDownContainer.value);
});

saveArticle.addEventListener("click", (e) => {
  if (id) {
    articleJSON[itemIndex].title = markDownTitle.value;
    articleJSON[itemIndex].content = markDownContainer.value;

    location.replace(`article.html?id=${id}`);
  } else {
    const newItem = {
      id: 0,
      title: markDownTitle.value,
      content: markDownContainer.value,
    };

    newItem.id = articleJSON.length + 1;

    articleJSON.push(newItem);

    location.replace(
      `article.html?id=${articleJSON[articleJSON.length - 1].id}`
    );
  }

  localStorage.setItem("article", JSON.stringify(articleJSON));
});
