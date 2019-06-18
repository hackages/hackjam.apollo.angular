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

Let's create these n components:

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

#### 4. Services and Dependency Injection in Angular

[Documentation about Services](https://angular.io/guide/http)

Let's now remove the `mocks data` and introduce a **fake** service.
Inside the `app.module.ts`, uncomment `InMemoryWebApiModule`.
Then by using the `HttpClientModule`, you should be able to fetch the data from our mock server.

**NB:** You can find more information about `InMemoryWebApiModule` [here](https://github.com/angular/in-memory-web-api).

[Documentation about Http Service](https://angular.io/guide/http)

All services are located inside the `services folder`.

Implement the following methods: `getMovies` and `getMovieById` in `movies.service.ts`.
Implement the following methods: `getCategories` in `categories.service.ts`.

Implement the following methods: `search` using the `search.service.ts`.

[Documentation about DI (Dependency Injection) in Angular](https://angular.io/guide/dependency-injection-pattern)

Our application is using hardcoded urls (`api/movies`) which is a very bad practise and makes our application difficult to maintain. Let's use DI to fix this issue.

Hint: The `@Inject` attribute is used to solve this issue.

#### 5 Pipe in Angular (demo)

Intoducing `async` and `json` pipes. How do you implement your own pipe?

#### FRP: Introducing Observables (demo)

Let's introduce the notions of Observable, Observer and Producer in order to better understand FRP (Functional Reactive Programming)

#### Debugging tool for FRP (demo)

[http://rxmarbles.com](http://rxmarbles.com

#### Bonus about Observable

Implement the search using Observable.

#### 6 Routing in Angular (RouteModule)

[Documentation about Routing](https://angular.io/guide/router)

Let's add some routing into our application. In `app.routing.ts`, add the following routing:

### Add routing definition

```
export const routes: Routes = [
  { path: "", redirectTo: "/movies", pathMatch: "full" },
  { path: "movies", component: DashboardComponent  },
  { path: "movies/:movieId", component: MovieDetailComponent },
];
```

### Add router-outlet

Configure our application to use the `routes` defined above. In `AppComponent`, we're going to keep the following markup for our template: `app.component.html`

```
<hf-header [title]="title"></hf-header>
<router-outlet></router-outlet>
```

### Dashboard component

Let's implement the `Dashboard component`. The template is already provided in the `dashboard` folder. Add the component definition and don't forget to declare it. Make sure the application is still working after adding the dashboard.

### Implement the movie-detail component

Everything is already provided to build the `movie-detail component`. Just set it up and make sure your application is still working.

## Reactive forms, architecture

[Documentation about Reactive Forms](https://angular.io/guide/reactive-forms)

### Login Component

Let's implement the login component.

First, we're going to enable the login path in the `app.routing.ts`

A login component folder has been added. Here is a set of requirements for the login component:

- User should provide an email as username. (Validation is required)
- User should provide a password with a minimum of 8 characters (Validation is required)

Using `FormGroup` and `FormControl`, we're going to implement the login behavior

- User should not be able to access the site if he's not logged in. [AuthGuard]

// localStore

Lets implement the AuthGuard. (`auth.guard.ts`). The AuthGuard should check if the user's information has been saved into the [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

#### Bonus

Once you have your login working, refactor it to use the `FormBuilder` API instead of `FormGroup` and `FormControl`.

### Architecture/Module

Lets break our application into isolated modules. We're going to create these 3 modules:

- AuthModule
- CoreModule
- ShareModule

Lets discuss first what should be added into each module then refactor our application to reflect our choices.
