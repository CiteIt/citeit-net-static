# citeit-net-static
Static site for citeit.net

### Requirements

* npm
    - Download node.js and npm
      * https://www.npmjs.com/get-npm
    - Install package on Mac: 14.15.4
    - Test: node -v
      * v14.15.4

### Key Technologies
  - [Eleventy](https://www.11ty.dev/): static site generator
  - [TailwindCSS](https://tailwindcss.com/): CSS framework
  - [Alpine.js](https://github.com/alpinejs/alpine): lightweight JS framework (no virtual DOM)
  - [Nunjucks](https://mozilla.github.io/nunjucks/): templating language for JavaScript (inspired by [jinja2](https://jinja.palletsprojects.com/en/2.11.x/)


### Install 

#### 1. Clone Repo

```
git clone git@github.com:CiteIt/citeit-net-static.git citeit-net-static
```

#### 2. Navigate to the directory

```
cd citeit-net-static
```

#### 3. Install the dependencies

```
npm install
npm install -g npm
```

#### 4. Update the dependencies

```
npm update
```

#### 5. Build the project to generate the first CSS
This step is only required the very first time

```
npm run build

npm run start
```
