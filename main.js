const textSub = document.querySelector('.subtitle');
const text = 'Desenvolvedor Front-end';
const interval = 80;

function showText() {
    const char = text.split("").reverse();
    const type = setInterval(() => {
        if (!char.length) {
            return clearInterval(type);
        }
        const next = char.pop();
        textSub.innerHTML += next;
    }, interval);
}

showText();

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}
