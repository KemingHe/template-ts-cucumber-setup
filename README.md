# TypeScript BDD Template

[![Node.js CI](https://github.com/KemingHe/template-ts-cucumber-setup/actions/workflows/auto-code-review.yml/badge.svg?branch=main)](https://github.com/KemingHe/template-ts-cucumber-setup/actions/workflows/auto-code-review.yml)

Typescript and Behavior-Driven Development complete boilerplate setup. 

Your one-stop, quick-start to any `Node.js 18` and `20+` project, fully customizable with **ZERO** production dependency restrictions. Ready for high-quality frontend, backend, hobby, or production development. (Current `npm start` simply builds and logs "Hello World!")

Made with :heart:, and maintained :gear: by Keming He. **Hire** or Connect :globe_with_meridians: with me on LinkedIn:
> Link: https://linkedin.com/in/keminghe

## Key Features

- For complete code review, use `npm run review`, which includes format, lint, and test (unit and behave). This automation is also baked into the **GitHub Actions** `.github/workflows/auto-code-review.yml`, validating for both `Node.js 18` and `20` versions when `main` has been modified via `push` or `pull-request`. 

- More pre-defined commands below (and even more in `package.json`), give them a try!

| Feature       | Command                | Description                     | Dev Module | Config File in <rootDir> |
|---------------|------------------------|---------------------------------|------------|--------------------------|
| Lint          | `npm run lint-fix`     | Code quality check and fix      | ESLint     | .eslintrc.json           |
| Build         | `npm run build`        | Compile from ts to js           | TypeScript | tsconfig.json            |
| Format        | `npm run format-write` | Code styling check and revise   | Prettier   | .prettierrc.json         |
| Unit test     | `npm run test-unit`    | Unit test functions and modules | Jest       | jest.config.json         |
| Behavior test | `npm run test-behave`  | Behavior test app and features  | CucumberJS | cucumber.js              |


## Big, Deep, Deep Thanks

This tutorial/template is inspired, and made possible, by the these **awesome** people/communities (unordered). Please follow them on LinkedIn/GitHub and consider sponsoring :heartpulse: or buying them coffee :coffee: for their wonderful work:

- [Khalil Stemmler](https://khalilstemmler.com/)'s TypeScript x ESLint blog post:
> Link: https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/

- Khalil Stemmler's TypeScript x ESLint x Prettier blog post:
> Link: https://khalilstemmler.com/blogs/tooling/prettier/

- [Paul Ccari](https://blog.logrocket.com/author/paulccari/)'s TypeScript x ESLint x Prettier LogRocker blog:
> Link: https://blog.logrocket.com/linting-typescript-eslint-prettier/

- [Elliot DeNolf](https://www.elliotdenolf.com)'s TypeScript x CucumberJS blog post:
> Link: https://www.elliotdenolf.com/blog/cucumberjs-with-typescript/

- [Avsar Yagmur](https://medium.com/@avsaryagmurr)'s TypeScript x CucumbetJS x Playwright series:
> Link: https://medium.com/@avsaryagmurr/list/playwright-test-automation-782786c016e8

- [Tim Robers](https://github.com/timjroberts) and the wonderful cucumber-tsflow community:
> Link: https://github.com/timjroberts/cucumber-js-tsflow

- And GitHub Copilot in VSCode:
> Link: https://code.visualstudio.com/docs/copilot/overview
