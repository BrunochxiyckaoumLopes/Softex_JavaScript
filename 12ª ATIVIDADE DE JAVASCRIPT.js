const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', '94562',{
    host: "localhost"
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Conectou de boas")
}).catch(function(erro)){
    console.log("Falhou na conexão :( "+ erro)

})