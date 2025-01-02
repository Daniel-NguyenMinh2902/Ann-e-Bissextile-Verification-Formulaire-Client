# Ann-e-Bissextile-Verification-Formulaire-Client
# Créer un site Web en utilisant HTML, CSS, Bootstrap et Javascript 
Partie 1: 
• Un nouveau projet web avec l’arborescence et les balises de base de 
l’HTML, le code doit être systématiquement commenté
• Au clic sur un bouton, affichez une boîte de dialogue de saisie avec le message 
suivant : " Saisissez une année : "
• A l’aide d’une expression régulière, contrôler que la valeur saisie ne 
contient que des chiffres, fait 1 à 4 chiffres de long et affiche une erreur si ce 
n’est pas le cas
• Le script Javascript testera si l’année saisie par l’utilisateur est une année 
bissextile. Pour cela, vous devez écrire une fonction isAnneeBissextile() qui :
• reçoit en argument l’année à tester et retourne vrai (true) dans le cas où l’année est 
bissextile sinon elle retourne faux (false)
• cela se termine par l’affichage dans la page HTML, sur la même ligne que le bouton, 
du résultat du test :
"yyyy est une année bissextile ou "yyyy n’est pas une année bissextile"

Partie 2: 
• Sur la même page, un formulaire HTML, avec les champs suivant : 
Civilité (select), Nom, Prénom, Email, Téléphone et un bouton « Envoyer »
• Au clic sur le bouton « Envoyer », les informations saisis devront être stocké dans 
un objet « client »
• L’objet « client » contiendra une méthode « presentation » qui affiche dans une 
alert() le texte suivant : « Bonjour, je suis [Civilité] [Prénom] [Nom], vous pouvez 
me contacter sur [Email] ou au [Téléphone] »
• La méthode « presentation » devra être exécutée à la fin de script
