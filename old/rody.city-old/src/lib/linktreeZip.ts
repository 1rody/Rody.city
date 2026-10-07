import JSZip from "jszip";

export type SocialLink = {
    name: string;
    url: string;
    icon: string;
};

export type TreeData = {
    bgImage: string;
    bannerImage: string;
    name: string;
    introductionPhrase: string;
    starterPhrase: string;
    description: string;
    socials: SocialLink[];
};

function pageTemplate(tree: TreeData) {
    return `"use client";

import Link from 'next/link';

export default function Linktree() {

    const bgImage = ${JSON.stringify(tree.bgImage)};
    const bannerImage = ${JSON.stringify(tree.bannerImage)};

    const name = ${JSON.stringify(tree.name)};
    const introductionPhrase = ${JSON.stringify(tree.introductionPhrase)};

    const starterPhrase = ${JSON.stringify(tree.starterPhrase)};
    const description = ${JSON.stringify(tree.description)};

    const socials = ${JSON.stringify(tree.socials, null, 4).replace(/\n/g, "\n    ")};

    return (
        <>
            <img src={bgImage} className='w-full h-screen object-cover blur-sm dark:opacity-40' alt="Background image" />
            <section id="socials-container" className="h-screen absolute z-2 scale-95 lg:scale-100 w-full flex items-center justify-center">
                <div className=" backdrop-blur-xl w-100 duration-200 glassmorphism-secondary items-center justify-center rounded-4xl flex flex-col">
                    <div className='flex flex-col w-full items-center justify-center p-5'>
                        <div className='text-center  gap-2'>
                            <img width={430} height={10} src={bannerImage} className='relative -mb-22 h-28 object-cover z-10 rounded-2xl' alt="Banner image" />
                            <Link href="/" className='font-bold text-5xl z-15 font-(family-name:--font-geist) relative'>{name}</Link>
                            <p className=' z-15 font-(family-name:--font-jetbrains-mono) relative'><span>{introductionPhrase}</span></p>
                        </div>
                    </div>
                    <ol className='flex w-full justify-around items-center  text-center p-4'>
                        {socials.map((social) => (
                        <li
                            key={social.name}
                            className='bg-white/5 p-2 w-full flex items-center justify-center
                                    backdrop-blur-3xl duration-200
                                    hover:bg-black hover:text-black hover:invert-100
                                    first:rounded-l-full last:rounded-r-full'
                        >
                            <Link href={social.url}>
                            <img alt={\`\${social.name} icon\`} width={28} height={28} src={social.icon} />
                            </Link>
                        </li>
                        ))}

                    </ol>
                    <article className=' items-center justify-center w-full flex flex-col pb-10 gap-5'>

                        <p className='mt-4 text-sm p-3 max-w-4/5 whitespace-pre-line font-(family-name:--font-jetbrains-mono) rounded-2xl '>
                            {starterPhrase} <strong>{name}</strong> {"\\n\\n"} {description}
                        </p>
                    </article>
                </div>
                < div className='absolute bottom-10 text-center text-white'>
                    <p className='text-sm'>© {new Date().getFullYear()} {tree.name || "Unseen"}. Built with the unseen tree builder.</p>
                </div>
            </section>
        </>
    );
}
`;
}

function layoutTemplate(tree: TreeData) {
    return `import type { Metadata } from "next";

import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: ${JSON.stringify(`${tree.name} | LINKTREE`)},
  description: ${JSON.stringify(tree.introductionPhrase)},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={\`\${geistSans.variable} \${jetbrainsMono.variable} h-full antialiased\`}>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
`;
}

const globalsTemplate = `@import "tailwindcss";

:root {
  --background: #000000;
  --foreground: #ffffff;
  --background-code: #0000003a;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
}

body {
  background: var(--background);
  color: var(--foreground);
}

.glassmorphism-secondary {
  backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(155, 155, 155, 0.075);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: var(--background-code);
}
`;

const packageTemplate = `{
  "name": "my-linktree",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "16.2.6",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.3.3",
    "@types/node": "^20.19.43",
    "@types/react": "^19.2.18",
    "@types/react-dom": "^19.2.5",
    "tailwindcss": "^4.3.3",
    "typescript": "^5.9.3"
  }
}
`;

const postcssTemplate = `const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
`;

const tsconfigTemplate = `{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
`;

const readmeTemplate = `# MY LINKTREE — feito no rody.city

esse zip e um projeto **nextjs** completo com a sua linktree ja montada.

## rodando na sua maquina

\`\`\`bash
bun install
bun run dev       # abre em http://localhost:3000
\`\`\`

## mudando as coisas

| o que | onde |
| --- | --- |
| nome, frases, banner e background | \`app/page.tsx\` (as const la no topo) |
| suas redes sociais (url + icone) | array \`socials\` em \`app/page.tsx\` |
| titulo da aba do navegador | \`app/layout.tsx\` |
| cores e o efeito de vidro | \`app/globals.css\` |

- imagens locais vao na pasta \`public/\`, e o caminho comeca com \`/\` (ex: \`/assets/backgrounds/social.gif\`).
- imagens de fora sao so colar o link completo (\`https://...\`).
- pra apagar uma rede social, apague o objeto dela dentro do array \`socials\`.

## colocando online (de graca)

1. sobe a pasta pro github.
2. entra em [vercel.com](https://vercel.com), "Add New -> Project" e escolhe esse repositorio.
3. deploy. pronto, sua linktree tem link.

---
gerado em rody.city/linktreeCreation
`;

async function addLocalAssets(zip: JSZip, paths: string[]) {
    const uniquePaths = [...new Set(paths.filter((path) => path.startsWith("/")))];

    await Promise.all(uniquePaths.map(async (path) => {
        try {
            const response = await fetch(path);
            if (!response.ok) return;
            zip.file(`public${path}`, await response.blob());
        } catch {
        }
    }));
}

export async function downloadLinktree(tree: TreeData) {
    const zip = new JSZip();

    zip.file("app/page.tsx", pageTemplate(tree));
    zip.file("app/layout.tsx", layoutTemplate(tree));
    zip.file("app/globals.css", globalsTemplate);
    zip.file("package.json", packageTemplate);
    zip.file("postcss.config.mjs", postcssTemplate);
    zip.file("tsconfig.json", tsconfigTemplate);
    zip.file("README.md", readmeTemplate);

    await addLocalAssets(zip, [tree.bgImage, tree.bannerImage, ...tree.socials.map((social) => social.icon)]);

    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = "my-linktree.zip";
    anchor.click();

    URL.revokeObjectURL(url);
}
