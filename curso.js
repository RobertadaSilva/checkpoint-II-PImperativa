const Curso = class {
	constructor(nome, notaAprovacao, faltasMaximas, estudantes) {
		this.nome = nome;
		this.notaAprovacao = notaAprovacao;
		this.faltasMaximas = faltasMaximas;
		this.estudantes = estudantes;
	}

	addAluno(aluno) {
		this.estudantes.push(aluno)
	}

	estaAprovado(aluno) {
		if(aluno.calcularMedia() >= this.notaAprovacao && aluno.qFaltas < this.faltasMaximas) {
			return true;
		} else if(aluno.qFaltas == this.faltasMaximas && aluno.calcularMedia() >= this.notaAprovacao * 1.1) {
			return true;
		} else {
			return false;
		}
	}

	alunosAprovados() {
		return this.estudantes.map(e => this.estaAprovado(e));
	}
}

module.exports = {
	Curso
}







 
