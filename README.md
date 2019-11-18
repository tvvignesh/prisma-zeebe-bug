## Photon-Zeebe Bug

Just clone it, run `npm i` to install dependencies, and run `node testing.js` and you will see Zeebe throw the error `Cannot read property 'zeebe:taskDefinition' of undefined`

To fix it, just comment out everything related to Photon (including the imports) and then run it again, it will start working.
