//Menu ouvrant
let boutonMenu = document.getElementById('btn-menu');
let menuWrapper = document.getElementById('menu-wrapper');

boutonMenu.addEventListener('click', function () {
    menuWrapper.classList.toggle('opened');
});

// -----------------------------------Tout noir--------------------------------------
function toutNoir() {
    let divNoir = document.getElementsByClassName('none');

    // Supprimer la classe 'none' de tous les éléments avec la classe 'none'
    for (let i = 0; i < divNoir.length; i++) {
        divNoir[i].classList.remove('none');
    }
}

//---------------------------fermer le tout noir -------------------------------------

function fermer() {
    let divNoir = document.getElementsByClassName('toutnoir');

    // Ajouter la classe 'none' de tous les éléments avec la classe 'none'
    for (let i = 0; i < divNoir.length; i++) {
        divNoir[i].classList.add('none');
    }


}

let divFermer = document.getElementById('fermer');
divFermer.addEventListener('click', function () {
    fermer();
})

//------------------------------------TEST formulaire------------------------------------

function tester() {
    let formNom = document.getElementById('nom');
    let errorNom = document.getElementById('errorNom');
    errorNom.innerHTML = '';

    let email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');
    errorEmail.innerHTML = '';

    let textArea = document.getElementById('textArea');
    let errorTextArea = document.getElementById('errorTextArea');
    errorTextArea.innerHTML = '';

    if (formNom.value === "" || /[^a-zA-Z-]/.test(formNom.value)) {
        errorNom.innerText = "Les lettres anonymes c'est mal !";
    }


    if (email.value === "") {
        errorEmail.innerText = 'Et comment on fait pour vous spammer?';
    }

    if (textArea.value === "") {
        errorTextArea.innerText = 'Non mais allô quoi, tu nous écris et tu nous écris rien?';
    }

    if (formNom.value !== "" && !/[^a-zA-Z-]/.test(formNom.value) && email.value !== "" && textArea.value !== "") {
        toutNoir();
        formNom.value = '';
        email.value = '';
        textArea.value = '';
    }
}
