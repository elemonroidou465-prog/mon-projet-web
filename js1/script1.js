let produits = [];
let produitAModifier = null;

const formulaire = document.getElementById("formulaireProduit");
const listeProduits = document.getElementById("listeProduits");
const boutonAjouter = document.getElementById("boutonAjouter");

formulaire.addEventListener("submit", function (evenement) {
	evenement.preventDefault();
	ajouterProduit();
});

function ajouterProduit() {
	const nom = document.getElementById("nomProduit").value.trim();
	const categorie = document.getElementById("categorie").value.trim();
	const prix = Number(document.getElementById("prix").value);
	const quantite = Number(document.getElementById("quantite").value);

	if (nom === "" || categorie === "" || document.getElementById("prix").value === "" || document.getElementById("quantite").value === "") {
		alert("Veuillez remplir tous les champs.");
		return;
	}

	if (prix < 0 || quantite < 0 || !Number.isInteger(quantite)) {
		alert("Le prix et la quantité doivent être des nombres positifs. La quantité doit être entière.");
		return;
	}

	const produit = {
		nom: nom,
		categorie: categorie,
		prix: prix,
		quantite: quantite
	};

	if (produitAModifier === null) {
		produits.push(produit);
	} else {
		produitAModifier.nom = produit.nom;
		produitAModifier.categorie = produit.categorie;
		produitAModifier.prix = produit.prix;
		produitAModifier.quantite = produit.quantite;
		produitAModifier = null;
		boutonAjouter.textContent = "Ajouter le produit";
	}

	formulaire.reset();
	afficherProduits();
}

function afficherProduits() {
	listeProduits.textContent = "";

	produits.forEach(function (produit, index) {
		const ligne = document.createElement("tr");
		const celluleNumero = document.createElement("td");
		const celluleNom = document.createElement("td");
		const celluleCategorie = document.createElement("td");
		const cellulePrix = document.createElement("td");
		const celluleQuantite = document.createElement("td");
		const celluleActions = document.createElement("td");
		const boutonModifier = document.createElement("button");
		const boutonSupprimer = document.createElement("button");

		celluleNumero.textContent = index + 1;
		celluleNom.textContent = produit.nom;
		celluleCategorie.textContent = produit.categorie;
		cellulePrix.textContent = produit.prix + " FCFA";;
		celluleQuantite.textContent = produit.quantite;

		boutonModifier.type = "button";
		boutonModifier.textContent = "Modifier";
		boutonModifier.addEventListener("click", function () {
			modifierProduit(index);
		});

		boutonSupprimer.type = "button";
		boutonSupprimer.textContent = "Supprimer";
		boutonSupprimer.addEventListener("click", function () {
			supprimerProduit(index);
		});

		celluleActions.appendChild(boutonModifier);
		celluleActions.appendChild(boutonSupprimer);
		ligne.appendChild(celluleNumero);
		ligne.appendChild(celluleNom);
		ligne.appendChild(celluleCategorie);
		ligne.appendChild(cellulePrix);
		ligne.appendChild(celluleQuantite);
		ligne.appendChild(celluleActions);
		listeProduits.appendChild(ligne);
	});
}

function modifierProduit(index) {
	const produit = produits[index];

	document.getElementById("nomProduit").value = produit.nom;
	document.getElementById("categorie").value = produit.categorie;
	document.getElementById("prix").value = produit.prix;
	document.getElementById("quantite").value = produit.quantite;

	produitAModifier = produit;
	boutonAjouter.textContent = "Enregistrer la modification";
	document.getElementById("nomProduit").focus();
}

function supprimerProduit(index) {
	if (confirm("Voulez-vous vraiment supprimer ce produit ?")) {
		produits.splice(index, 1);
		afficherProduits();
	}
}

