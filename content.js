// Remixed from
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Mandir mp3 by Kunal Kamra - Thanks 

console.log('Saffron away!');

let images = [
  "temple.jpg",
  "orange.jpg",
];

let mandir = "mandir.mp3";

let imgs = document.getElementsByTagName('img');

let auds = document.getElementsByTagName('audio');

for(let audElt of auds){
  let audiofile = mandir;
  let audURL = chrome.extension.getURL(audiofile);
  audElt.src = audURL;
  console.log(audURL);
}

for (let imgElt of imgs) {
  let r = Math.floor(Math.random() * images.length);
  let file = 'images/' + images[r];
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  console.log(url);
}
