const searchForm = document.querySelector('form');
const searchInput = document.getElementById('search-input');
const tableBody = document.getElementById('country-table-body');
let countries = [];

function displayproducts(products) {
  // Clear existing table rows
  tableBody.innerHTML = '';

  // Iterate over the data and create a table row for each item
  products.forEach(item => {
    const row = document.createElement('div');
    // const nameCell = document.createElement('h3');
    // nameCell.innerHTML = item.title +"<br>";
    const flagCell = document.createElement('p');
    const flagImg = document.createElement('img');
    const nameCell = document.createElement('h3');
    nameCell.innerHTML = item.title +"<br>";
    flagImg.src = item.image;
    flagImg.alt = `${item.category} Flag`;
    flagCell.appendChild(flagImg);
    const capitalCell = document.createElement('p');
    capitalCell.innerHTML ="ITEM-ID:"+ item.id;
    const populationCell = document.createElement('h4');
    populationCell.innerHTML = "DESCRIPTION:"+item.description;
    const regionCell = document.createElement('h7');
    regionCell.innerHTML = "PRICE:"+item.price+"/-";
    const regionCell1 = document.createElement('h8');
    regionCell1.innerHTML = "RATING:"+item.rating.rate;
    const capitalCell1 = document.createElement('p');
    const button=document.createElement('button')
    button.innerHTML="BUY"
    capitalCell1.appendChild(button)
    row.appendChild(nameCell);
    row.appendChild(flagCell);
    row.appendChild(capitalCell);
    row.appendChild(populationCell);
    row.appendChild(regionCell);
    row.appendChild(regionCell1);
    row.appendChild(capitalCell1);
    tableBody.appendChild(row);
  });
}

function filterproducts(searchTerm) {
  return products.filter(item => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
}

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    products = data;
    console.log(data)
    displayproducts(products);
  })
  .catch(error => console.error(error));

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const searchTerm = searchInput.value.trim();
  const filteredproducts = filterproducts(searchTerm);
  displayproducts(filteredproducts);
});
