const Aluno = class {
	constructor(nome, qFaltas, notas) {
		this.nome = nome;
		this.qFaltas = qFaltas;
		this.notas = notas;
	}

	calcularMedia() {
		let sum = 0
		this.notas.forEach(n => sum += n);
		return sum / this.notas.length
	}

	faltas() {
		this.qFaltas++
	}
}

module.exports = {
	Aluno
}