document.getElementById("option-a").addEventListener("click", function() {
    document.getElementById("result").innerHTML = document.getElementById("hidden-text-a").innerHTML;
    document.querySelector(".textoConteudo").style.display = "none";
    document.querySelector("h1").style.display = "none";
    document.getElementById("back").style.display = "block";
  });
  
  document.getElementById("option-b").addEventListener("click", function() {
    document.getElementById("result").innerHTML = document.getElementById("hidden-text-b").innerHTML;
    document.querySelector(".textoConteudo").style.display = "none";
    document.querySelector("h1").style.display = "none";
    document.getElementById("back").style.display = "block";
  });
  
  document.getElementById("back").addEventListener("click", function() {
    document.querySelector(".textoConteudo").style.display = "flex";
    document.querySelector("h1").style.display = "block";
    document.getElementById("result").innerHTML = "";
    document.getElementById("back").style.display = "none";
  });
  

  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;
    const url = `https://swapi.dev/api/people/?search=${searchTerm}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      const person = data.results[0];
      document.getElementById('name').innerHTML = person.name;
      document.getElementById('mass').innerHTML = person.mass;
      document.getElementById('hair_color').innerHTML = person.hair_color;
      document.getElementById('skin_color').innerHTML = person.skin_color;
      document.getElementById('eye_color').innerHTML = person.eye_color;
      document.getElementById('birth_year').innerHTML = person.birth_year;
      document.getElementById('gender').innerHTML = person.gender;
    });
});