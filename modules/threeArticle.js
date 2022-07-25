function renderNewArticles(item, container) {
  const markyp = `
  <li class="articles-list-item">
  <a href="article.html?id=${item.id}}" class="articles-list-link">${item.title}</a>
  </li>
  `;

  container.insertAdjacentHTML("afterbegin", markyp);
}

export default renderNewArticles;
