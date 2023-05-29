const textSub = document.querySelector('.profile-bio-subtitle');
const text = "Desenvolvedor Front-end"
const interval = 80;

function showText(textSub, text, interval) {
    const char = text.split("").reverse();
    const type = setInterval(() => {
        if(!char.length){
            return clearInterval(type);
        }
        const next = char.pop();

        textSub.innerHTML += next;
    }, interval)
}

showText(textSub, text, interval);
