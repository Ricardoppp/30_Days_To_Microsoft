//! Estp spreed se hace para concadenar listas de arrays, ya que si se hace de una con la basica '+', no se agrega comas

const frutas = ["Manzana", "Uva", "Melon"];

const citricos = ["Naranja", "Limón", "Toronja"];

const nuevo = [...frutas, ...citricos];

document.write(nuevo)