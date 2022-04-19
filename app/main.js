import { ClockController } from "./Controllers/ClockController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {
  todosController = new TodosController()
  imagesController = new ImagesController()
  clockController = new ClockController()
  weatherController = new WeatherController()
  quotesController = new QuotesController()
}

window["app"] = new App();
