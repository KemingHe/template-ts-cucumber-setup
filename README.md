# :wave: Need a Backend Template?

<div align="center">

<img src="https://socialify.git.ci/keminghe/template-ts-cucumber-setup/image?description=1&forks=1&issues=1&language=1&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Light" alt="Socialify Logo"/>

<br/>
<p>Contributor-friendly TS x ExpressJS BDD template for your next awesome open-source project.</p>
<p>
MIT Licensed and maintained weekly. (Social preview made with
<a href="https://socialify.git.ci"> Socialify </a>
)
</p>

<h4> 
<a href="https://github.com/KemingHe/template-ts-cucumber-setup/blob/main/README.md"> Docs </a>
<span> | </span>
<a href="https://github.com/KemingHe/template-ts-cucumber-setup/issues"> Bugs </a>
<span> | </span>
<a href="https://github.com/KemingHe/template-ts-cucumber-setup/issues"> New Feat </a>
</h4>

</div>

## :notebook_with_decorative_cover: Table of Contents

- [About](#star2-about)
- [Roadmap](#compass-roadmap)
- [Contribute](#heart-contributing)
- [Acknowledgements](#high_brightness-acknowledgements)

## :star2: About

### :robot: Automations

- Changelog Update
- Conventional Commit
- Unit and Feature Testing

### :eyes: Useful Ref Inside

- ExpressJS-based and TS-friendly REST API
- Google Cloud Run Auth, Build, and Deployment

### :key: ENV

See `.env.example`

## :toolbox: Getting Started

### :bangbang: Prerequisites

- Install the latest Node JS 22 LTS [Here](https://nodejs.org/en/download/package-manager)
- Install Docker Engine (or Docker Desktop) [Here](https://docs.docker.com/engine/)
- Install `pnpm` as high-efficient alternative to `npm` [Here](https://pnpm.io)
  
```bash
npm install --global pnpm@latest
```

### :gear: Installation

To install the full dependency

```bash
pnpm install
```

To install only the prod dependency

```bash
pnpm install --prod
```

### :test_tube: Running Tests

To run both unit/snapeshot and feature tests

```bash
pnpm run test
```

To run unit/snapshot tests only

```bash
pnpm run test:unit-and-snapshot
```

To run feature tests only

```bash
pnpm run test:feature
```

### :triangular_flag_on_post: Deployment

Push to main will auto-trigger the deployment script (recommend having reviewers)

```bash
.github/workflows/deploy-gcp.yml
```

## :compass: Roadmap

### :necktie: Functional

- [x] MVP template setup
- [ ] REST API design template setup
- [ ] Firestore custome database CRUD template setup
- [ ] Re-factor in GOLANG waaaay in the future for better performance

### :tophat: Non-functional

- [ ] `contributing.md` setup
- [ ] `CODE_OF_CONDUCT.md` setup
- [ ] Issue and PR tempalte setup

## :heart: Contributing

### :sunglasses: Community

<a href="https://github.com/keminghe/template-ts-cucumber-setup/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=keminghe/template-ts-cucumber-setup" />
</a>

Contributions are always welcome! See `contributing.md` for ways to get started.

Made with [contrib.rocks](https://contrib.rocks).

### :scroll: Code of Conduct

Please read the [Code of Conduct](https://github.com/keminghe/template-ts-cucumber-setup/blob/master/CODE_OF_CONDUCT.md)

## :warning: License

Distributed under the MIT License. See `LICENSE` for more information.

## :calling: Contact

Keming He - keminghe.career[at]gmail.com

## :high_brightness: Acknowledgements

Use this section to mention useful resources and libraries that you have used in your projects.

- [Typescript](https://www.typescriptlang.org/)
- [ExpressJS](https://expressjs.com/)
- [Commitizen](https://commitizen-tools.github.io/commitizen/)
- [Git Cliff](https://git-cliff.org/)

### :gem: Cool Stats

![Alt](https://repobeats.axiom.co/api/embed/8f2558f9c9da7e35a7bf64966f46fa87c15dd6eb.svg "Repobeats analytics image")

Made with [Repobeats](https://repobeats.axiom.co/).
