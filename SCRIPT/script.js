//menu btn
let mobilemenu = document.querySelector(".mobile")
let menuBtn = document.querySelector(".menuBtn")
let menuBtnDisplay = true;

menuBtn.addEventListener("click",()=>{
    mobilemenu.classList.toggle("hidden")
})

//nav btn
document.getElementById('toggleButton').addEventListener('click', function() {
  var navMenu = document.getElementById('navMenu');
  var toggleButton = document.getElementById('toggleButton');
  
  if (navMenu.style.display === 'none') {
    navMenu.style.display = 'block';
    toggleButton.innerHTML = 'Categorias <i class="fa-solid fa-chevron-up"></i>'; // Change the icon when the menu is displayed
  } else {
    navMenu.style.display = 'none';
    toggleButton.innerHTML = 'Categorias <i class="fa-solid fa-chevron-down"></i>'; // Change the icon when the menu is hidden
  }
});



// ..........................................................................




  function searchNews() {
    var input, filter, cards, card, title, category, i;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    cards = document.getElementsByClassName('card');

    for (i = 0; i < cards.length; i++) {
      card = cards[i];
      title = card.getElementsByTagName('h4')[0];
      category = card.getElementsByTagName('p')[1];
      if (title.textContent.toUpperCase().indexOf(filter) > -1 || category.textContent.toUpperCase().indexOf(filter) > -1) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    }
  }

  function filterByCategory(category) {
    var cards, card, categoryElement, i;
    cards = document.getElementsByClassName('card');
  
    // Remover a classe 'active' de todos os itens do menu
    var menuItems = document.querySelectorAll('#navMenu ul li');
    menuItems.forEach(function(item) {
      item.classList.remove('active');
    });
  
    for (i = 0; i < cards.length; i++) {
      card = cards[i];
      categoryElement = card.getElementsByTagName('p')[1];
      if (category === 'todos' || categoryElement.textContent.toLowerCase().indexOf(category) > -1) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    }
  
    // Adicionar a classe 'active' ao item do menu clicado
    var clickedMenuItem = document.querySelector('#navMenu ul li[data-category="' + category + '"]');
    if (clickedMenuItem) {
      clickedMenuItem.classList.add('active');
    }
  }





