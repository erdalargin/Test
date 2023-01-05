var counter = 0;
const value = document.querySelector("#value");
azaltButton.onclick = function() {
    counter--;
    value.textContent = counter;
}
sifirlaButton.onclick = function() {
    counter = 0;
    value.textContent = counter;
}
artirButton.onclick = function() {
    counter++;
    value.textContent = counter;
}