
  function searchItems() {
    var input = document.getElementById('search-input');
    var searchText = input.value.toLowerCase();
    var items = document.getElementsByClassName('item');
    var resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    for (var i = 0; i < items.length; i++) {
      var itemText = items[i].textContent.toLowerCase();

      if (itemText.includes(searchText)) {
        var li = document.createElement('li');
        li.textContent = items[i].textContent;
        resultsContainer.appendChild(li);
      }
    }
  }

