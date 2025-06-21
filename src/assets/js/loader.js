const page = document.body.dataset.page;

if (page === "home") {
  import('../js/main.js');
} else if (page === "thumbnails") {
  import('../js/thumbnail.js');
} else if (page === "book") {
  import('../js/book.js');
}
