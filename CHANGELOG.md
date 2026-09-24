# Changelog

Todas as mudanças relevantes deste pacote são registradas aqui.

O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) e o versionamento segue [SemVer](https://semver.org/lang/pt-BR/).

## [2.7.1] — 2026-09-24

Só empacotamento — nenhuma mudança de API ou de `dist/`.

### Alterado

- **Publicado no GitHub Packages como `@fiuza3/mf-ui`**, sob a dist-tag `release-2x`. A instalação via `github:Fiuza3/MF-ui` travava na Vercel, que não clona repositório privado por SSH. O import continua `@mf/ui` com alias npm: `"@mf/ui": "npm:@fiuza3/mf-ui@2.7.1"`.
- Publicação automática pelo workflow `Publish` a cada tag `v*`, com checagem de que a tag bate com a versão.
