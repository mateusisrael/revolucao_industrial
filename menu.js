// Definindo as funções e variáveis
var menu = document.getElementById("menu_icon");
var container = document.getElementById("cont_menu");

function menuClicado() {
	console.log("Menu CLICADO");

	var menu_aberto = document.createElement("div");
	container.appendChild(menu_aberto);
	// Observação IMPORTANTE:
	// 	cada click cria uma nova div. se clicarmos
	//  mil vzs no menu serão criadas mil divs.
	// 	preciso definir um limite.
	// Estilizando a div criada na função
	menu_aberto.style = "position: fixed; width: 190%; height: 200%; background-color: #3E2723;";
}


// Quando Clicar-mos no MENU
menu.addEventListener('click', menuClicado);


