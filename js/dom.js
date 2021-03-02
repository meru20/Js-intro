console.log(window);

/*****selector*
 * tool that allows us to grab data from our document
 * in the form of nodes,elements, etc******* */

//getElementById()

let firstHeading = document.getElementById('main-heading');
console.log('first heading :',firstHeading);

//getElementByName()
let rowClasses = document.getElementsByClassName('row');
console.log('row class', rowClasses);

//getElementByTagName()
let divTags = document.getElementsByTagName('div');
console.log('div tags', divTags);
let spanTags = document.getElementsByTagName('span');
console.log('span tags',spanTags);

//querySelector()================================================> check it out
//takes the first element of its kind only
let divContainer = document.querySelector('.container');
console.log('div container', divContainer)
let mainIdHeading = document.querySelector('#main-Heading')
console.log(mainIdHeading);
let spanTag = document.querySelector('span');
console.log(spanTag);

//querySelectorAll()
let allDivTags = document.querySelectorAll('div');
console.log('all div tags',allDivTags);

let allRowClasses = document.querySelectorAll('.row');
console.log('all row classes',allRowClasses);

let docObject = {
    html: {
        head: {},
        body: {
            nav:{},
            div:{
                div:{}
            },
            footer:{}
        }
    }
}