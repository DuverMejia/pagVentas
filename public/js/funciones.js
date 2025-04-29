const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const openModalButton = document.getElementById('AbrirModal');

openModalButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
    console.log('Modal opened');
});

// const openModal = () =>{
//     modal.classList.remove('hidden')
//     console.log('Modal opened')};

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});
// function openModal(){console.log('Modal opened')}

