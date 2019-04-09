## HackCamp Angular 6+

- Typings in TypeScript
- Import systems

### 1. Introduction to Angular with the Angular-CLI

You can find more information about the Angular CLI [here](https://github.com/angular/angular-cli/wiki)

`npm install -g @angular/cli` or `yarn global add @angular/cli`

`ng new my-angular-app`

`cd my-angular-app`

`npm start` or `yarn start`

### 2. Starting point: Fixing bugs

This application is not working. After what you've learned so far, you should be able to fix the bugs before adding new features...

**Tips =>** Keep your `developer console` open in the browser to make sure you're not missing on any bugs

**Key learning points:**

- Typings in TypeScript
- Module systems in JavaScript (`import` and `export`)
- Template syntax in Angular ([docs](https://angular.io/guide/template-syntax))

### 3. Adding more features to our application

#### 3.1 Categories

- Implement the `switchCategory` method. It takes the selected category as argument and switch the red line to the selected tab.

#### 3.2 Movies

- Implement the `filterMovies` method. It takes no argument and filters the movies by they category

#### 3.3 Sidebar

- Implement the `toggle` method. It toggles the `toggleNav` property between `true` and `false`. It takes no parameter.
- Implement the `search` method. The `search` method filters the movies per `title` and per `category`. It takes a string as parameter, the `searchTerm`.

#### 3.4 Breaking `app.component.ts` into smaller components

Now that our application is working, let's split it into smaller components:

Let's create these 3 components:

- `<hf-header></hf-header>`
- `<hf-categories-menu></hf-categories-menu>`
- `<hf-category-item></hf-category-item>`
- `<hf-counter></hf-counter>`
- `<hf-movies-list></b-movies-list>`
- `<hf-movie></hf-movie>`
- `<hf-navbar></hf-navbar>`

**Key learning points:**

- Binding syntax in Angular
- Building your first components
- Using the CLI to build components, pipes...
- Communication between components

---
