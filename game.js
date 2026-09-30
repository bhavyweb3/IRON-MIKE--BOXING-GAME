let playerHealth = 100;
let enemyHealth = 100;

let playerStamina = 100;

let time = 60;

let gameTimer;

let canPunch = true;

let isBlocking = false;

let enemyCanAttack = true;

let combo = 0;

let trainingMode = false;


// ===============================
// DIFFICULTY
// ===============================

let difficulty = "medium";

let enemyAttackTime = 5;

let enemyDamage = 5;


// ===============================
// SOUND
// ===============================

function playSound(id) {

    let sound = document.getElementById(id);

    sound.currentTime = 0;

    sound.play();
}


// ===============================
// START GAME
// ===============================

function startGame(selectedDifficulty) {

    trainingMode = false;

    difficulty = selectedDifficulty;


    // EASY

    if (difficulty === "easy") {

        enemyAttackTime = 7;

        enemyDamage = 4;
    }


    // MEDIUM

    if (difficulty === "medium") {

        enemyAttackTime = 5;

        enemyDamage = 5;
    }


    // HARD

    if (difficulty === "hard") {

        enemyAttackTime = 3;

        enemyDamage = 7;
    }


    startMatch();

}


// ===============================
// START TRAINING
// ===============================

function startTraining() {

    trainingMode = true;

    startMatch();

}


// ===============================
// START MATCH
// ===============================

function startMatch() {

    document
        .getElementById("homeScreen")
        .classList.add("hidden");


    document
        .getElementById("resultScreen")
        .classList.add("hidden");


    document
        .getElementById("gameScreen")
        .classList.remove("hidden");


    playerHealth = 100;

    enemyHealth = 100;

    playerStamina = 100;

    time = 60;

    combo = 0;


    canPunch = true;

    isBlocking = false;

    enemyCanAttack = true;


    updateHealth();

    updateStamina();

    updateCombo();


    // ===============================
    // TRAINING MODE
    // ===============================

    if (trainingMode) {

        document.getElementById("modeText").innerText =
            "TRAINING MODE";


        document.getElementById("timer").innerText =
            "∞";


        document.getElementById("message").innerText =
            "TRAIN!";


        return;
    }


    // ===============================
    // FIGHT MODE
    // ===============================

    document.getElementById("modeText").innerText =
        difficulty.toUpperCase() + " MODE";


    document.getElementById("timer").innerText =
        time;


    document.getElementById("message").innerText =
        "FIGHT!";


    gameTimer =
        setInterval(countDown, 1000);
}


// ===============================
// PLAYER PUNCH
// ===============================

function playerPunch(side) {

    if (!canPunch) {
        return;
    }


    if (isBlocking) {
        return;
    }


    if (playerStamina < 20) {

        document.getElementById("message").innerText =
            "LOW STAMINA!";

        return;
    }


    canPunch = false;


    let player =
        document.querySelector(".playerBoxer");


    let enemy =
        document.querySelector(".enemyBoxer");


    let message =
        document.getElementById("message");


    // ===============================
    // STAMINA
    // ===============================

    playerStamina =
        playerStamina - 20;


    updateStamina();


    // ===============================
    // COMBO
    // ===============================

    combo =
        combo + 1;


    updateCombo();


    // ===============================
    // SOUND
    // ===============================

    playSound("punchSound");


    // ===============================
    // ANIMATION
    // ===============================

    if (side === "left") {

        player.classList.add("punchLeft");

    } else {

        player.classList.add("punchRight");
    }


    // ===============================
    // DAMAGE
    // ===============================

    let damage = 10;


    if (combo >= 3) {

        damage = 20;

        message.innerText =
            "COMBO HIT!";

    } else {

        message.innerText =
            "HIT!";
    }


    enemyHealth =
        enemyHealth - damage;


    if (enemyHealth < 0) {

        enemyHealth = 0;
    }


    updateHealth();


    enemy.classList.add("hit");


    playSound("hitSound");


    // ===============================
    // SCREEN SHAKE
    // ===============================

    document
        .getElementById("gameScreen")
        .classList.add("shake");


    // ===============================
    // CHECK WIN
    // ===============================

    if (!trainingMode && enemyHealth <= 0) {

        endGame(
            "YOU WIN!",
            "You knocked out the opponent!"
        );
    }


    // ===============================
    // REMOVE ANIMATION
    // ===============================

    setTimeout(function () {

        player.classList.remove("punchLeft");

        player.classList.remove("punchRight");

        enemy.classList.remove("hit");


        document
            .getElementById("gameScreen")
            .classList.remove("shake");

    }, 300);


    // ===============================
    // PUNCH COOLDOWN
    // ===============================

    setTimeout(function () {

        canPunch = true;

    }, 500);


    // ===============================
    // RESET COMBO
    // ===============================

    setTimeout(function () {

        combo = 0;

        updateCombo();

    }, 2000);
}


// ===============================
// BLOCK
// ===============================

