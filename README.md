## Photon-Zeebe Bug

Just clone it, take a backup of `@generated` folder from node_modules, run `npm i` to install dependencies, place the `@generated` folder back to node_modules and run `node testing.js` and you will see Zeebe throw the error `Cannot read property 'zeebe:taskDefinition' of undefined`

To fix it, just comment out everything related to Photon (including the imports) and then run it again, it will start working.
