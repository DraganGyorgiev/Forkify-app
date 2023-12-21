class SearchView {
  #parenteElement = document.querySelector('.search');

  getQuery() {
    const query = this.#parenteElement.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }

  #clearInput() {
    this.#parenteElement.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this.#parenteElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
