// Your code here
const API = 'http://localhost:3000/characters'
const voteForm = document.querySelector('#votes-form')
voteForm.addEventListener('submit', addVotes)

fetch(API)
.then(resp => resp.json())
.then(renderAnimalsToScreen);

function renderAnimalsToScreen(animal) {
  animal.forEach(renderAnimals)
};

function renderAnimals(animal) {
  const animalDiv = document.getElementById('character-bar');
  const animalName = document.createElement('span')

  animalName.textContent = animal.name;
  animalDiv.append(animalName)

  animalName.addEventListener('click', (e) => renderDetails(animal))
}

function renderDetails(animal) {
  const animalDetail = document.querySelector('#image');
  const animalName = document.querySelector('#name');

  const animalVotes = document.querySelector('#vote-count');
  //const voteSubmit = document.querySelector('#voteSubmit')
  //const voteValue = document.querySelector('#votes')

  animalDetail.src = animal.image;
  animalDetail.alt = animal.image;
  animalName.textContent = animal.name;
  animalVotes.textContent = animal.votes

};

function addVotes(e) {
  e.preventDefault()
  const newVotes = {
    votes: e.target.votes.value,

  };
  renderDetails(newVotes)
};


