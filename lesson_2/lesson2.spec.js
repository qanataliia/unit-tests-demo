import * as assert from "assert"
import { logAnimalAge } from "../lesson02/reptile.js"
import {Animal} from "../lesson02/reptile.js"
import { expect } from 'chai';

describe('Check animal age', function () {
    describe('countAge', function(){
      it('should be 1', function(){
        const aboutReptile = [
          new myReptile("Turtle", "1", "100", "30cm", "water"),
        ];

        let reptileFeature = logAnimalAge(aboutReptile);
        for (const myReptile of reptileFeature) {
          expect(myReptile.age).equals("1")
        }
    })
}); 

})