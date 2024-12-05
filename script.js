function show(var1) {
    // Hide all divs
    const divs = document.querySelectorAll('.box');
    divs.forEach(div => div.classList.remove('show'));

    // Show the selected div
    document.getElementById(var1).classList.add('show');
}
