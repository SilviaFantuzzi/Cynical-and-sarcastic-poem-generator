function generatePoem(event) {
    event.preventDefault();

    new Typewriter ("#poem", {
    strings: "We chase success with fervent strength, but find that it fades into the night. For wealth and fame we sacrifice our souls, our morals, our very vice. So let's drink to the cynic's creed, to the bitter truths, let's all join. Because life is a joke, a twisted joke, in this cynical and sarcastic world.",
    autoStart: true,
    delay: 1,
    cursor:"",
    });
   
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);