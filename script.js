const root = document.documentElement;
const themeSwitches = document.querySelectorAll("[name=theme]");
const image = document.querySelector("img");
const titleEl = document.querySelector(".title");
const textEl = document.querySelector(".text");

const themes = {
    red: {
        src: "./img/mario.png",
        alt: "a picture of mario",
        title: "Mario",
        text: "Mario is a character created by the Japanese video game designer Shigeru Miyamoto. He is the title character of the Mario franchise and the mascot of the Japanese video game company Nintendo. Mario is an Italian plumber who resides in the Mushroom Kingdom with his younger twin brother, Luigi. Their adventures generally center on rescuing Princess Peach from the villain Bowser while using power-ups that give them different abilities."
    },
    green: {
        src: "./img/luigi.png",
        alt: "a picture of luigi",
        title: "Luigi",
        text: "Luigi (Japanese: ルイージ, Hepburn: Ruīji, pronounced [ɾɯ.iːʑi]; English: /luˈiːdʒi/ loo-EE-jee, Italian: [luˈiːdʒi]) is a fictional character featured in video games and related media released by Nintendo. Created by Japanese video game designer Shigeru Miyamoto, Luigi is portrayed as the younger fraternal twin brother and sidekick of Mario. Defined by his kind-hearted, yet cowardly demeanor, Luigi appears in many games throughout the Mario franchise, oftentimes accompanying his brother."
    },
    pink: {
        src: "./img/peach.png",
        alt: "a picture of peach",
        title: "Princess Peach",
        text: "Princess Peach Toadstool is a character in Nintendo's Mario franchise, created by Shigeru Miyamoto and introduced in the 1985 original Super Mario Bros. installment. She is the princess regnant and head of state of the Mushroom Kingdom, where she resides in her castle along with Toads."
    },
    yellow: {
        src: "./img/bowser.png",
        alt: "a picture of bowser",
        title: "Bowser",
        text: "Bowser (クッパ, Kuppa, 'Koopa'), also known as King Bowser or King Koopa, is a fictional character and the primary antagonist in Nintendo's Mario franchise. In Japan, his title is Daimaō (大魔王, 'Great Demon King'). He is the arch-nemesis of the plumber Mario, and the leader of the turtle-like Koopa race. Bowser's defining traits are his monstrous appearance with dragon-like elements, full-throated roar, fire-breathing abilities, and tyrannical personality. His ultimate goals are to kidnap Princess Peach and conquer the Mushroom Kingdom."
    },
}

themeSwitches.forEach((theme) => {
    theme.addEventListener("click", () => clickTheme(theme.id));
})

function setTheme(theme) {
    root.className = theme;
    const {src, alt, title, text} = themes[theme];
    image.src = src;
    image.alt = alt;
    titleEl.innerText = title;
    textEl.innerText = text;
}

function clickTheme(theme) {
    setTheme(theme);
    saveTheme(theme);
}

function saveTheme(theme) {
    localStorage.setItem("theme", theme);
}

function checkTheme() {
    let theme = localStorage.getItem("theme");
    if (theme) {
        setTheme(theme);
    }else {
        setTheme("pink");
        theme = "pink";
    }
    themeSwitches.forEach((themeSwitch) => {
        if (themeSwitch.id === theme) {
            themeSwitch.checked = true
        }
    })
}


document.onload = checkTheme();