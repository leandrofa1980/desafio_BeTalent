# Teste Técnico Front-end BeTalent

Este repositório contém a solução para o Teste Técnico de Front-End da BeTalent. O projeto consiste na construção de uma visualização responsiva de uma tabela de funcionários, onde os dados são consumidos de uma API simulada utilizando o json-server.

## Sobre o Projeto

O desafio tem como objetivo:

- Exibir uma tabela com dados de funcionários contendo as seguintes colunas:
  - Imagem (thumb do(a) usuário(a))
  - Nome
  - Cargo
  - Data de admissão
  - Telefone
- Permitir a realização de pesquisa por meio de um input. A pesquisa deve filtrar os dados por nome, cargo e telefone.
- Formatar datas e telefones no front-end.
- Garantir que a visualização seja responsiva para dispositivos móveis e desktops.

O layout do projeto foi orientado por um mockup disponibilizado no Figma, que define os estilos e a disposição dos elementos em diferentes breakpoints.

## Tecnologias Utilizadas

- **React.js** – para construção da interface
- **TypeScript** – (diferencial) para tipagem estática e melhor organização do código
- **CSS** – estilização responsiva, utilizando media queries para adaptar a visualização em diferentes dispositivos
- **json-server** – para simular uma API e fornecer os dados de funcionários
- **Axios** – para realizar as requisições à API

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) ou outro gerenciador de pacotes de sua preferência

## Instruções para Rodar a Aplicação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/leandrofa1980/desafio_BeTalent.git
   ```
2. **Instale o json-server:**

   ```bash
   yarn add json-server
   ```

   ou, pelo npm:

   ```bash
   npm install json-server
   ```

3. **Instale as dependências:**
   ```bash
   cd nome-do-repositorio
   yarn install
   ```
4. **Rode o json-server para consumir a API simulada:**
   Certifique-se de que o arquivo `db.json` está presente na raiz do projeto e que você esteja na pasta do projeto.

   ```bash
   yarn json-server --watch db.json
   ```

   ou, se preferir:

   ```bash
   npx json-server --watch db.json
   ```

5. **Inicie a aplicação:**
   Em outra aba do terminal, execute:
   ```bash
   yarn dev
   ```
   A aplicação estará disponível normalmente em [http://localhost:3000](http://localhost:3000) (ou a porta definida no seu ambiente).

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

- **/src**
  - **components/** – Componentes reutilizáveis (ex.: TabelaFuncionarios, PesquisaInput, etc.)
  - **models/** – Tipagens e interfaces (ex.: `Funcionarios.ts`)
  - **styles/** – Arquivos CSS e/ou pré-processadores
  - **utils/** – Utilitários, como configuração de requisições (ex.: `request.ts`)
- **db.json** – Arquivo com os dados da API simulada
- **README.md** – Este arquivo

## Critérios de Avaliação

O projeto foi desenvolvido considerando os seguintes critérios:

- **Lógica de Programação:** Implementação de filtragem dinâmica dos dados da tabela por meio de um input controlado.
- **Organização do Código e Arquivos:** Componentização clara e estrutura de pastas organizada.
- **CSS do Projeto:** Estilização seguindo o mockup do Figma, com responsividade garantida via media queries.
- **README:** Contém informações detalhadas sobre o projeto, pré-requisitos e instruções para rodar a aplicação.
- **Uso de TypeScript:** O projeto utiliza TypeScript para melhorar a robustez e escalabilidade do código (diferencial).

## Considerações Finais

Este projeto foi desenvolvido como parte do Teste Técnico para o processo seletivo da BeTalent. Agradeço a oportunidade e estou à disposição para eventuais dúvidas ou discussões sobre a implementação.

---
