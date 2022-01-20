const btnBurger = document.querySelector('.btn_burger');
const btnFermer = document.querySelector('.btn_fermer_menu'); 
const menuBurger = document.querySelector('.header_nav_burger');
const liensBurger = document.querySelectorAll('.liens_burger');
const btnDropdownDown = document.querySelectorAll('.btn_dropdown_down');
const menuDeroulant = document.querySelectorAll('.dropdown_deroulant');
const btnOuvrirDropdown = document.querySelectorAll('.btn_ouvrir_dropdown');
let menuOuvert = [false, false, false, false]; 

function ouvrirMenu() {
	menuBurger.style.display = 'flex';
};

function fermerMenu() {
	menuBurger.style.display = 'none';
};

btnBurger.addEventListener('click', ouvrirMenu);

btnFermer.addEventListener('click', fermerMenu);

window.addEventListener('resize', fermerMenu);

liensBurger.forEach(element => {
	element.addEventListener('click', fermerMenu);
});

for(let index = 0; index < btnOuvrirDropdown.length; index++) {

	btnOuvrirDropdown[index].addEventListener('click', function() {
		if(menuOuvert[index] == false){
			menuDeroulant[index].style.display = 'block';
			menuOuvert[index] = true;
		} else {
			menuDeroulant[index].style.display = 'none';
			btnDropdownDown[index].style.display = 'block';
			menuOuvert[index] = false;
		}
	})
}