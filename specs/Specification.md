# Specification of CEDeclara

CEDeclara should be developed as a PWA-Application.
It should be as much as possible plattform independant.  

## Intention

The intention is to provide a simple software to create a CE Declaration.
The focus is on the form of the document and not on the process itself.
That means it helps the user to find the correct form of the declaration depending on the used directives.

## Data Concept

The application can be used in four modes.

### Web-App

This mode is given, if the users decides not to install the app.
In this case the user has only the possibility to up- and download the files with the data.
Some data could be saved in the IndexDB or local storage, to avoid data loss.

### PWA without filesystem

This mode is more or less the same like the web app.
The difference is, that it feels more like a native application.
That means, it has an own icon on the desktop and there is no browser UI.
But because there is no filesystem, there user still is only able to up- and download the files.

### PWA with filesystem

This feature is at the moment only on chromium based browser available.
The advantage is that the user has now the possibility to use the filesystem directly.
In this case the application feels very native.
PWAs like this propably have the best support on chrome os notebooks.
These are normaly cheaper than Apple or Windows Systems.

### PWA with database

The database needs to be installed external and seperatly on customer side.
The PWA is commuicating over an api.
For this a database with a webserver will be needed.
It would be the best to pack this into a container like Docker or Podman.

## Application structure

The application needs to be structured to be reuseable.
The minimun is to divide it into a Datamodel and a Visualisation.
The visualisation is realized in HTML and JavaScript.
The datamodel is written in rust and compiled as a webassembly.
In this way we can use the datamodel also in other visualisations.

### Datamodel

The data consists more or less of three main parts.

- Directives
- Persons
- Products

#### Directives

Depending on the directive the form of the declaration can change.
There is also the possibility to use one directive in different ways, what is also causing a different form of declaration.

#### Persons

In this case a person can be a natural person or a company.
The most directives only need a manufacturer and a person that signs the declaration.
But e.g. the machinde directive allows more persons to be included in the process.

#### Products

For the declaration it is important, that the product for that the conformity was declared can be identified.
So there is a need to structure the own products, that they can be identified by the declaration.

### Visualisation

The visualisation should be independent of the Datamodel, so that it can be written in any other language.
In this project the visualisation must be realized in HTML/CSS and JavaScript.
For interacting between the DataModel in Rust and the Visualisation in JS there is something like an interface needed.
Because if there is no one the visualisation does not know how to manipulate the DataModel.
In C# e.g. there is a technology called Databinding.
Also for this project we need something similar.  