const choices = ['rock', 'paper', 'scissors'];

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        document.getElementById('user-choice').querySelector('span').textContent = userChoice;
        document.getElementById('computer-choice').querySelector('span').textContent = computerChoice;

        const result = determineWinner(userChoice, computerChoice);
        document.getElementById('game-result').querySelector('span').textContent = result;
    });
});

function determineWinner(user, computer) {
    if (user === computer) {
        return "It's a tie!";
    } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'scissors' && computer === 'paper') ||
        (user === 'paper' && computer === 'rock')
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}
