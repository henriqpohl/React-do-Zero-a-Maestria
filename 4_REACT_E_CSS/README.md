## CSS no React
  
### CSS global
- O CSS global é utilizado para estilizar diversos elementos em comum ou fazer um reset no CSS;
- Utilizamos o arquivo index.css para isso;
- Ele está na pasta src;
- Vamos ver na prática!

### CSS de Componente
- O CSS de componente é utilizado para um componente em específico;
- Geralmente é criado um arquivo com o mesmo nome do componente
e este é importado no componente;
- Note que este método não é scoped, ou seja, o CSS vaza para outros
componentes se houver uma regra em colisão;
- O React já cria um exemplo desta técnica com o App.css/js;
- Vamos ver na prática!

### Inline style
- O inline style do React é igual o do CSS;
- Por meio do atributo style conseguimos aplicar regras diretamente em
um elemento;
- Devemos optar por outras maneiras de CSS, o inline pode dificultar a
manutenção ou deixar o código imprevisível em algumas situações;
- Vamos ver na prática!

### Inline style Dinâmico
- O CSS dinâmico inline aplica estilo baseado em uma condicional;
- Vamos inserir no atributo um if ternário;
- Dependendo da condição podemos mudar que regras de estilo um
elemento recebe;
- Vamos ver na prática!

### Classes dinâmicas no CSS
- Podemos também aplicar lógica para mudar a classe de CSS de um elemento;
- Também utilizaremos o if ternário;
- Essa abordagem é mais interessante que o CSS inline;
- Pois as classes estarão isoladas no arquivo de CSS, resolvendo o
problema de organização de código;
- Vamos ver na prática!

### CSS Modules
- O CSS Modules é um recurso de CSS scoped;
- Ou seja, ele vai ser exclusivo do componente;
- O nome do arquivo é: Componente.module.css;
- Precisamos importá-lo também no componente;
- Vamos ver na prática!

### Desafio 5
1. Crie um novo projeto chamado challengecss;
2. No CSS global zere a margin, padding e coloque uma fonte que você
goste;
3. Crie um componente que exibe detalhes de carros, este componente deve
ser estilizado com scoped;
4. Exiba pelo menos 3 carros;
5. Coloque um título em App.js para o seu projeto, estilize com o App.css;