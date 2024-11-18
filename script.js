function speak(){
    var text=document.getElementById('input').value;
    var commit= new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(commit);
} 