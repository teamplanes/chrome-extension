import { printLine } from './modules/print';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

var loggedInUser;

chrome.extension.sendMessage({}, function (response) {
  loggedInUser = response.email;
});

console.log('Got user:', loggedInUser);
