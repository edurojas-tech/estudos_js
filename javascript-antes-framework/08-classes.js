class Musica {
    constructor(titulo, artista, url){
        this.titulo = titulo,
        this.artista = artista,
        this.url = url
    }

    tocarMusica(){
        const informacao = `
            Musica: ${this.titulo}
            Artista: ${this.artista}
            Link-play: ${this.url}
        `
        console.log(informacao)
    }
}

//  =================================================================================================

class MusicaEstilos extends Musica {
    constructor(titulo, artista, url, estilo){
        super(titulo, artista, url)
        this.estilo = estilo
    }

    tocarMusica(){
        const informacao = `
            Musica: ${this.titulo}
            Artista: ${this.artista}
            Link-play: ${this.url}
            Estilo: ${this.estilo}
        `
        console.log(informacao)
    }
}

function callMusicas(){
    const musica1 = new Musica("LoFi", "Todas Lofi Music", "https://youtu.be/e97w-GHsRMY")
    const musica2 = new Musica("Chill VHS Radio", "Lofi Hip Hop", "https://www.youtube.com/watch?v=3WBPGAzCcng")
    const musica3 = new MusicaEstilos("Burguesinha", "Seu Jorge", "https://www.youtube.com/watch?v=REUXbGaEl94", "Brasileira")
    const musica4 = new MusicaEstilos("Produtividade musical - para criadores, programadores, designers", "Music Lab", "https://www.youtube.com/watch?v=C4MpzSMkinw", "Tech")

    console.log('=== Listas de musicas ===')
    musica1.tocarMusica()
    musica2.tocarMusica()
    musica3.tocarMusica()
    musica4.tocarMusica()
}
callMusicas()


class Professor {
    constructor(nome, idade, sexo, disciplina){
        this.nome = nome,
        this.idade = idade,
        this.sexo = sexo,
        this.disciplina = disciplina
    }
    showInfo(){
        const informacao = `
            ==== Aluno(a) === \n
            Nome: ${this.nome}
            Idade: ${this.idade}
            sexo: ${this.sexo}
            Disciplina: ${this.disciplina}
        `
        console.log(informacao)
    }
   
}

class Aluno extends Professor {
    constructor(nome, idade, sexo, curso){
        super(nome, idade, sexo)
        this.curso = curso
        // this.disciplina = null

    }

    showInfo(){
        const informacao = `
            ==== Aluno(a) === \n
            Nome: ${this.nome}
            Idade: ${this.idade}
            sexo: ${this.sexo}
            Curso: ${this.curso}
        `
        console.log(informacao)
    }
}

function callUsersAcademico(){
    const profeJoao = new Professor("João Silva", 58, "M", "Matemáticas")
    const profeJulia = new Professor("Julia Miranda Dantas", 37, "F", "Biologia")
    const alunRafael = new Aluno("Rafael Rodrigues", 18, "M", "Sistema da Informação")
    const alunJessica = new Aluno("Jéssica Scarlett", 30, "F", "Administração")

    console.log(profeJoao)
    console.log(profeJulia)
    console.log(alunRafael)
    console.log(alunJessica)
}

callUsersAcademico()