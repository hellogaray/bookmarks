const page = document.body.dataset.page;

if (page === "home") {
  import('../js/main.js');
  import('../js/thumbnail.js');
  import('../js/theme-switch.js');
} else if (page === "book") {
  import('../js/book.js');
  import('../js/theme-switch.js');

}
