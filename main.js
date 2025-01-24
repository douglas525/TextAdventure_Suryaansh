/*
Enter the name of your game into the string assigned to the gameName variable. 
Enter your name and the name of any collaborators into the string assigned to the creator variable. 
*/
let gameName = "Dungeon Escape";
let creator = "Suryaansh Sharma";

// Display game and creator names
let gameNameContainer = document.getElementById("gameNameContainer");
gameNameContainer.textContent += gameName;

let NameContainer = document.getElementById("NameContainer");
NameContainer.textContent += creator;

/*----------
Create a new instance of the Text Game Engine. 
*/
let ng = new TextGameEngine();

/* ----------
Create a function named Start that will run when the player starts the game.
*/
let Start = function () {
    ng.setText("You wake up in a dimly lit cell. The air is damp, and the faint sound of footsteps echoes in the distance. Search for a way out?");
    ng.characterDelay = 25; // Controls typing delay
    ng.setImage("Images/dungeon image.png"); // Placeholder for your start image
    ng.setOptions([
        new GameOption("Yes", () => ng.setScene(DarkHallway)),
        new GameOption("No", () => {
            ng.setText("You sit in despair, waiting for something to change, but nothing does. Game Over.");
            ng.setOptions([
                new GameOption("Start Over", () => Start())
            ]);
        })
    ]);
};

/* ----------
Add Scenes for the game.
*/
let DarkHallway = new Scene({
    text: "You step into a dark hallway. Shadows flicker on the walls. Do you explore nearby cells before moving on?",
    image: "Images/pixel-art-hallway-with-white-door_811279-122120.png",
    audio: "Audio/Music/mixkit-scary-graveyard-wind-1157.wav",
    options: [
        new GameOption("Yes", () => ng.setScene(NearbyCell)),
        new GameOption("No", () => ng.setScene(MainCorridor))
    ]
});

let NearbyCell = new Scene({
    text: "You search a nearby cell and find a small metal key lying on the ground. Do you take it?",
    audio: "Audio/Music/Deception - Frank_Danna.wav",
    image: "Images/pixel-art-depicting-classic-jail-cell-with-central-bench_811279-51421.avif",
    options: [
        new GameOption("Yes", () => ng.setScene(LockedDoor)),
        new GameOption("No", () => {
            ng.setText("Without the key, you have no way to escape. Game Over.");
            ng.setOptions([
                new GameOption("Start Over", () => Start())
            ]);
        })
    ]
});
let Escape = new Scene({
    text: "You use the key to unlock the door. You step out into the open air and escape the dungeon. Congratulations, you've escaped!",
    audio: "Audio/SoundEffects/birds-ambiance-204513.mp3",
    image: "Images/uhksXGc8QImhneKjQz4p9g.webp",
    options: [
        new GameOption("Start Over", () => Start())
    ]
});
let LockedDoor = new Scene({
    text: "You find a locked door. Will you use the key to escape?",
    audio: "Audio/Music/tense-crime-atmosphere-for-films-and-media-15s-237444.mp3",
    image: "Images/QbyScbgsRuaA5KytF4mthQ.webp",
    options: [
        new GameOption("Yes", () => ng.setScene(Escape)),
        new GameOption("No", () => {
            ng.setText("You decide not to use the key. Without it, you're stuck. Game Over.");
            ng.setOptions([
                new GameOption("Start Over", () => Start())
            ]);
        })
    ]
});

let MainCorridor = new Scene({
    text: "The hallway opens into a main corridor. Do you follow the sound of footsteps or search for a hidden passage?",
    audio: "",
    image: "Images/pixel-art-video-game-hallway-dark-mysterious-room_811279-43972.avif",
    options: [
        new GameOption("Follow footsteps", () => ng.setScene(EncounterGuard)),
        new GameOption("Search for hidden passage", () => ng.setScene(SecretPassage))
    ]
});

let EncounterGuard = new Scene({
    text: "You follow the footsteps and encounter a guard. What will you do?",
    audio: "Audio/Music/horror-train-15221.mp3",
    image: "Images/download.png",
    options: [
        new GameOption("Fight", () => {
            ng.setText("You try to fight the guard but are overpowered. Game Over.");
            ng.setOptions([
                new GameOption("Start Over", () => Start())
            ]);
        }),
        new GameOption("Hide", () => {
            ng.setText("You hide in the shadows, and the guard walks past you, unaware. What next?");
            ng.setOptions([
                new GameOption("Continue", () => ng.setScene(SecretPassage))
            ]);
        })
    ]
});

let SecretPassage = new Scene({
    text: "You find a hidden passage. At the end of it, there's a sturdy door. Do you open it?",
    audio: "Audio/Music/night-whisper-247377.mp3",
    image: "Images/download.jpeg",
    options: [
        new GameOption("Yes", () => {
            ng.setText("The door opens, and you step out into the fresh air. Freedom at last! You have escaped the dungeon. Congratulations!");
            ng.setOptions([
                new GameOption("Start Over", () => Start())
            ]);
        }),
        new GameOption("No", () => {
            ng.setText("You hesitate for too long, and the guards find you. Game Over.");
            ng.setOptions([
                new GameOption("Start Over", () => Start())
            ]);
        })
    ]
});

/* ----------
DO NOT REMOVE OR EDIT ANY CODE BELOW THIS COMMENT! The game is run by calling the Start function. 
*/
Start();
