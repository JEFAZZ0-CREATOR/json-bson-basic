use(`mi_base_de_datos_jarr`);

db.usuarios.insertOne({
    noombre:"Carlos Santana",
    edad:67,
    email:"carlos@gmail.com",
    isActive: false,
    saldo:123321132312.212,
    fechaRegistro: new Date(),
    genero:"Masculino",
    ciudad:"L.A.",
    indiomas:["Español", "Ingles"],
    numerosTelefono:["81 32 36 23 67"]

});