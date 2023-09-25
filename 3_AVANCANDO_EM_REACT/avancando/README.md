## Avançando no React

### Desafio 3
1. Crie um projeto para a nova seção;
2. Limpe o arquivo do componente principal;
3. E por fim coloque o título de Seção 3;

### Imagens no React
- As imagens públicas do nosso projeto podem ficar na pasta public;
- De lá elas podem ser chamadas pelas tags img diretamente pelo
/nome.jpg;
- Pois a pasta public fica linkada com o src das imagens;
- Vamos ver na prática!

### Imagens em asset
- A pasta public pode ser utilizada para colocar imagens, como fizemos na aula passada;
- Mas um padrão bem utilizada para as imagens dos projetos é colocar em uma pasta chamada assets, em src;
- Ou seja, você vai encontrar projetos com as duas abordagens;
- Em assets precisamos importar as imagens, e o src é dinâmico com o
nome de importação;

### O que são Hooks?
- Recursos do React que tem diversas funções;
- Como: guardar e alterar o estado de algum dado na nossa aplicação;
- Todos os hooks começam com use, por exemplo: useState;
- Podemos criar os nossos hooks, isso é chamado de custom hook;
- Os hooks precisam ser importados;
- Geralmente são úteis em todas as aplicações, utilizaremos diversos ao
longo do curso;

### useState Hook
- O hook de useState é um dos mais utilizados;
- Utilizamos para gerenciar o estado de algum dado, variáveis não
funcionam corretamente, o componente não re-renderiza;
- Para guardar o dado definimos o nome da variável e para alterar vamos
utilizar setNome, onde nome é o nome do nosso dado;
- Vamos ver na prática!

### Renderização de lista
- Uma outra ação bem comum é renderizar listas de dados no template;
- Fazemos isso com os dados com tipo de array;
- Utilizando o método map para nos auxiliar;
- Além dos dados podemos inserir JSX em cada iteração;
- Vamos ver na prática!

### A propriedade KEY
- Iterar listas sem a propriedade key nos gera um warning, podemos verificar isso no console;
- O React precisa de uma chave única em cada um dos itens iterados;
- Isso serve para ajudá-lo na renderização do componente;
- Geralmente teremos um array de objetos e podemos colocar key como
alguma chave única, como o id de algum dado;
- Em último caso devemos utilizar o index do método map;

### Previous State
- Previous state é um recurso que nos permite pegar o dado em seu valor original dentro de um set de dado;
- Isso é muito utilizado para modificar listas, pois temos o valor antigo e transformamos em um valor novo;
- O primeiro argumento de um set sempre será o previous state;
- Vamos ver na prática!

### Renderização condicional
- Renderização condicional é quando imprimimos uma parte do template baseado em uma condição;
- Ou seja, utilizando uma checagem com if;
- Isso é interessante em situações como: usuário autenticado/não
autenticado;
- Vamos ver na prática!

### Adicionando um else
- Podemos também realizar um if/else no JSX;
- Aqui devemos utilizar o if ternário;
- Onde temos a sintaxe: condição ? bloco1 : bloco2
- Vamos ver na prática!

### Props
- Props é outro recurso fundamental do React;
- Nos permite passar valores de um componente pai para um
componente filho;
- Isso será muito útil quando os dados forem carregados via banco de
dados, por exemplo;
- As props vem em um objeto no argumento da função do componente;
- Vamos ver na prática!

### Desestruturando Props
- É super comum passar mais de uma prop em um componente;
- Para facilitar isso o React nos permite desestruturar as propriedades
que chegam, com o recurso de destructuring;
- Se temos duas props: nage e age;
- Podemos fazer assim function MyComponent({name, age})
- Agora não precisamos mais utilizar props.algumaCoisa;
- Vamos ver na prática!

### Reutilização de componentes
- Com props a reutilização de componentes começa a fazer muito sentido;
- Se temos os dados de 1000 carros por exemplo, podemos reaproveitar o nosso CarDetails 1000 vezes;
- Isso torna nosso código mais padronizado, facilitando a manutenção;
- Vamos ver na prática!

### Reutilização com Loop
- Os arrays de dados podem ter muitos itens também;
- Então o correto é utilizar uma estrutura de loop (map) para a sua
exibição;
- E com isso conseguimos conciliar os três conceitos: renderização de
listas, reaproveitamento de componentes e props;
- Vamos ver na prática!

### React Fragments
- Os React fragments são interessantes para quando precisamos ter mais de um elemento pai em um componente;
- Criamos uma tag vazia: <> ... </>
- E ela serve como elemento pai, não alterando a estrutura do HTML com
uma div, por exemplo;
- Vamos ver na prática!

### Children Prop
- Children prop é um recurso utilizado para quando um componente precisa ter JSX dentro dele;
- Porém este JSX vem do componente pai;
- Então o componente age como um container, abraçando estes
elementos;
- E children é considerada uma prop do componente;
- Vamos ver na prática!

### Funções em Props
- As funções podem ser passadas para as props normalmente;
- Basta criar a função no componente pai e enviar como prop para o
componente;
- No componente filho ela pode ser ativada por um evento, por exemplo;
- Vamos ver na prática!

### Elevação de State
- Elevação de state ou State lift é quando um valor é elevado do componente filho para o componente pai;
- Geralmente temos um componente que usa o state e outro que o altera;
- Então precisamos passar a alteração para o componente pai, e este passa para o componente que usa o state;
- Vamos ver na prática!

### Desafio 4
1. Crie um array de objetos compostos de pessoas, com as propriedades de: nome, idade e profissão (array com pelo menos 3 itens);
2. Os dados devem ser exibidos em um componente UserDetails, que você deve criar, todas as informações devem ser exibidas;
3. Faça uma renderização condicional que exibe se o usuário pode tirar carteira de habilitação ou não, imprima isso também no componente;
4. A informação pode ser exibida num parágrafo (checar se idade >= 18);
 