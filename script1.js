// fonction pour tester annee 
function demanderAnnee(){
    // afficher: " Saisissez une année : "
    const annee = prompt("Saisissez une année: "); 

    // verifier si l'annee est valide 
    const chiffre = /^[0-9]{1,4}$/; // de 1 a 4 chiffre long
    if(!chiffre.test(annee)){
        alert("Erreur : Veuillez entrer un nombre valide entre 1 et 4 chiffres.");
        return; 
    }

    // verifier si l'annee est bissextile
    const estBissextile = isAnneeBissextile(parseInt(annee, 10));

    // afficher le resultat dans la page HTML
    const resultat = document.getElementById("resultat");
    if (estBissextile) {
        resultat.textContent = `${annee} est une année bissextile.`;
    } else {
        resultat.textContent = `${annee} n'est pas une année bissextile.`;   
    }

}

// fonction pour tester si une année est bissextile
function isAnneeBissextile(annee) {
    // Une année est bissextile si elle est divisible par 4 mais pas par 100,
    // sauf si elle est aussi divisible par 400
    return (annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0);
}

// fonction executee lors de la clique sur le bouton "Envoyer" 
function envoyerFormulaire() {
    // recuperation des valeurs des champs du formulaire
    const civilite = document.getElementById('civilite').value;
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;

    // creer l'objet client avec la methode: presentation
    const client = {
        civilite: civilite,
        nom: nom,
        prenom: prenom,
        email: email,
        telephone: telephone,
        presentation: function () {
            alert(`Bonjour, je suis ${this.civilite} ${this.prenom} ${this.nom}, vous pouvez me contacter sur ${this.email} ou au ${this.telephone}`);
        }
    };

    
    client.presentation();
}
