// Functions for each spesific drum sound
function claps(){
    var audio = new Audio("sounds/clap.wav");
    audio.play(); }
function hihats(){
    var audio = new Audio("sounds/hihat.wav");
    audio.play(); }
function kicks(){
    var audio = new Audio("sounds/kick.wav");
    audio.play(); }
function openhats(){
    var audio = new Audio("sounds/openhat.wav");
    audio.play(); }
function rides(){
    var audio = new Audio("sounds/ride.wav");
    audio.play(); }
function snares(){
    var audio = new Audio("sounds/snare.wav");
    audio.play(); }
function tinks(){
    var audio = new Audio("sounds/tink.wav");
    audio.play(); }
function toms(){
    var audio = new Audio("sounds/tom.wav");
    audio.play(); }

let keyBinds = new Map();
keyBinds.set("1", "clap");
keyBinds.set("2", "hihat");
keyBinds.set("3", "kick");
keyBinds.set("4", "openhat");
keyBinds.set("5", "ride");
keyBinds.set("6", "snare");
keyBinds.set("7", "tink");
keyBinds.set("8", "tom");
// "Secret" sound file, intentionally not listed
keyBinds.set("9", "lightsaber");

function keyPressed(drum){
    new Audio(`sounds/${drum}.wav`).play(); }

window.addEventListener("keypress", (e) => {
    if (keyBinds.has(e.key)) {
        keyPressed(keyBinds.get(e.key)); } } );
