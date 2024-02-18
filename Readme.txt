Create project myapp
--------------------------
ng new Angular12Crud --skip-install
ng new Lab1 --skip-install

mklink /d node_modules D:\programs\angular12\node_modules

ng g s services/tutorial

ng g c components/add-tutorial
ng g c components/tutorial-details
ng g c components/tutorials-list

ng g class models/tutorial --type=model

code .

ng serve

ng serve --prot 9001

===============
Component   ng g component my-new-component
Directive   ng g directive my-new-directive
Pipe    ng g pipe my-new-pipe
Service ng g service my-new-service
Class ng g class my-new-class
Guard   ng g guard my-new-guard
Interface   ng g interface my-new-interface
Enum    ng g enum my-new-enum
Module  ng g module my-module
===================================


http://localhost:4200
-------------------------------
Project Explain
---------------------------
– tutorial.model.ts exports the main class model: Tutorial.
– There are 3 components: tutorials-list, tutorial-details, add-tutorial.
– tutorial.service has methods for sending HTTP requests to the Apis.
– app-routing.module.ts defines routes for each component.
– app component contains router view and navigation bar.
– app.module.ts declares Angular components and import necessary modules.

===================================
Folder:
--------------
src-components and js files
assets-media folder like image js etc.
environment-
index.htm- load first file its hold aap-root and css other json
main.ts- bootstrap
styles.css-

package-lock.json- package details
pacakge.json-
angular.json- config icon, first html, js 
tsconfig.json- z

