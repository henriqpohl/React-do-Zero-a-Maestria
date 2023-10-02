## Requisições HTTP e React

### JSON server
- O JSON server é um pacote npm;
- Ele simula uma API, e isso nos possibilita fazer requisições HTTP;
- Vamos aprender a integrar este recurso com o React;
- Podemos entender isso como uma etapa de preparação para APIs reais;
- Ou seja, atingir o mesmo resultado mas sem precisar de uma estrutura no
back-end;
- Vamos criar um projeto e instalar o JSON server;

### A importância do useEffect
- O useEffect faz com que determinada ação seja executada apenas uma vez;
- Isso é interessante pois os componentes estão sempre se re-renderizando, então precisamos ter ações únicas às vezes;
- O useEffect ainda possui um array de dependências, que deve conter os dados que ativem a execução da função de forma automática;
- O useEffect estará presente sempre nas requisições assíncronas!

### Resgatando dados com React
- Para trazer os dados vamos ter que utilizar vários recursos;
- Primeiramente ter um local para salvá-los (useState);
- Renderizar a chamada a API apenas uma vez (useEffect);
- Um meio de fazer a requisição assíncrona (Fetch API);
- Vamos ver isto na prática!

### Adicionando dados
- Para adicionar um item vamos precisar resgatar os dados do form com o useState;
- Reunir eles em uma função após o submit e enviar um request de POST para a nossa API;
- O processo é bem parecido com o de resgate de dados, mas agora estamos enviando dados;
- Vamos ver isto na prática!

### Carregamento dinâmico de dados
- Se a requisição foi feita com sucesso, podemos adicionar o item a lista após o request;
- Isso torna nossa aplicação mais performática;
- Utilizaremos o set do useState para isso;
- Vamos ver isto na prática!

### Custom hook para o fetch
- É normal dividir funções que podem ser reaproveitadas em hooks;
- Esta técnica é chamada de custom hook, e vamos criar um para o
resgate de dados;
- Os hooks geralmente ficam na pasta hooks;
- Devemos utilizar o padrão useName;
- Basicamente criamos uma função e exportamos ela;
- Vamos ver isto na prática!

### Refatorando o POST
- Podemos utilizar o mesmo hook para incluir uma etapa de POST;
- Vamos criar um novo useEffect que mapeia uma outra mudança de
estado;
- Após ela ocorrer executamos a adição de produto;
- Obs: nem sempre reutilizar um hook é a melhor estratégia;
- Vamos ver isto na prática!

### Estado de loading
- Quando fizermos requisições para APIs é normal que haja um intervalo de loading entre a requisição e o recebimento da resposta;
- Podemos fazer isso no nosso hook também;
- Identificar quando começa e termina este estado;
- Vamos ver isto na prática!

### Estado de loading no POST
- Podemos bloquear ações indevidas em outras requests também, como no POST;
- Uma ação interessante é remover a ação de adicionar outro item enquanto o request ainda não finalizou;
- Vamos ver isto na prática!

### Tratando erros
- Podemos tratar os erros das requisições por meio de um try catch;
- Além de pegar os dados do erro, também podemos alterar um state para
imprimir um elemento se algo der errado;
- Desta maneira conseguimos prever vários cenários (dados resgatados,
carregamento e erro);
- Vamos ver isto na prática!

### Desafio 6
1. Crie um botão nos produtos;
2. Este botão deve disparar uma função de remoção de produto;
3. A URL deve ser a mesma da API + o id do produto: products/1
4. Você vai precisar identificar quando é uma requisição de DELETE, para
mudar o verbo a http das configurações;
5. Utilize a ideia do método de POST para derivar para o DELETE, pode ser
com if/else;