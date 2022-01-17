function verifFormulaire() {
	var nomInput = document.getElementById("nomInput");
	var mailInput = document.getElementById("mailInput");
	var sujetInput = document.getElementById("sujetInput");
	var messageTextarea = document.getElementById("messageTextarea");
	var erreurNom = document.getElementById("erreurNom");
	var erreurMail = document.getElementById("erreurMail");
	var erreurSujet = document.getElementById("erreurSujet");
	var erreurMessage = document.getElementById("erreurMessage");

	(nomInput.value.length <= 0) ? erreurNom.style.visibility = "visible" : erreurNom.style.visibility = "hidden";
	(mailInput.value.length <= 0) ? erreurMail.style.visibility = "visible" :  erreurMail.style.visibility = "hidden";
	(sujetInput.value.length <= 0) ? erreurSujet.style.visibility = "visible" :  erreurSujet.style.visibility = "hidden";
	(messageTextarea.value.length <= 0) ? erreurMessage.style.visibility = "visible" : erreurMessage.style.visibility = "hidden";
}

const form = Array.from(document.getElementsByTagName("form"))[0];
console.log(form);
form.addEventListener("submit", e => { e.preventDefault(); });