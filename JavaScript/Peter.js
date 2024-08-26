
var button = 1;

function number(button) {
    let profileDiv = document.getElementById('guy');
    
    switch (button) {
        case 1:
            profileDiv.classList.remove('hidden');
            break;
        default:
            profileDiv.classList.toggle('hidden');
    }
}

