Ativar Frontend (web):
- Se primeira vez, instalar as dependências com: npm i
- Rodar aplicação: npm run dev

Ativar backend (api):
- Verificar que o docker está funcionando e que o serviço do postgreSQL está desativado no ctrl + alt + del para evitar erro de autenticação
- Subir o container dessa aplicação: docker compose up -d (aguarde o serviço funcionar)
- Se for primeiro acesso:
    - Instalar as dependências: npm i
    - Criar as tabelas: npx run db:migrate
- Rodar aplicação: npm run dev

Página de inscrição: http://localhost:3000/
Página ranking - Usuário 1: http://localhost:3000/invite/c1042b00-f369-484f-90ec-fa67e7870456

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
