function showQuestion() {
    document.getElementById('question').classList.remove('hidden');
}

function respondYes() {
    document.getElementById('response').innerHTML = "<h2>Eu sabia que você diria sim! <3</h2>";
    document.getElementById('response').classList.remove('hidden');
    document.getElementById('question').classList.add('hidden');
}

function respondNo() {
    document.getElementById('response').innerHTML = "<h2>Ah, que pena... :(</h2>";
    document.getElementById('response').classList.remove('hidden');
    document.getElementById('question').classList.add('hidden');
}
