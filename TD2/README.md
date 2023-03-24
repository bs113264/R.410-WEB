# M413 - TD2 : Réponses aux Questions


1) je recupere l'objet par son ID avec la getElemendByID puis j'ajoute l'ecouteur d'evenement avec addEventListener. l'objet en question est la balise h1

2) Si nous utilisons currentTarget au lieu de target dans la fonction select(), cela modifiera l'élément qui a l'écouteur d'évènements (objet document), plutôt que l'élément sur lequel l'utilisateur a cliqué.

Dans notre exemple, cela signifierait que l'élément document changerait de couleur de fond au lieu de l'élément title sur lequel l'utilisateur a cliqué.

3)