function displayPoem(response) {
    new Typewriter ("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor:"",
   });
}



function generatePoem(event) {
    event.preventDefault();
    
   let instructionInput= document.querySelector("#user-instruction");
   let apiKey = "82907134b2b83789tof8b32d26bc6a4c";
   let prompt= `make cynical and sarcastic poem about the ${instructionInput.value}`;
   let context= `make cynical and sarcastic poem that make people laugh and separate each line with a <br />.i know you can do it because you are too funny and sarcastic`;
   let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
   let poemElement = document.querySelector("#poem");
   poemElement.innerHTML = `<div class="generating">⏳ Generating the poem`;
   
   axios.get(apiUrl).then(displayPoem);
   
   
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);