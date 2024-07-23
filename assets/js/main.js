function loadPartial(id, url) {
    fetch(url)
      .then(response => response.text())
      .then(data => document.getElementById(id).innerHTML = data)
      .catch(error => console.error('Error loading partial:', error));
  }
  loadPartial('navbar', 'partials/header.html');
  loadPartial('footer', 'partials/footer.html');
  loadPartial('sidebar', 'partials/sidebar.html');