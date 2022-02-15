/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleDinosaurData` variable below to gain access to tickets data. This data is pulled from the `data/dinosaurs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all dinosaurs.
*/
const exampleDinosaurData = require("../data/dinosaurs");
// Do not change the line above.

/**
 * getTallestDinosaur()
 * ---------------------
 * Returns an object with the tallest dinosaur from the list. Converts from meters to feet.
 *
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 *
 * EXAMPLE:
 *  getTallestDinosaur(dinosaurs);
 *  //> { Brachiosaurus: 98.43 }
 */
 

function getTallestDinosaur(dinosaurs) {
  let tallestDino = dinosaurs[0];
  let dinoObject = {};
  
  if (!dinosaurs.length){
    return dinoObject;
  }

  for (let i = 1; i < dinosaurs.length; i++){
    if(tallestDino.lengthInMeters < dinosaurs[i].lengthInMeters){
      tallestDino = dinosaurs[i];
    } else if (tallestDino.lengthInMeters === dinosaurs[i].lengthInMeters){
      tallestDino = tallestDino;
    }
  }
  dinoObject[tallestDino.name] = (tallestDino.lengthInMeters * 3.281);
  return dinoObject
}


/**
 * TIM'S CODE / CLASS NOTES:
 * 
 * Pseudo Code:
 * Input: dinosaurs array
 * Output: object where the key is the name of the dino pointing to the height of dino in feet;
 * 1. set variable for first dino;
 * 2. Loop through the array - compare dino.lengthInMeters to tallestSoFar, if its larger dino[i] = tallestSoFar
 * 3. Return an object like: {tallestSoFar.name : tallestSoFar.lengthInMeters converted to feet}


function getTallestDinosaur(dinosaurs) {
  let result = {};
  let tallestSoFar = dinosaurs[0];

  if (!dinosaurs || dinosaurs.length < 1){
    return result;
  }
  for (let i = 1; i < dinosaurs.length; i++){
    let current = dinosaurs[i];
    if (current.lengthInMeters > tallestSoFar.lengthInMeters){
      //console.log("old tallest", tallestSoFar.name) - allows us to visualize the previous answer
      tallestSoFar = current;
      //console.log("new tallest", tallestSoFar.name) - allows us to visualize the changes done in the loop
    }
  }
  result[tallestSoFar.name] = tallestSoFar.lengthInMeters * 3.281;
  return result;
}
*/

/**
 * getDinosaurDescription()
 * ---------------------
 * Returns a formatted description of a dinosaur. If the dinosaur cannot be found, returns an error message.
 *
 * NOTE: Carefully view the test output and example below to see how the returned string should be formatted.
 *
 * NOTE: The `\n` represents a new line in text.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {string} id - The unique identifier for the dinosaur.
 * @returns {string} A detailed description of the dinosaur.
 *
 * EXAMPLE:
 *  getDinosaurDescription(dinosaurs, "U9vuZmgKwUr");
 *  //> "Xenoceratops (ZEE-no-SEH-ruh-tops)\nXenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes. It lived in the Early Cretaceous period, over 77.5 million years ago."
 *   {
    dinosaurId: "U9vuZmgKwUr",
    name: "Xenoceratops",
    pronunciation: "ZEE-no-SEH-ruh-tops",
    meaningOfName: "alien horned face",
    diet: "herbivorous",
    lengthInMeters: 6,
    period: "Early Cretaceous",
    mya: [78.5, 77.5],
    info: "Xenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes.",
  },
 *
 *  getDinosaurDescription(dinosaurs, "incorrect-id");
 *  //> "A dinosaur with an ID of 'incorrect-id' cannot be found."
 */
function getDinosaurDescription(dinosaurs, id) {
  for (let i = 0; i < dinosaurs.length; i++){
    if(dinosaurs[i].dinosaurId === id){
      if (dinosaurs[i].mya.length === 1){
        return `${dinosaurs[i].name} (${dinosaurs[i].pronunciation})\n${dinosaurs[i].info} It lived in the ${dinosaurs[i].period} period, over ${dinosaurs[i].mya[0]} million years ago.` 
      } else if (dinosaurs[i].mya.length === 2){
        return `${dinosaurs[i].name} (${dinosaurs[i].pronunciation})\n${dinosaurs[i].info} It lived in the ${dinosaurs[i].period} period, over ${dinosaurs[i].mya[1]} million years ago.` 
      }
      
    }
  } 
  return `A dinosaur with an ID of '${id}' cannot be found.`;
}

