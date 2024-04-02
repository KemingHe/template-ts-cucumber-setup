# TypeScript BDD Template

[![Node CI](https://github.com/KemingHe/template-ts-cucumber-setup/actions/workflows/auto-code-review.yml/badge.svg?branch=main)](https://github.com/KemingHe/template-ts-cucumber-setup/actions/workflows/auto-code-review.yml)
[![CodeQL](https://github.com/KemingHe/template-ts-cucumber-setup/actions/workflows/github-code-scanning/codeql/badge.svg?branch=main)](https://github.com/KemingHe/template-ts-cucumber-setup/actions/workflows/github-code-scanning/codeql)
[![codecov](https://codecov.io/gh/KemingHe/template-ts-cucumber-setup/graph/badge.svg?token=CM4DPCNDHA)](https://codecov.io/gh/KemingHe/template-ts-cucumber-setup)

Typescript and Behavior-Driven Development complete boilerplate setup.

> How to get the **most value** out of this?  
> https://www.linkedin.com/pulse/juggling-cucumberjs-keming-he-648ke

Your one-stop, quick-start to any `Node.js 18 and 20+` project, fully customizable with **ZERO** production dependency restrictions. Ready for high-quality frontend, backend, hobby, or professional development.

Made with love :heart:, and maintained by Keming He, **now open for hire**! :globe_with_meridians: Connect with me on LinkedIn:

> Link: https://linkedin.com/in/keminghe

## Key Features

For complete code review, simply run the following, which includes format, lint, and test (unit and behave):

```bash
npm run review
```

This automation is also baked into the **GitHub Actions**, validating for both `Node.js 18 and 20` versions when `main` has been modified via push or pull-request. You can modify the workflow at:

```
.github/workflows/node-ci.yml
```

> [!NOTE] 
> Update 04/02/24:
> 
> CodeCov reporting has been added to the `node-ci.yml` workflow.

View the "**Sunburst**" coverage report of this repository here:

![CodeCov report for this repo, visualized in Sunburst format.](https://codecov.io/gh/KemingHe/template-ts-cucumber-setup/graphs/sunburst.svg?token=CM4DPCNDHA)

The inner-most circle is the entire project, moving away from the center are folders then, finally, a single file. The size and color of each slice is representing the number of statements and the coverage, respectively.

> https://app.codecov.io/gh/KemingHe/template-ts-cucumber-setup

Learn how to setup CodeCov for your repos here:

> https://docs.codecov.com/docs/quick-start

More pre-defined commands below (and even more in `package.json`), give them a try!

| Command                | Description           | Dev Module | Config File in Root |
| ---------------------- | --------------------- | ---------- | ------------------- |
| `npm run format-write` | Code style revision   | Prettier   | .prettierrc.json    |
| `npm run lint-fix`     | Code quality revision | ESLint     | .eslintrc.json      |
| `npm run build`        | Compile ts            | TypeScript | tsconfig.json       |
| `npm run test-unit`    | Unit testing          | Jest       | jest.config.json    |
| `npm run test-behave`  | Feature testing       | CucumberJS | cucumber.js         |

Credit: This table was generated using: https://www.tablesgenerator.com/markdown_tables

## Big, Deep, Deep Thanks

This tutorial/template is inspired, and made possible, by the these **awesome** people/communities (unordered). Please follow them on LinkedIn/GitHub and consider sponsoring :heartpulse: or buying them coffee :coffee: for their wonderful work:

- [Khalil Stemmler](https://khalilstemmler.com/)'s TypeScript x ESLint blog post[^1]:
  [^1]: How to use ESLint with TypeScript https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/

- Khalil Stemmler's TypeScript x ESLint x Prettier blog post[^2]:
  [^2]: How to use Prettier with ESLint and TypeScript in VSCode https://khalilstemmler.com/blogs/tooling/prettier/

- [Paul Ccari](https://blog.logrocket.com/author/paulccari/)'s TypeScript x ESLint x Prettier LogRocker blog[^3]:
  [^3]: Linting in TypeScript using ESLint and Prettier https://blog.logrocket.com/linting-typescript-eslint-prettier/

- [Elliot DeNolf](https://www.elliotdenolf.com)'s TypeScript x CucumberJS blog post[^4]:
  [^4]: Cucumber.js with TypeScript https://www.elliotdenolf.com/blog/cucumberjs-with-typescript/

- [Avsar Yagmur](https://medium.com/@avsaryagmurr)'s TypeScript x CucumbetJS x Playwright series[^5]:
  [^5]: Playwright Test Automation https://medium.com/@avsaryagmurr/list/playwright-test-automation-782786c016e8

- [Tim Robers](https://github.com/timjroberts) and the wonderful cucumber-tsflow community[^6]:
  [^6]: cucumber-tsflow https://github.com/timjroberts/cucumber-js-tsflow

- And GitHub Copilot in VSCode[^7]:
  [^7]: GitHub Copilot in VS Code https://code.visualstudio.com/docs/copilot/overview
