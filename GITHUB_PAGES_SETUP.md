# 📋 Guia de Configuração para GitHub Pages

## ✅ Configurações Já Implementadas

Este projeto já está configurado para deploy automático no GitHub Pages com:

### 🔧 Dependências Instaladas
- `angular-cli-ghpages` - Para deploy manual se necessário

### 📝 Scripts NPM Adicionados
- `build:gh-pages` - Build otimizado para GitHub Pages
- `deploy:gh-pages` - Build e deploy manual
- `build:prod` - Build de produção padrão

### 🚀 GitHub Actions Workflow
- Deploy automático configurado em `.github/workflows/deploy.yml`
- Executa a cada push na branch `main`
- Build e deploy automático

### 📁 Arquivos de Configuração
- `.nojekyll` - Evita processamento Jekyll
- `404.html` - Página de erro personalizada
- Base href configurado para `/extensao-violencia-domestica/`

## 🎯 Passos para Ativar o GitHub Pages

### 1. Fazer Push do Código
```bash
git add .
git commit -m "Configuração inicial para GitHub Pages"
git push origin main
```

### 2. Configurar GitHub Pages no Repositório
1. Acesse seu repositório no GitHub
2. Vá para **Settings** > **Pages**
3. Em **Source**, selecione **"GitHub Actions"**
4. **IMPORTANTE**: Vá para **Settings** > **Actions** > **General**
5. Em **Workflow permissions**, selecione **"Read and write permissions"**
6. Marque a opção **"Allow GitHub Actions to create and approve pull requests"**
7. Clique em **Save**
8. Aguarde o primeiro deploy (pode levar alguns minutos)

### 3. Acessar a Aplicação
Após o deploy, sua aplicação estará disponível em:
```
https://[seu-usuario].github.io/Extensao-Violencia-Domestica/
```

## 🔄 Deploy Manual (Opcional)

Se preferir fazer deploy manual:

```bash
# Instalar dependências (se necessário)
npm install

# Build e deploy em um comando
npm run deploy:gh-pages
```

## ⚠️ Importante

### Nome do Repositório
O projeto está configurado para um repositório chamado `extensao-violencia-domestica`. Se seu repositório tiver um nome diferente, você precisa:

1. **Atualizar o base href** em `package.json`:
   ```json
   "build:gh-pages": "ng build --configuration production --base-href /SEU-NOME-DO-REPOSITORIO/"
   ```

2. **Atualizar o link no 404.html**:
   ```html
   <a href="/SEU-NOME-DO-REPOSITORIO/" class="btn">Voltar ao Início</a>
   ```

3. **Atualizar o script de redirecionamento no 404.html**:
   ```javascript
   window.location.href = '/SEU-NOME-DO-REPOSITORIO/';
   ```

### Domínio Customizado (Opcional)
Se você tiver um domínio personalizado:

1. **Adicione um arquivo CNAME** na pasta `public/`:
   ```
   seudominio.com
   ```

2. **Atualize o base href** para `/`:
   ```json
   "build:gh-pages": "ng build --configuration production --base-href /"
   ```

## 🐛 Solução de Problemas

### Erro de Permissão (403 Forbidden)
**Erro:** `Permission denied to github-actions[bot]`

**Solução:**
1. Vá para **Settings** > **Actions** > **General** no seu repositório
2. Em **Workflow permissions**, selecione **"Read and write permissions"**
3. Marque **"Allow GitHub Actions to create and approve pull requests"**
4. Clique em **Save**
5. Execute novamente o workflow ou faça um novo push

### Build Falhando
- Verifique se todas as dependências estão instaladas: `npm install`
- Teste o build localmente: `npm run build:gh-pages`

### Página em Branco
- Verifique se o base href está correto
- Confirme que o nome do repositório está correto na configuração

### 404 Errors
- Verifique se o arquivo `.nojekyll` está presente
- Confirme que o roteamento do Angular está configurado corretamente

### Workflow Não Executa
- Verifique se o arquivo está em `.github/workflows/deploy.yml`
- Confirme que você está fazendo push na branch `main`
- Verifique se o GitHub Actions está habilitado no repositório

## 📊 Monitoramento

- **Actions**: Vá para a aba "Actions" no GitHub para ver o status dos deploys
- **Pages**: Em Settings > Pages você pode ver o status e URL da aplicação
- **Logs**: Os logs de build estão disponíveis na seção Actions

---

✨ **Pronto!** Seu projeto Angular está configurado para GitHub Pages com deploy automático!