function playerBlock() {

    if (isBlocking) {
        return;
    }


    isBlocking = true;


    let player =
        document.querySelector(".playerBoxer");


    let message =
        document.getElementById("message");


    player.classList.add("blocking");


    message.innerText =
        "BLOCK!";


    playSound("blockSound");


    setTimeout(function () {

        isBlocking = false;

        player.classList.remove("blocking");


        if (trainingMode) {

            message.innerText =
                "TRAIN!";

        } else {

            message.innerText =
                "FIGHT!";
        }

    }, 1000);
}


// ===============================
// ENEMY ATTACK
// ===============================

function enemyAttack() {

    if (trainingMode) {
        return;
    }


    if (!enemyCanAttack) {
        return;
    }


    if (enemyHealth <= 0 ||
        playerHealth <= 0) {

        return;
    }


    enemyCanAttack = false;


    let enemy =
        document.querySelector(".enemyBoxer");


    let message =
        document.getElementById("message");


    enemy.classList.add("enemyPunch");


    // ===============================
    // BLOCKED
    // ===============================

    if (isBlocking) {

        playSound("blockSound");


        playerHealth =
            playerHealth - 2;


        message.innerText =
            "BLOCKED!";
    }


    // ===============================
    // NORMAL HIT
    // ===============================

    else {

        playSound("hitSound");


        playerHealth =
            playerHealth - enemyDamage;


        message.innerText =
            "YOU GOT HIT!";


        document
            .getElementById("gameScreen")
            .classList.add("shake");
    }


    updateHealth();


    setTimeout(function () {

        enemy.classList.remove("enemyPunch");


        document
            .getElementById("gameScreen")
            .classList.remove("shake");

    }, 300);


    // ===============================
    // PLAYER LOSES
    // ===============================

    if (playerHealth <= 0) {

        playerHealth = 0;

        updateHealth();


        endGame(
            "YOU LOSE!",
            "The opponent knocked you out."
        );
    }


    setTimeout(function () {

        enemyCanAttack = true;

    }, 1200);
}


// ===============================
// STAMINA RECOVERY
// ===============================

function recoverStamina() {

    if (playerStamina < 100) {

        playerStamina =
            playerStamina + 5;


        if (playerStamina > 100) {

            playerStamina = 100;
        }


        updateStamina();
    }
}


// ===============================
// UPDATE HEALTH
// ===============================

function updateHealth() {

    document.getElementById("playerHealth").style.width =
        playerHealth + "%";


    document.getElementById("enemyHealth").style.width =
        enemyHealth + "%";
}


// ===============================
// UPDATE STAMINA
// ===============================

function updateStamina() {

    document.getElementById("playerStamina").style.width =
        playerStamina + "%";
}


// ===============================
// UPDATE COMBO
// ===============================

function updateCombo() {

    document.getElementById("combo").innerText =
        "COMBO: " + combo;
}


// ===============================
// TIMER
// ===============================

function countDown() {

    if (trainingMode) {
        return;
    }


    time--;


    document.getElementById("timer").innerText =
        time;


    // ===============================
    // STAMINA RECOVERY
    // ===============================

    recoverStamina();


    // ===============================
    // ENEMY ATTACK
    // ===============================

    if (time % enemyAttackTime === 0) {

        enemyAttack();
    }


    // ===============================
    // TIME OVER
    // ===============================

    if (time <= 0) {

        if (playerHealth > enemyHealth) {

            endGame(
                "YOU WIN!",
                "Time is over. You had more health!"
            );

        }

        else if (enemyHealth > playerHealth) {

            endGame(
                "YOU LOSE!",
                "Time is over. The opponent had more health!"
            );

        }

        else {

            endGame(
                "DRAW!",
                "Both fighters have the same health!"
            );
        }
    }
}


// ===============================
// END GAME
// ===============================

function endGame(title, message) {

    clearInterval(gameTimer);


    if (title === "YOU WIN!") {

        playSound("winSound");
    }


    document
        .getElementById("gameScreen")
        .classList.add("hidden");


    document
        .getElementById("resultScreen")
        .classList.remove("hidden");


    document.getElementById("resultTitle").innerText =
        title;


    document.getElementById("resultMessage").innerText =
        message;
}


// ===============================
// EXIT GAME
// ===============================

function goHome() {

    clearInterval(gameTimer);


    document
        .getElementById("gameScreen")
        .classList.add("hidden");


    document
        .getElementById("resultScreen")
        .classList.add("hidden");


    document
        .getElementById("homeScreen")
        .classList.remove("hidden");
}


// ===============================
// RESTART
// ===============================

function restartGame() {

    clearInterval(gameTimer);


    if (trainingMode) {

        startTraining();

    } else {

        startGame(difficulty);
    }
}


// ===============================
// KEYBOARD CONTROLS
// ===============================

document.addEventListener(
    "keydown",
    function(event) {


        // A = LEFT PUNCH

        if (event.key.toLowerCase() === "a") {

            playerPunch("left");
        }


        // D = RIGHT PUNCH

        if (event.key.toLowerCase() === "d") {

            playerPunch("right");
        }


        // SPACE = BLOCK

        if (event.code === "Space") {

            event.preventDefault();

            playerBlock();
        }

    }
);

