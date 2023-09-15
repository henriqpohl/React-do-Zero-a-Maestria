## Fundamentos do React

  
### Criando componentes

- Na maioria dos projetos os componentes ficam em uma pasta chamada components, que devemos criar;
- Geralmente são nomeados com a camel case: FirstComponent.js;
- No arquivo criamos uma função, que contém o código deste componente
(a lógica e o template);
- E também precisamos exportar esta função, para reutilizá-lo;
- Vamos ver na prática!
   
### Importando componente

- A importação é a maneira que temos de reutilizar o componente;
- Utilizamos a sintaxe: import X from ‘./componentes/X’ onde X é o nome
do componente;
- Para colocar o componente importado em outro componente, precisamos
colocá-lo em forma de tag: <FirstComponent />
- E então finalizamos o ciclo de importação;
- Vamos importar o FirstComponent em App;
   
### JSX

- JSX é o HTML do React;
- Onde vamos declarar as tags de HTML que serão exibidas no navegador;
- Ficam no return do componente;
- Temos algumas diferenças do HTML, por exemplo: class será className;
- Isso se dá pelas instruções semelhantes de JS e HTML, pois o JSX é
JavaScript, então algumas terão nomes diferentes;
- O JSX pode ter apenas um elemento pai;
   
### Comentários no componente

- Podemos inserir comentários de duas maneiras no componente;
- Na parte da função, onde é executada a lógica, a sintaxe é: // Algum
comentário;
- E também no JSX: { /* Algum comentário */ }
- As chaves nos permitem executar sentenças em JavaScript, veremos
isso mais adiante;
- Vamos testar os comentários!
   
### Template Expressions

- Template Expressions é o recurso que nos permite executar JS no JSX e também interpolar variáveis;
- Isso será muito útil ao longo dos seus projetos em React;
- A sintaxe é: { algumCódigoEmJS }
- Tudo que está entre chaves é processado em JavaScript e nos retorna
um resultado;
- Vamos ver na prática!
   
### Hierarquia de componentes

- Os componentes que criamos podem ser reutilizados em vários componentes;
- E ainda componentes podem formar uma hierarquia, sendo importados uns dentro dos outros, como fizemos em App;
- Vamos ver na prática estes conceitos!
   
### Evento de click

- Os eventos para o front-end são essenciais;
- Em várias situações vamos precisar do click, como ao enviar
formulários;
- No React os eventos já estão ‘prontos’, podemos utilizar onClick para
ativar uma função ao clicar em um elemento;
- Esta função é criada na própria função do componente;
- As funções geralmente tem o padrão handleAlgumaCoisa;
   
### Funções no evento

- Quando as funções são simples, podemos realizar a lógica no próprio evento;
- Isso torna nossa código mais ‘complicado’, por atrelar lógica com HTML;
- Mas em algumas situações é aplicável;
- Vamos ver na prática!
   
### Funções de renderização

- Podemos criar funções que retornam JSX;
- Isso serve para criar situações que dependam de outras condições;
- Ou seja, o JSX a ser renderizado pode variar por alguma variável, por
exemplo;
- Vamos ver na prática!
   
### Desafio 2
1. Crie um componente chamado Challenge;
2. Importe-o em App.js;
3. No componente criado faça a criação de dois valores numéricos;
4. Imprima este valores no componente;
5. Crie também um evento de click que soma estes dois valores e exibe no
console;
 