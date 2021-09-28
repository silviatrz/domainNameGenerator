/* eslint-disable */
import "bootstrap";
import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

let pronoun = ["the", "our", "your", "their", "a"];
let adj = ["great", "big", "amazing", "awesome", "cool"];
let noun = ["jogger", "racoon", "dolphin", "fox", "platypus"];
let extension = [".com", ".net", ".es", ".us", ".io"];

const generateDomain = (pronoun, adj, noun, extension) => {
  let domain = "";

  pronoun.forEach(p => {
    adj.forEach(a => {
      noun.forEach(n => {
        extension.forEach(e => {
          domain += "<li>" + p + a + n + e + "</li>";
        });
      });
    });
  });

  return domain;
};

console.log(generateDomain(pronoun, adj, noun, extension));
document.querySelector("#domains").innerHTML = generateDomain(
  pronoun,
  adj,
  noun,
  extension
);
