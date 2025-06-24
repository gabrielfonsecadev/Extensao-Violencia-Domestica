# Extensão Violência Doméstica

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 18.2.1.

## 🚀 Deploy no GitHub Pages

Este projeto está configurado para deploy automático no GitHub Pages.

### Configuração Inicial

1. **Faça push do código para o GitHub:**
   ```bash
   git add .
   git commit -m "Configuração inicial para GitHub Pages"
   git push origin main
   ```

2. **Configure o GitHub Pages no repositório:**
   - Vá para Settings > Pages no seu repositório GitHub
   - Em "Source", selecione "GitHub Actions"
   - O deploy será feito automaticamente a cada push na branch main

3. **Acesse sua aplicação:**
   - Após o deploy, sua aplicação estará disponível em: `https://[seu-usuario].github.io/extensao-violencia-domestica/`

### Deploy Manual

Se preferir fazer deploy manual:

```bash
# Build e deploy em um comando
npm run deploy:gh-pages

# Ou separadamente
npm run build:gh-pages
npx angular-cli-ghpages --dir=dist/angular-app
```

### Scripts Disponíveis

- `npm run build:gh-pages` - Build otimizado para GitHub Pages
- `npm run deploy:gh-pages` - Build e deploy em um comando
- `npm run build:prod` - Build de produção padrão

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
