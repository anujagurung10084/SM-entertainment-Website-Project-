// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customerName = document.getElementById('customername');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

// It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.

// Willy the Goblin
// Big Daddy
// Father Christmas

// the soup kitchen
// Disneyland
// the White House

// spontaneously combusted
// melted into a puddle on the sidewalk
// turned into a slug and crawled away

let storyText =
  "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

let insertY = ["the soup kitchen", "Disneyland", "the White House"];

let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];


// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;

    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    var newStory = newStory.replace(':insertx:', xItem);
    var newStory = newStory.replace(':inserty:', yItem);
    var newStory = newStory.replace(':insertz:', zItem);

    var newStory = newStory.replace(':insertx:', xItem);

    if(customerName.value !== '') {
      let name = customerName.value;
      newStory = newStory.replace('Bob', name);
    }

    if(document.getElementById("uk").checked) {

    var weight = Math.floor(300 * 0.0714286) + ' stone';
    var temperature = Math.floor((94 - 32) * (5/9)) + ' centigrade';
    
    var newStory = newStory.replace('94 farenheit', temperature);
    var newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}