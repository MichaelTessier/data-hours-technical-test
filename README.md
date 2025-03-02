# Technical test for Upciti

## Project install

```
yarn
```

### Environment variables

Please create `.env` and add `VITE_API_URL` with root api url

## Launch API

You need to install docker on your machine et run this command

```
docker compose up
```

you can access to swagger on this url: `API_URL`/docs#/default/data

### Launch project

```
yarn dev
```

## DX

We use auto import underwood, please install https://github.com/antfu/vscode-goto-alias for better DX

## Contribution

You need to follow commitlint rules with these available subjects `feat|fix|docs|chore|style|refactor|ci|test|revert|perf`

## TODO

- Test
  - Add coverage
  - Global RouterLink
- i18n
  - Configure i18n with VSCode
- Shadcn
  - Rename utils folder of shadcn
  - Add Dark Mode Switch (dark is default, see class dark on index.html)
- ESLint
  - extends rules
- UI
  - challenge switch component on Chart
  - Add skeleton
  - And more stuffs

### Complementary information

The user folder is present to show the relevance of the domains folder.
