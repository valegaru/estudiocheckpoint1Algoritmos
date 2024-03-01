//RORO
//Recibir un objeto y retornar un objeto
//buenas practicas para pasar objetos, asi debe de verse

const myObject = {
	name: 'Andres',
};

//con esta forma hay que usar la funcion asi tal cual dando las propiedades en orden
const createFolder = (name, archivos, extensions) => {
	console.log(`la carpeta es: ${name}, y tiene los ${archivos} con la extension ${extensions}`);
};

//asi deja ponerlos en cualquier orden porque se le especifica que es cada cosa
createFolder({ archivos: 'holi', extensions: '.js', name: 'DCAFOLDER' });

const myFunction = () => {
	return {
		name: 'andres',
		breakfast: 2,
		lunch: 3,
	};
};

//auqnue la funcion retorne todo puedes elegir que parte quieres que te retorne exactamente, podria poner solo uno de los 3 o incluso 2 si quiero
const { name, breakfast, lunch } = myFunction();
console.log((name, breakfast, lunch));
