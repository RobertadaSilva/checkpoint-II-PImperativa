const { estudantes } = require('./estudantes.js')

Aluno = require('./aluno.js').Aluno
Estudantes = require('./estudantes.js').estudantes
Curso = require('./curso.js').Curso

let cursoJavascript = new Curso('Introdução Javascript', 8, 5, Estudantes)

cursoJavascript.addAluno(new Aluno('Rodrigo', 10, [3,5,2]))

console.log(estudantes);
console.log(cursoJavascript.alunosAprovados())