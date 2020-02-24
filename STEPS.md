# STEPS

1. Instalar o NavigationContainer
   `yarn add @react-navigation/native`

2. Instalar as outras dependencias necessarias ao Navigation
   `yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view`

3. Para o caso de instalação futura em ambiente IOS, atualizar o CocoaPods
   `cd ios; pod install; cd ..`

4. Entrar em `android/app/build.gradle` e adicionar as linhas abaixo em `dependecies`

```js
  implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
  implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'
```

5. Adicionar o NavigationContainer no arquivo inicial `src/index.js` envolvendo todas o código de retorno

```js
return <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>;
```

6. Instalar a biblioteca e envolver o `ReactStackNavigator` em `src/routes.js` apenas para seguir um exemplo de funcionamento e integração a funcionalidade
   `yarn add @react-navigation/stack`

7. Agora vamos criar as telas, para isso, iremos separar a parte lógico dos estilos, e como usaremos alguns recursos de encadeamento de estilos, o StyleSheet é insuficiente, por isso usaremos o Styled Components
   `yarn add styled-components`

8. Criar as seguintes páginas e seus styles
   src/pages/Home/index.js
   src/pages/Home/styles.js
   src/pages/Product/index.js
   src/pages/Product/styles.js
   src/pages/Cart/index.js
   src/pages/Cart/styles.js

9. Instalar a library numeral para ajudar em conversões de moedas
   `yarn add numeral`

10. Criar o arquivo `src/util.format.js` e criar a função que converte um numero para real

11. Instalar conjunto de icones
    `yarn add react-native-vector-icons`

12. Entrar em `android/app/build.gradle` e adicionar as linhas abaixo em no final do arquivo para aplicar o Vector Icons

```js
    apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

13. Instalar o pacote Ratings para permitir a média das avaliações no app
    `yarn add react-native-ratings`

14. Para facilitar o gerenciamento de dados entre os componentes, vamos usar o Redux.
    `yarn add redux redux-saga react-redux`

15. Instalar o Immer para trabalhar com o conceito de drafts nos stados imutáveis dentro do reducer
    `yarn add immer`

16. Instalar o Flash Message para alertar o usuário sobre erros e avisos
    `yarn add react-native-flash-message`

17. Instalar os Prop-types para analisar os valores de entrada no componente
    `yarn add prop-types`

18. Instalar o axios para fazer requisições REST
    `yarn add axios`
