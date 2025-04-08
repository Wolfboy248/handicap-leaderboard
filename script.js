const ranks = document.querySelector('#ranks');

const scores = [
    {name: "Mads", time: "4:36", video: "Coming soon", day: "08/04/25"},
    {name: "Mads", time: "4:36", video: "Coming soon", day: "08/04/25"},
]

let delay = 0.2;

scores.forEach((score, i) => {
    const container = document.createElement("div");
    const name = document.createElement("span");
    const time = document.createElement("span");
    const video = document.createElement("span");
    const day = document.createElement("span");

    delay += 0.05;

    container.classList.add("rank");
    container.style.animationDelay = delay + "s";

    name.innerText = score.name;
    time.innerText = score.time;
    video.innerText = score.video;
    day.innerText = score.day;

    container.appendChild(name);
    container.appendChild(time);
    container.appendChild(video);
    container.appendChild(day);
    ranks.appendChild(container);
})
