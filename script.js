document.getElementById("surveyForm").addEventListener("submit", function(event) {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let color = document.getElementById("color").value;
    let timePreference = document.querySelector('input[name="time"]:checked');
    let funFact = document.getElementById("funFact").value;

    let responseMessage = `
        <strong>Thanks for taking the survey, ${name}!</strong><br>
        Age: ${age}<br>
        Favorite Food: ${food}<br>
        Favorite Color: ${color}<br>
        Prefers: ${timePreference.value}<br>
        Fun Fact: ${funFact}
    `;

    let responseDiv = document.getElementById("response");
    responseDiv.innerHTML = responseMessage;
    responseDiv.classList.remove("hidden");
});