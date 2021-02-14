import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ 'count' ];

  connect() {
    console.log("Hello!")
    console.log(this.countTarget);
    setInterval(this.refresh, 5000);
  }
  refresh = () => {
    console.log("You just clicked on the button.")
    // go get the number of the restaurants from the DB (with an HTTP requests)
    // replace count with new count
    fetch('/restaurants', { headers: { accept: "application/json" } })
          .then(response => response.json())
          .then((data) => {
            console.log(data);
            this.countTarget.innerText = data.restaurants.length;
          });
  }
}
