// readmore

function res() {
    if (x.matches) {
        btnAmt.style.display = "column"
    } else {
        btnAmt.style.display = "row"
    }
}

var x = window.matchMedia("(max-width: 600px)")

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    var btnAmt = document.getElementById("readmore")

    if(dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Readmore";
        moreText.style.display = "none";
        btnAmt.style.flexDirection = "row"
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Readless ";
        moreText.style.display = "inline";
        btnAmt.style.flexDirection = "column"
    }
}

(function () {
    var words = [
        "Driving learning excellence with expertise!", "Fuel learning and growth the smart way!"
    ], 
    i =0;
    setInterval(function(){
        $('#words').fadeOut(function() {
            $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
        });
        
    }, 3000);
})();


const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