/** 
 * TIM'S CODE / CLASS NOTES
 * 
 * Pseudo Code:
 * Step 1 : Loop through dinosaurs - find where id === dinosaurs[id], if we find a match set default var as dinosaur[i]
 * Step 2: Build string. We need to return a string with a loft of interpolated data.
 * Setp 3: Return string.
 * 


function getDinosaurDescription(dinosaurs, id) {
  let dino = `A dinosaur with an ID of '${id}' cannot be found.`; //sets a default value to be returned
  for (let i = 0; i < dinosaurs.length; i++){
    if (id === dinosaurs[i].dinosaurId){
      dino = dinosaurs[i];

      return `${dino.name} (${dino.pronunciation})\n${dino.info} It lived in the ${dino.period} period, over ${dino.mya[dino.mya.length - 1]} million years ago.` // return is placed in the loop so that once a matching dino is found, immediately return this statement. We DO NOT need to keep looping through the array!!!!
    }
  }
  return dino
}
*/

/**
 * getDinosaursAliveMya()
 * ---------------------
 * Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value. If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
 *
 * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less. For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {number} mya - "Millions of years ago."
 * @param {string} key - An optional parameter. If included, for dinosaurs that lived during the `mya` value given, will return the value of the supplied key. Otherwise, returns the ID.
 * @returns {*[]} An array of values, which depend on the key given. The array should only include data of dinosaurs who lived during the given time period.
 *
 * EXAMPLE:
 *  getDinosaursAliveMya(dinosaurs, 150);
 *  //> ["YLtkN9R37", "GGvO1X9Zeh", "BFjjLjea-O", "V53DvdhV2A"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65);
 *  //> ["WHQcpcOj0G"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "name");
 *  //> ["Dracorex"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "unknown-key");
 *  //> ["WHQcpcOj0G"]
 */
function getDinosaursAliveMya(dinosaurs, mya, key) {
  let dinosAlive = [];
  for (let i = 0; i < dinosaurs.length; i++){
    if(key){ 
      if (dinosaurs[i].mya.length === 1){
        if ((dinosaurs[i].mya[0] - mya) <= 1 && (dinosaurs[i].mya[0] - mya) >= -1){
          dinosAlive.push(dinosaurs[i][key])
        }
      } else if(dinosaurs[i].mya.length === 2){
        if (dinosaurs[i].mya[0] >= mya && dinosaurs[i].mya[1] <= mya){
          dinosAlive.push(dinosaurs[i][key])
        }
      }
    } else {
      if (dinosaurs[i].mya.length === 1){
        if ((dinosaurs[i].mya[0] - mya) <= 1 && (dinosaurs[i].mya[0] - mya) >= -1){
          dinosAlive.push(dinosaurs[i].dinosaurId)
        }
      } else if(dinosaurs[i].mya.length === 2){
        if (dinosaurs[i].mya[0] >= mya && dinosaurs[i].mya[1] <= mya){
          dinosAlive.push(dinosaurs[i].dinosaurId)
        }
      }
    }
  }
  return dinosAlive;
}

/**
 * TIM'S CODE / CLASS NOTES
 * 
 * Pseudo Code:
 * 1. Set my return var = [];
 * 2. loop through the array and check our .mya values;
 * 3. Determine IF mya is bewtween our dinosaur .mya values;
 * 4. If an extra key was passed we need to push the dinosaur value at that key into return var;
 * * if no key was passed we will push the dinosaur id


function getDinosaursAliveMya(dinosaurs, mya, key) {
  let str = key || "dinosaurId"
  let aliveMya = [];
  for (let dino of dinosaurs){ //dino = [i] of each object in the array
    let high = dino.mya[0];
    let low = dino.mya[dino.mya.length - 1]; //in order to easily read these values later on in our code.
    if (dino.mya.length > 1){
    if(mya <= high && mya >= low){
      aliveMya.push(dino[str]);
    }
  } else if (mya === high || mya === high - 1);{
    aliveMya.push(dino[str]);
  }
}
  return aliveMya;
}
*/

module.exports = {
  getTallestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
