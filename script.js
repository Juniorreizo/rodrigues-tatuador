function showTab(id, event) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));

    document.getElementById(id).classList.add('active');
    event.target.classList.add('active');
}

function openModal() {
    document.getElementById('modal').classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}
