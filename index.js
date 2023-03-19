import { Reptile } from "./lesson02/reptile.js"

const myReptile = new Reptile("Turtle", "1", "100", "30cm", "water");
const myIguana = new Reptile("Iguana", "5", "30", "15cm", "land");
const mySnake = new Reptile("Snake", "3", "9", "1m", "land");

myReptile.logAnimalAge()
myReptile.logAnimalSize()
myReptile.yearsLeftToLive()
myReptile.placeOfLiving()

myIguana.logAnimalAge()
myIguana.logAnimalSize()
myIguana.yearsLeftToLive()
myIguana.placeOfLiving()

mySnake.logAnimalAge()
mySnake.logAnimalSize()
mySnake.yearsLeftToLive()
mySnake.placeOfLiving()