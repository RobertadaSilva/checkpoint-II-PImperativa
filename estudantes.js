Aluno = require('./aluno.js').Aluno

let estudantes = []
estudantes.push(new Aluno('Kevin', 1, [10,10,10]))
estudantes.push(new Aluno('Roberta', 2, [10,7,10]))
estudantes.push(new Aluno('Daniel', 5, [5,6,8]))

module.exports = {
	estudantes
}

