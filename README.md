[JAVASCRIPT__BADGE]: https://img.shields.io/badge/Javascript-000?style=for-the-badge&logo=javascript
[TYPESCRIPT__BADGE]: https://img.shields.io/badge/typescript-D4FAFF?style=for-the-badge&logo=typescript
[REACT__BADGE]: https://img.shields.io/badge/React-005CFE?style=for-the-badge&logo=react
[AXIOS__BADGE]: https://img.shields.io/badge/axios.js-854195?style=for-the-badge&logo=axios&logoColor=5A29E4

<h1 align="center" style="font-weight: bold;">Minilink 🔗</h1>

![react][REACT__BADGE]
![javascript][JAVASCRIPT__BADGE]
![typescript][TYPESCRIPT__BADGE]
![axios][AXIOS__BADGE]

<br/>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> • 
 <a href="#-começando">Começando</a> • 
 <a href="#-stack-utilizada">Stacks Utilizadas</a> • 
 <a href="#-rotas-da-aplicação">Rotas da Aplicação</a> • 
 <a href="#-desenvolvedor-do-projeto">Desenvolvedor</a> •
 <a href="#-contribua">Contribua</a>
</p>


<p align="center">
    <img src="https://github.com/user-attachments/assets/3b65b736-55fe-4461-a540-0334a2383ccc" alt="Image Example" width="500px">
</p>

## 🧾 Sobre o Projeto

**MiniLink** é um encurtador de URLs simples e eficiente, que permite aos usuários transformar links longos em versões curtas e fáceis de compartilhar.

Recursos principais:

- Encurtar URLs longas com apenas um clique
- Redirecionamento automático ao acessar a URL curta
- Opção de gerar link customizado
- Opção de gerar link apenas com letras
- Opção de gerar link apenas com números
- Histórico de links criados


Ideal para redes sociais, campanhas de marketing ou uso pessoal.

👉[Clique aqui para ir ao repositório com a API do Minilink](https://github.com/lcnsilva/minilink-api)👈

---

## 🚀 Começando

Para rodar o projeto localmente, siga os passos abaixo.


Clone o projeto:

```bash
git clone https://github.com/lcnsilva/minilink.git
```

Entre no diretório:

```bash
cd minilink
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
npm start
```

**Importante**: Para criar/carregar links é necessário rodar em conjunto a API do Minilink.

---

## 💻 Tecnologias Utilizada
- React
- Styled-components
- TypeScript
- Axios
- Toastify
- React Router

---

## 📍 Rotas da Aplicação

| Rota                          | Descrição                                                                 |
|------------------------------|---------------------------------------------------------------------------|
| / | Pagina principal para criar o seu Minilink. |
| /links | Mostra todos os Minilinks já criados e a quantidade de cliques (Essa função foi criada apenas para observação/testes)|
| /notfound| Página utilizada como redirecionamento quando é utilizado um Minilink que não existe.|

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` com as seguintes variáveis:

```env
VITE_API_URL="link da api || localhost:3000"
```

---

## 👥 Desenvolvedor do Projeto

<a href="https://github.com/lcnsilva/minilink/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=lcnsilva/minilink" />
</a>

[Luciano Silva](https://github.com/lcnsilva)

---

## 🤝 Contribua

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues, forks ou pull requests.

---

## 📫 Contato

Entre em contato comigo via email lcnsilvajf@gmail.com ou [linkedin](https://www.linkedin.com/in/lcnsilva/).
