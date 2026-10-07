# rody.city

Site pessoal — landing + papers + social tree builder.

## Rodando

```bash
bun install
bun run dev
```

Abre em http://localhost:3000.

## Estrutura

- `src/app/page.tsx` — landing (`/`)
- `src/app/homebrew/page.tsx` — área de papers (`/homebrew`)
- `src/app/papers/[slug]/page.tsx` — paper individual, conteúdo em `src/content/papers/*.md`
- `src/app/socials/page.tsx` — minha árvore de links
- `src/app/linktreeCreation/page.tsx` — editor que gera uma linktree em zip

## Papers

Cada paper é um `.md` em `src/content/papers/`. Pra adicionar um novo, cria o arquivo e registra em `src/components/pages/homebrew/papers.tsx`.
