const choices = {
    0: 'rock',
    1: 'paper',
    2:'scissors'
}

const modal = document.getElementById("result-popup");
const resultEl = document.querySelector('.result');

const playGame = (userChoice) => {
    const systemChoice = choices[randomGenerator()];
    document.querySelectorAll('.item').forEach(item => {
        item.classList.remove('selected');
    })
    const selectedImage = document.querySelector('.'+userChoice);
    selectedImage.classList.add('selected');
    console.log("System Choice", systemChoice);
    console.log("User Choice", userChoice);
    let resultContent = 'Result Goes here.....!'
    if (systemChoice === userChoice) {
        console.log("Tie");
        resultContent = "It's a tie !!!!. Kepp trying...";
    } else {
        if(systemChoice === 'rock') {
            if(userChoice === 'paper') {
                console.log('User Wins')
                resultContent = 'You won !!! Congratulations';
            } else {
                if (userChoice === 'scissors') {
                    console.log('System Wins');
                    resultContent = 'You Lost !!! Better luck next Time';
                }
            }
        } else {
            if (systemChoice === 'paper') {
                if (userChoice === 'rock') {
                    console.log('System Wins')
                    resultContent = 'You Lost !!! Better luck next Time';
                } else {
                    if (userChoice=== 'scissors') {
                        console.log('User Wins')
                        resultContent = 'You won !!! Congratulations';
                    }
                }
            } else {
                if (systemChoice === 'scissors') {
                    if (userChoice === 'rock') {
                        console.log('User Wins')
                        resultContent = 'You won !!! Congratulations';
                    } else {
                        if (userChoice=== 'paper') {
                            console.log('System Wins')
                            resultContent = 'You Lost !!! Better luck next Time';
                        }
                    }
                }
            }
        }
    }
    resultEl.innerHTML = resultContent;
    modal.style.display = "block";
}

const closeModal = () => {
    modal.style.display = "none";
}

const randomGenerator = (max = 3) => {
    return Math.floor(Math.random() * Math.floor(max));
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }