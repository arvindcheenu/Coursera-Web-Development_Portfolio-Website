Blog.config({
  title: "Portfolio Website",

  rss: {
    title: 'My Portfolio Website',
    description: 'This is an example of a portfolio website'
  }
});
Blog.config({
  adminRole: 'admin',
  blogIndexTemplate: 'BlogIndex',
  blogShowTemplate: 'BlogPost',
  syntaxHighlighting: true, // default is false
  syntaxHighlightingTheme: 'atelier-dune.dark', // default is 'github'

  excerptFunction: function(body) {
   return body.split('.')[0] + '.';
 }
});
