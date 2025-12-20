fetch('data.json')
  .then(res => res.json())
  .then(data => {
    // Header
    document.querySelector('.masthead').textContent = data.masthead;
    document.querySelector('.issue').textContent = data.issue;
    document.querySelector('.date').textContent = data.date;
    document.querySelector('.weather').textContent = data.weather;

    // Articles
    const articlesBox = document.getElementById('articles');

    data.articles.forEach(a => {
      const article = document.createElement('article');

      let html = `
        <h2 class="headline">${a.title}</h2>
        ${a.subhead ? `<div class="subhead">${a.subhead}</div>` : ''}
      `;

      if (a.image) {
        html += `<img src="${a.image}" class="news-image-container">`;
      }

      a.paragraphs.forEach(p => {
        html += `<p>${p}</p>`;
      });

      article.innerHTML = html;
      articlesBox.appendChild(article);
    });

    // Snippets
    const ul = document.getElementById('snippets');
    data.snippets.forEach(s => {
      const li = document.createElement('li');
      li.textContent = s;
      ul.appendChild(li);
    });
  });
