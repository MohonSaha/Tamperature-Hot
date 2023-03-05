const apiKeys = `6b7b0f7323c892841bd77a172bee47ab`;

const dynamicSearch = () =>{
    // const searchBtn = document.getElementById('btn-search');
    const searchInput = document.getElementById('search-input');
    const searchValue = searchInput.value;
    console.log(searchValue);
    loadTemperature(searchValue);
    document.getElementById('search-input').value = '';
}



const loadTemperature = city =>{
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeys}&units=metric`;
    fetch(URL)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}


const setInnerText = (id, text) =>{
    const tempContainer = document.getElementById(id);
    tempContainer.innerText = text;
}

const displayTemperature = data =>{
    // const tempContainer = document.getElementById('temperature');
    // tempContainer.innerText = data.main.temp;
    setInnerText('temperature', data.main.temp)
    setInnerText('city', data.name)
    setInnerText('condition', data.weather[0].main)
}

loadTemperature('dhaka');