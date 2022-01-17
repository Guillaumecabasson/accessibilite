document.write(`
	<div class="menu">
	<img src="./images/esportlogo.png" alt="" class="logo"/>
	<nav  class="topnav" id="myTopnav" role="navigation" aria-label="Menu principal">
	<ul>
		<li><a href="./index.html" id="page1">Accueil</a></li>
		<li><a href="./accessibilite.html" id="page2">Esport et Accessibilité</a></li>
		<li><a href="./initiatives.html" id="page3">Initiatives pour l'accessibilité</a></li>
		<li><a href="./joueurs.html" id="page4">Joueurs Esport</a></li>
		<li><a href="./contact.html" id="page5">Contact</a></li>
		<li><a href="./sources.html" id="page6">Sources</a></li>
	</ul>
	<div>
		<a href="javascript:void(0);" class="icon" onclick="myFunction()" onfocus="focusFirstElement()">
		<i class="fa fa-bars"></i>
		</a>
	</div>
	</nav>
	</div>
`);

//Vérifie sur quelle page on est et lance une fonction pour ajouter la classe "active"
//qui permet d'ajouter une couleur verte sur le titre de l'onglet pour indiquer que l'on est sur cette page
var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
if(sPage == "index.html" || sPage == "plansite.html"){
   page1();
}
else if(sPage  == "accessibilite.html"){
   page2();
}
else if(sPage  == "initiatives.html"){
   page3();
}
else if(sPage  == "joueurs.html"){
   page4();
}
else if(sPage  == "contact.html"){
   page5();
}
else {
   page6();
}

//Fonction lancée lorsque la page est réduite et que l'on clique sur les 3 traits (Hamburger)
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
	var y = document.getElementById("page1");
	y.focus();
  } else {
    x.className = "topnav";
  }
}

function focusFirstElement() {
	var y = document.getElementById("page1");
	y.focus();
}
function page1() {
  var element = document.getElementById("page1");
  element.classList.add("active");
}

function page2() {
  var element = document.getElementById("page2");
  element.classList.add("active");
}
function page3() {
  var element = document.getElementById("page3");
  element.classList.add("active");
}

function page4() {
  var element = document.getElementById("page4");
  element.classList.add("active");
}

function page5() {
  var element = document.getElementById("page5");
  element.classList.add("active");
}

function page6() {
  var element = document.getElementById("page6");
  element.classList.add("active");
}