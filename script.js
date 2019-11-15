function generateName () {
  var boyNameChecked = document.getElementById('boy-name').checked;
  var girlNameChecked = document.getElementById('girl-name').checked;
  var firstName;
  var lastName = document.getElementById('last-name').value;
  if (!lastName) {
    alert('forget your name?');
    return;
  }
  if (boyNameChecked) {
    firstName = getRandEl(boyNames);
    middleName = randFilteredElem(boyNames,firstName); 
  } else if (girlNameChecked) {
    firstName = getRandEl(girlNames);
    middleName = randFilteredElem(girlNames,firstName);
  } else {
    alert('We would recommend picking a boy or girls name to help the process continue... if not you can just look at the background its quite lovely!');
    return;
  }
  var display = document.getElementById('baby-name');
  display.innerText = firstName + '  ' + middleName + '  ' + lastName;
}
  
function changeBackground (hex) {
  var display = document.getElementById('baby-name');
  display.innerText = '';
}
  
  var girlNames = [
      'Brittney',
      'Amy',
      'Alice',
      'Aria',
      'Perrin',
      'Hope',
      'Sara',
      'Rachel'];
  
  var boyNames = [
      'Thorn',
      'Torstein',
      'Thad',
      'Bjorn',
      'Lorenzo',
      'Luis',
      'Lewis',
      'Justin',
      'Leo',
      'JuanJuan',
      'Luis',
      'Camden',
      'Chandler',
      'Ross',
      'Joey'];  

function randFilteredElem(arr,filter) {
  var randEl = getRandEl(arr);
  while (randEl === filter){
    randEl = getRandEl(arr);
  }
  return randEl;
}

function getRandEl(arr) {
  return arr[getRandNum(0, arr.length - 1)];
}

function getRandNum(min,max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}