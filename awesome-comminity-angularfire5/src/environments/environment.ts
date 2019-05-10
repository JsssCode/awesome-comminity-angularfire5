// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyChNHupkZcGvpMKzERBMri4dozqbS5s83Q',
    authDomain: "awesome-community-83086.firebaseapp.com",
    databaseURL: "https://awesome-community-83086.firebaseio.com",
    storageBucket: "awesome-community-83086.appspot.com",
    projectId: 'awesome-community-83086' // <--- make sure project ID is here 
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
