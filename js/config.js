
var config = {
  elementId: 'cms',
  mode: 'GITHUB',
  github: {
    username: 'aso-takahiro',
    repo: 'cms',
    branch: 'gh-pages',
    host: 'https://api.github.com',
    // prefix: 'templates',
  },
  layoutDirectory: 'layouts',
  errorLayout: 'error',
  defaultView: 'about',
  types: [
    { name: 'posts', layout: { list: 'post-list', single: 'post' }},
    { name: 'pages', layout: { list: 'page-list', single: 'page' }},
    { name: 'works', layout: { list: 'work-list', single: 'work' }},
    { name: 'knowledges', layout: { list: 'kl-list', single: 'kl' }},
  ],
  onload: function() {
    document.getElementById('search').addEventListener('input', function(e) {
      blog.search('posts', 'title', e.target.value);
    });
  },
};

// Initialize CMS.js
var blog = new CMS(config);
