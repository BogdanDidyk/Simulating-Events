function getRandomIndex(probabilities) {
    const sum = probabilities.reduce((item, acc) => item + acc, 0);
    const len = probabilities.length;
    const rnd = Math.random();
    let probability = 0;
    let i = 0;

    while (i < len && rnd >= (probability += probabilities[i] / sum)) i++;

    return i;
}

function simulateEvent(events, probabilities) {
    return events[getRandomIndex(probabilities)];
}


(function() {
    const events = [
        "You have sold 3 ounces of silver!",
        "You have bought an ounce of gold.",
        "You have given your friend an amethyst.",
        "You have found a diamond!"
    ];
    const probabilities = [0.4, 0.3, 0.2, 0.1];
    const event = simulateEvent(events, probabilities);
    console.log("Your random event:", event);
    console.log("_".repeat(20), "\n");
})();


//Funny example
(function() {
    const rewards = [10, -25, 40, -35, -55, 105];
    const probabilities = [0.3, 0.2, 0.2, 0.1, 0.15, 0.05];
    let totalEarning = 0;
    setInterval(() => {
        const currentCasinoEarning = simulateEvent(rewards, probabilities);
        totalEarning += currentCasinoEarning;
        const text = (currentCasinoEarning < 0) ? "lose" : "won";
        const style = (currentCasinoEarning < 0) ? "color:red;" : "color:green;";
        console.log(`You %c${text}%c ${currentCasinoEarning}$, total = ${totalEarning}$`, style, "");
    }, 1500);
})();