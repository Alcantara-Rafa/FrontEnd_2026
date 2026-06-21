# Jogo da Memória — React (projeto Vite)

Implementação do **Desafio da Aula**: clonar um web game com React, seguindo a mesma
metodologia do tutorial oficial do Jogo da Velha (https://react.dev/learn/tutorial-tic-tac-toe).

O passo a passo de como este código foi construído está em `Tutorial_Jogo_da_Memoria_React.pdf`.

Esta é a versão organizada como um **projeto React de verdade** (Vite), com os componentes
separados em arquivos, igual ao que o tutorial descreve passo a passo.

## Como rodar

Pré-requisito: ter o [Node.js](https://nodejs.org) instalado (versão 18 ou mais recente).

```bash
npm install
npm run dev
```

Depois é só abrir o endereço que aparecer no terminal (geralmente http://localhost:5173).

Para gerar a versão de produção (arquivos estáticos prontos para publicar):

```bash
npm run build
npm run preview   # opcional: para conferir a build localmente
```

A pasta `dist/` gerada pelo build pode ser publicada direto no **GitHub Pages**, Vercel, Netlify, etc.

## Como jogar

- Clique em duas cartas para virá-las.
- Se os símbolos forem iguais, elas permanecem viradas (par encontrado).
- Se forem diferentes, elas voltam a ficar viradas para baixo após um instante.
- O objetivo é encontrar todos os 8 pares com o menor número de jogadas possível.
- Use o botão **Reiniciar jogo** para embaralhar as cartas novamente.

## Estrutura do projeto

```
jogo-da-memoria-react/
├── index.html              # ponto de entrada (Vite)
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx             # monta o <App /> na página
    ├── index.css            # reset e estilo do body
    ├── App.css              # estilo do tabuleiro, cartas, placar etc.
    ├── App.jsx               # componente raiz: estado do jogo e lógica de comparação dos pares
    └── components/
        ├── Board.jsx          # renderiza a grade de cartas com .map()
        └── Card.jsx           # componente de apresentação de uma carta (equivalente ao Square)
```

| Componente | Papel |
|---|---|
| `Card`  | Componente de apresentação — renderiza uma única carta (equivalente ao `Square` do jogo da velha) |
| `Board` | Renderiza a grade de cartas a partir de uma lista, usando `.map()` |
| `App`   | Componente raiz — guarda o estado do jogo (`cards`, `selected`, `moves`, `locked`) e a lógica de comparação dos pares |

## Publicando no GitHub

```bash
git init
git add .
git commit -m "Jogo da Memoria com React - desafio da aula"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/jogo-da-memoria-react.git
git push -u origin main
```

> O `.gitignore` já está configurado para não subir `node_modules/` nem `dist/`.
