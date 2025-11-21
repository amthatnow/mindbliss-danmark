# MindBliss - Mental Sundhed & Velvære for Unge

## Om projektet

MindBliss er en hjemmeside dedikeret til at give støtte og information om mental sundhed for børn, unge og deres forældre.

## Hvordan kører jeg projektet lokalt?

Projektet kræver Node.js & npm installeret - [installer med nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Følg disse trin:

```sh
# Trin 1: Clone repositoryet
git clone <YOUR_GIT_URL>

# Trin 2: Naviger til projekt mappen
cd <YOUR_PROJECT_NAME>

# Trin 3: Installer dependencies
npm i

# Trin 4: Start development serveren
npm run dev
```

## Hvilke teknologier bruges i projektet?

Dette projekt er bygget med:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Hvordan deployer jeg projektet?

Kør build kommandoen og upload de genererede filer til din webhosting:

```sh
npm run build
```

Build outputten findes i `dist/` mappen.
