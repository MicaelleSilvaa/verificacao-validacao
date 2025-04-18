# 🧪 Automated Tests - Câncer de Pulmão

Este repositório contém testes automatizados para o sistema **Câncer de Pulmão**, utilizando [Playwright](https://playwright.dev/) como framework principal de testes de interface.

## 📁 Estrutura do Repositório

Incluímos os arquivos `settings.json` e `extensions.json` para garantir um ambiente de desenvolvimento consistente entre todos os membros da equipe.

### ✅ Configurações da Workspace

- O arquivo `settings.json` define configurações específicas do projeto que sobrescrevem as do usuário, como formatação, linting e outras ações importantes para manter a padronização.

### 🧩 Extensões Recomendadas

Para uma melhor experiência de desenvolvimento (especialmente usando o VSCode), recomendamos instalar as seguintes extensões:

- [Prettier – Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

> 📌 O VSCode pode sugerir automaticamente a instalação dessas extensões através do `extensions.json`.

---

## ⚙️ Configuração do Projeto

Siga os passos abaixo para configurar o ambiente e executar os testes com o Playwright:

### 1. Clone o repositório

```bash
git clone <url-do-repo>
cd <nome-do-projeto>
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Inicialize o Playwright
Este comando instala o Playwright e prepara a estrutura inicial do projeto:
```bash
npm init playwright@latest
```

Siga as instruções no terminal e escolha as opções conforme necessário (você pode escolher usar TypeScript, instalar os navegadores, etc.).

## 🚀 Executando os Testes

### Rodar todos os testes
```bash
npx playwright test
```

### Rodar um teste específico com interface (modo headed)
```bash
npx playwright test tests/form/form.spec.ts --headed
```

### Rodar um teste específico em modo debug
```bash
npx playwright test tests/form/form.spec.ts --debug
```

## 🔍 Gerador de Código (Codegen)
O Playwright permite gerar código automaticamente com base nas ações que você executa manualmente no navegador.

### Exemplo básico de uso:
```bash
npx playwright codegen http://localhost:3000
```

### Exemplo para uma página específica:
```bash
npx playwright codegen http://localhost:3000/Sistema
```

## 💡 Dicas Úteis

Use o comando --debug para investigar testes que estão falhando, com pausas automáticas e ferramentas de inspeção.

Combine --headed e --debug para visualizar a execução dos testes.

Utilize o codegen para acelerar a criação de novos testes.

