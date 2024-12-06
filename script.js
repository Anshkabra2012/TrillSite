// Modal functionality
function showDetails(title, description) {
    const modal = document.getElementById('modal');
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-body').innerText = description;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
