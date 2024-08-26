
  function number(buttonValue) {
    const channel = document.getElementById('3');
    
    switch(buttonValue) {
      case 1:
        channel.classList.add('channel01');
        channel.classList.remove('channel02');
        break;
      default:
        channel.classList.remove('channel01');
        channel.classList.add('channel02');
        break;
    }
  }