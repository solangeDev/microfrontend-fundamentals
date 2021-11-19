import { registerApplication, start } from "single-spa";

const app = {
  async mount(props) {
    const domElementContainer = document.getElementById(
      "single-spa-application:01-code-exercise"
    );
    const img = document.createElement("img");
    img.src = `https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg`;
    const button = document.createElement("button");
    button.textContent = `unmounting`;
    button.addEventListener("click", () => {
      document.getElementById(
        "single-spa-application:01-code-exercise"
      ).innerHTML = "";
    });

    domElementContainer.appendChild(button);
    domElementContainer.appendChild(img);
  },

  async unmount(props) {
    console.log("App is unmounting", props);
    const domElementContainer = document.getElementById(
      "single-spa-application:01-code-exercise"
    );
    domElementContainer.innerHTML = "";
  },
};

// Register your microfrontend with single-spa
registerApplication({
  // The name of your microfrontend
  name: "01-code-exercise",

  // The application object
  app,
  // Alternatively, you can provide a "loading function"
  // A loading function returns a promise that resolves with the application object.
  // app: () => import('./file-with-app.js'),

  // The list of routes the application is mounted (active) for.
  activeWhen: ["/"],
  // If you uncomment this, run singleSpaNavigate('/settings') in the browser console
  // to watch the app start out inactive and then mount.
  // activeWhen: ['/settings', '/dashboard']

  // Data to pass to the application
  customProps: {
    adjective: "first",
    pepe: "grillo",
    // You can pass in functions (or anything else) as well
    // getAuthToken() {
    //   return 'asdf7sf789sd7f9sd8f9sdfsdf9s'
    // }
  },
});

// Before start() is called, single-spa will start loading the applications,
// but will not mount them. This is to let you delay mounting until you know
// whether the user is logged in, important data is fetched, etc.
// An alternative to delaying start() is to have each app wait for those things individually.
start();
