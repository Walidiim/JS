
document.addEventListener("DOMContentLoaded", function () {

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


  var tabs = document.querySelectorAll('.tabs .tab');
  var contents = document.querySelectorAll('.content');

  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () {
     
      tabs.forEach(function (t) {
        t.classList.remove('tab-active');
      });

      this.classList.add('tab-active');

      contents.forEach(function (content) {
        content.classList.remove('active');
      });
      contents[index].classList.add('active');
    });
  });

 
  window.submitForm = function () {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var classRadio = document.querySelector('input[name="class"]:checked');
    var favoriteAxis = document.getElementById('favoriteAxis').value;

    // Validation de l'adresse e-mail
    if (!validateEmail(email)) {
      alert('Veuillez entrer une adresse e-mail valide se terminant par "@gmail.com".');
      return;
    }

    // Vérification des champs obligatoires
    if (firstName && lastName && email && classRadio && favoriteAxis) {
      
      alert('Formulaire soumis avec succès!');
    } else {
      // Afficher un message d'erreur
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  };

  // Fonction pour soumettre le formulaire de contact
  window.submitContactForm = function () {
    var contactName = document.getElementById('contactName').value;
    var contactEmail = document.getElementById('contactEmail').value;
    var message = document.getElementById('message').value;

    // Validation de l'adresse e-mail
    if (!validateEmail(contactEmail)) {
      alert('Veuillez entrer une adresse e-mail valide se terminant par "@gmail.com".');
      return;
    }

    // Vérification des champs obligatoires
    if (contactName && contactEmail && message) {
    
      alert('Formulaire de contact soumis avec succès!');
    } else {
      // Afficher un message d'erreur
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  };

  // Fonction pour valider l'adresse e-mail
  function validateEmail(email) {
    var regex = /@gmail\.com$/;
    return regex.test(email);
  }
});
function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

