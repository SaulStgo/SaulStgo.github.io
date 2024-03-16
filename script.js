const buttonCS = document.getElementById('Change');
const textV = document.getElementById('text view');

buttonCS.addEventListener('click', () => {
    const text = textV.value;
    alert('The Page say: ' + text);
});
