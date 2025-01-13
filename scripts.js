function displayRandomNumbers() {
    let count = 0;
    let intervalTime = 100;
    let interval = setInterval(generateNumber, intervalTime);
    const generatedNumbers = new Set();
    let titles = [{name:'common', rarity:1}, {name:'uncommon', rarity:2}, {name:'rare', rarity:3}, {name:'mythic', rarity:4}, {name:'5r', rarity:4}, {name:'6r', rarity:4}, {name:'7r', rarity:4}, {name:'8r', rarity:4}, {name:'9r', rarity:4}, {name:'10r', rarity:4}];

    function generateNumber() {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * 10); // Generate a random number between 0 and 10
        } while (generatedNumbers.has(randomNumber));
        
        generatedNumbers.add(randomNumber);
        console.log(titles[randomNumber].name);
        document.getElementById('titleDisplay').innerHTML = titles[randomNumber].name;
        count++;
       
        clearInterval(interval);
        if (count >= 25) {
            intervalTime += 5;
            if (count >= 35) {
                intervalTime += 9;
                if (count >= 40) {
                    intervalTime += 15;
                    if (count >= 42) {
                        intervalTime += 20;
                        if (count >= 45) {
                            clearInterval(interval);
                            return;
                        }
                    }
                }
            }
        } else {
            intervalTime += 1.75;
        }
        interval = setInterval(generateNumber, intervalTime);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function bgFade(){
    document.body.style.animation = "fade 4s cubic-bezier(0.06, 0.98, 0.41, 0.93) 0s 1";
    sleep(4500).then(() => {document.body.style.animation = "";});
}

document.getElementById('randomize').addEventListener('click', displayRandomNumbers);
document.getElementById('bgFade').addEventListener('click', bgFade);
