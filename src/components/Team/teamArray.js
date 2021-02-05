function generarId(length) {
    let id = '';
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let caracteresLength = caracteres.length;
    for (let i = 0; i < length; i++) {
        id += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
    }
    return id;
}

const teamArray = [
    {
        "name": "Belen Carri",
        "role": "Engineer Manager",
        "deuda": {
            "amount": 0,
            "date": new Date().toLocaleDateString()
        },
        "id": generarId(20),
        "image": "",
        "colour": "pink"
    },
    {
        "name": "Mario Thomas",
        "role": "Tech Leader",
        "deuda": {
            "amount": 0,
            "date": Date.now()
        },
        "id": generarId(20),
        "image": "",
        "colour": "red"
    },
    {
        "name": "Facundo Ramallo",
        "role": "BackEnd Developer",
        "deuda": {
            "amount": 0,
            "date": new Date().toLocaleDateString()
        },
        "id": generarId(20),
        "image": "",
        "colour": "blue"
    }
    ,
    {
        "name": "Natalia Maison",
        "role": "BackEnd Developer",
        "deuda": {
            "amount": 0,
            "date": new Date().toLocaleDateString()
        },
        "id": generarId(20),
        "image": "",
        "colour": "purple"
    },
    {
        "name": "Martín Altamirano",
        "role": "BackEnd Developer",
        "deuda": {
            "amount": 0,
            "date": new Date().toLocaleDateString()
        },
        "id": generarId(20),
        "image": "",
        "colour": "yellow"
    },
    {
        "name": "Pablo Agüero",
        "role": "BackEnd Developer",
        "deuda": {
            "amount": 0,
            "date": new Date().toLocaleDateString()
        },
        "id": generarId(20),
        "image": "",
        "colour": "orange"
    },
    {
        "name": "Camila Bernales",
        "role": "FrontEnd Developer",
        "deuda": {
            "amount": 0,
            "date": new Date().toLocaleDateString()
        },
        "id": generarId(20),
        "image": "",
        "colour": "green"
    }
]


export { teamArray }