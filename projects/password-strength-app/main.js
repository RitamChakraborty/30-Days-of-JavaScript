const strength = document.querySelector('#strength');

document.querySelector('#input').addEventListener('input', (e) => {
    const value = e.target.value;

    if (!value) {
        setStrength('none');
        return;
    }

    const hardPasswordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-]).{8,}$');
    const mediumPasswordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z]).{8,}$');

    if (hardPasswordRegex.test(value)) {
        setStrength('strong');
    } else if (mediumPasswordRegex.test(value)) {
        setStrength('medium');
    } else {
        setStrength('weak');
    }
});

function setStrength(index) {
    switch (index) {
        case 'weak': {
            document.documentElement.style.setProperty("--color", "red");
            strength.textContent = "Password is weak";
            break;
        }
        case 'medium': {
            document.documentElement.style.setProperty("--color", "yellow");
            strength.textContent = "Password is medium";
            break;
        }
        case 'strong': {
            document.documentElement.style.setProperty("--color", "green");
            strength.textContent = "Password is hard"
            break;
        }
        default: {
            document.documentElement.style.setProperty("--color", "#AFAFAF");
            strength.textContent = '';
        }
    }
}