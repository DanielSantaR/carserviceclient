<h1 align="center">Car Service Client</h1>

Car Service Client is a frontend built in angular js that consumes an API that serves cars and owners. It allows to do the basic CRUD operations on the vehicles and the owners, also, it shows the image of the cars and its respective owner.

---

## Components

### car-edit

This component allows you to edit the information of each cart, such as changing its name or the owner assigned to it. It also allows you to delete the cart.

### car-list

This component brings the information of all the cars and all the owners, it assigns the respective owner to each car and if it has no owner it assigns "No owner.

### car-owner

This component lists all the users, contains the buttons to edit their information, the button to add a new owner and the button to delete owners, for which you must select the owners to be deleted.

### owner-edit

This component is executed when you press the Add button or the edit button in the car-owner view. This component allows you to edit the information of an existing owner or add a new one.

## Services

### car

this service consumes the endpoints to get all the cars, one car per id, to save or update, and to delete a car.

### giphy

In this section the service of giphy is consumed to obtain the gifs that are assigned to the cars.

### owner

This service defines the operations of the crud for the owners: Get by DNI, get all, create, edit and delete.

## File and directory structures

This is the structure of the **app** directory

```
.
├── app.component.css
├── app.component.html
├── app.component.spec.ts
├── app.component.ts
├── app.module.ts
├── app-routing.module.ts
├── car-edit
│   ├── car-edit.component.css
│   ├── car-edit.component.html
│   ├── car-edit.component.spec.ts
│   └── car-edit.component.ts
├── car-list
│   ├── car-list.component.css
│   ├── car-list.component.html
│   ├── car-list.component.spec.ts
│   └── car-list.component.ts
├── car-owners
│   ├── car-owners.component.css
│   ├── car-owners.component.html
│   ├── car-owners.component.spec.ts
│   └── car-owners.component.ts
├── models
│   ├── car.ts
│   └── Owner.ts
├── owners-edit
│   ├── owners-edit.component.css
│   ├── owners-edit.component.html
│   ├── owners-edit.component.spec.ts
│   └── owners-edit.component.ts
└── shared
    ├── car
    │   ├── car.service.spec.ts
    │   └── car.service.ts
    ├── giphy
    │   ├── giphy.service.spec.ts
    │   └── giphy.service.ts
    └── owner
        ├── owner.service.spec.ts
        └── owner.service.ts
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
