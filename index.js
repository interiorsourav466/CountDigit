document.addEventListener("DOMContentLoaded", function() {
    count = 0;

    const CounterDisplay = document.getElementById("counter-display");
    const CounterButton = document.getElementById("counter-button");

    CounterButton.addEventListener("click", function() {
        count++;
        CounterDisplay.textContent = `You clicked ${count} times`
    })
})