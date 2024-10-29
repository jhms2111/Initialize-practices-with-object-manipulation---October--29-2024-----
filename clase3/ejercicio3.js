const usuario = new Map();

usuario.set('nome','Joao');
usuario.set('idade','25');

let nomeUsuario = usuario.get('nome')

let temIdade = usuario.has('idade')

usuario.delete('idade')


console.log(usuario)
console.log(nomeUsuario)
console.log(temIdade)