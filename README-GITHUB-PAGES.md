# MSB Microscopy Library — GitHub Pages + Supabase

## Arquitetura
- GitHub: código-fonte e versionamento.
- GitHub Pages: hospedagem do frontend estático.
- Supabase: autenticação, PostgreSQL e Storage das imagens.
- Não use Vercel.

## 1. Criar o repositório
Crie um repositório no GitHub chamado `msb-microscopy-library`.
Para GitHub Free, o Pages de um repositório privado não está disponível; use repositório público ou um plano do GitHub que permita Pages privado.

## 2. Enviar o projeto
```powershell
git init
git add .
git commit -m "Biblioteca MSB"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/msb-microscopy-library.git
git push -u origin main
```

## 3. Supabase
Crie o projeto no Supabase e execute `supabase/schema.sql` no SQL Editor.
Crie os usuários no Authentication e defina `profiles.role` como `admin` para o administrador e `user` para o usuário.

## 4. GitHub Secrets
No GitHub: Settings > Secrets and variables > Actions > New repository secret.
Crie:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

Não coloque `service_role` no frontend.

## 5. GitHub Pages
No repositório: Settings > Pages > Build and deployment > Source: GitHub Actions.
O workflow `.github/workflows/deploy.yml` fará o build e a publicação automaticamente a cada push em `main`.

A URL será:
`https://SEU_USUARIO.github.io/msb-microscopy-library/`

Se o nome do repositório mudar, altere o `base` em `vite.config.js`.

## 6. Supabase Auth URL
No Supabase: Authentication > URL Configuration.
Defina a Site URL para:
`https://SEU_USUARIO.github.io/msb-microscopy-library/`

Adicione a mesma URL em Redirect URLs.
Para desenvolvimento local, adicione também:
`http://localhost:5173/**`

## 7. Desenvolvimento local
```powershell
npm install
copy .env.example .env.local
npm run dev
```

## 8. Teste de produção local
```powershell
npm run build
npm run preview
```

## 9. Publicação de alterações
```powershell
git add .
git commit -m "Atualiza biblioteca"
git push
```
O GitHub Actions fará o deploy.
