# 🥊 IRON MIKE

### A Simple Browser-Based Boxing Game

**IRON MIKE** is a browser-based boxing game developed using **HTML, CSS, and JavaScript**. The game allows the player to fight an opponent using punches, blocking, stamina management, and combos.

The project was built with a simple and readable structure so that the code is easy to understand, modify, and explain.

---

## 🎮 Game Features

* 🥊 Left and right punches
* 🛡️ Blocking system
* ⚡ Stamina system
* 🔥 Punch combos
* ❤️ Player and opponent health
* 🤖 Automatic enemy attacks
* 🎚️ Easy, Medium, and Hard difficulty
* 🏋️ Training Mode
* 🥊 Fight Mode
* ⏱️ 60-second fight timer
* 🔊 Punch, hit, block, and win sounds
* 💥 Punch and hit animations
* 📳 Screen shake effects
* 🏆 Win, Lose, and Draw results
* 🔄 Restart and Home options

---

## 🎯 Game Modes

### 🏋️ Training Mode

Training Mode allows the player to practice punching, blocking, and combos without a limited fight timer.

### 🥊 Fight Mode

Fight Mode is a timed battle against an automatically attacking opponent.

The fight lasts for **60 seconds**.

At the end of the fight, the result can be:

* 🏆 Win
* ❌ Lose
* 🤝 Draw

---

## 🎚️ Difficulty Levels

IRON MIKE includes three difficulty levels:

| Difficulty | Enemy Attack Frequency | Damage        |
| ---------- | ---------------------- | ------------- |
| Easy       | Every 7 seconds        | 4 damage      |
| Medium     | Every 5 seconds        | 5 damage      |
| Hard       | More frequent attacks  | Higher damage |

Higher difficulty levels make the opponent attack more frequently and deal more damage.

---

## 🎮 Controls

| Key     | Action      |
| ------- | ----------- |
| `A`     | Left Punch  |
| `D`     | Right Punch |
| `SPACE` | Block       |

Use punches carefully because attacks consume stamina.

---

## 🔥 Combo System

The game includes a simple combo system.

Successful consecutive punches build a combo.

The **third combo hit deals extra damage**, giving the player an advantage when attacks are timed correctly.

---

## ❤️ Health & Stamina

### Health

Both the player and opponent have health bars.

Taking damage reduces health.

The match ends when the fight timer finishes or the game determines the final result based on the fighters' health.

### Stamina

Punching uses stamina.

The player needs to manage stamina instead of continuously attacking.

---

## 🤖 Enemy System

The opponent can automatically attack the player.

Enemy behavior changes according to the selected difficulty:

* **Easy** → slower attacks and lower damage
* **Medium** → faster attacks and increased damage
* **Hard** → more frequent and stronger attacks

This makes each difficulty level feel different without using complex game frameworks.

---

## 🔊 Sound & Effects

IRON MIKE includes simple audio and visual effects to make the game more interactive.

### Sounds

* Punch sound
* Hit sound
* Block sound
* Win sound

### Visual Effects

* Punch animations
* Hit animations
* Screen shake
* Health and stamina updates
* Fight result screen

---

## 🛠️ Technologies Used

### Frontend

* **HTML5** — Game structure
* **CSS3** — Styling, layout and animations
* **JavaScript** — Game logic and interactions

No external game engine or unnecessary framework is used.

---

## 📁 Project Structure

```text
IRON-MIKE/
│
├── index.html
├── style.css
├── game.js
│
└── assets/
    ├── images/
    │   └── ring.jpg
    │
    └── sounds/
        ├── punch.mp3
        ├── hit.mp3
        ├── block.mp3
        └── win.mp3
```

---

## ▶️ How to Run

IRON MIKE is a browser-based project, so no special installation is required.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/iron-mike.git
```

### 2. Open the project folder

```bash
cd iron-mike
```

### 3. Run the game

Open:

```text
index.html
```

in a web browser.

You can also open the project using **VS Code** and run it with a local development server.

---

## 🕹️ How to Play

1. Open the game.
2. Select the game mode.
3. Choose a difficulty level.
4. Start the fight.
5. Use `A` and `D` to punch.
6. Use `SPACE` to block.
7. Manage your stamina.
8. Try to build combos.
9. Defeat the opponent before the fight ends.

---

## 📌 Project Purpose

The main purpose of IRON MIKE was to create a simple interactive browser game while practicing:

* JavaScript programming
* DOM manipulation
* Event handling
* Timers
* Game state management
* Health and stamina systems
* CSS animations
* Audio integration
* Basic game logic

---

## 📚 What I Learned

Through this project, I worked with:

* JavaScript event listeners
* Keyboard controls
* Timers and intervals
* Dynamic HTML updates
* Health and stamina calculations
* Game states
* Difficulty-based logic
* CSS animations
* Audio playback
* Organizing a small web project

---

## 🚀 Future Improvements

Some possible improvements for future versions include:

* More characters
* Additional boxing arenas
* More attack combinations
* Character selection
* Improved enemy AI
* Additional sound effects
* Mobile/touch controls
* More game modes

---

## 🥊 IRON MIKE

> **Train. Fight. Improve.**

A simple boxing game built with **HTML, CSS and JavaScript**.
