let filiere = "Informatique";
localStorage.setItem("filiereEtudiant", filiere);
let nom = "ELEMON";
let prenom = "Roïdou Aladé";
let niveau = "Licence 2";
localStorage.setItem("nomEtudiant", nom);
localStorage.setItem("prenomEtudiant", prenom);
localStorage.setItem("niveauEtudiant", niveau);
let preno = localStorage.getItem("nomEtudiant");
if (preno !== null) {
    console.log("Nom trouvé :" + nom)
} else {
    console.log("Aucun nom trouvé")
}
let etudiants = [
{ id: 1, nom: "Koffi", prenom: "Amina" },
{ id: 2, nom: "Mensah", prenom: "Paul" }
];
/*
console.log(etudiants)
 
let etudiant = JSON.stringify(etudiants);
console.log(etudiant);
localStorage.setItem("etudiants", etudiant);
let texte = localStorage.getItem(etudiant);
let liste = JSON.parse(texte);
for(let i = 0; i < 0; i++) {
    console.log(liste[i])
}
    */
function sauvegarderEtudiant(){
    localStorage.setItem("etudiants", etudiants);
    let etudiant = JSON.stringify(etudiants);
    console.log(etudiant);
}
sauvegarderEtudiant();