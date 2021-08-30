
fetch('https://restcountries.eu/rest/v2/all')
.then(res =>res.json())
.then(data =>worldCountries(data))

const worldCountries=(counrties) =>{
    const id = document.getElementById('cdatils');
    counrties.forEach(country =>{

        const div = document.createElement('div');
        div.classList.add('col-md-4');
        div.innerHTML =`
        <div class="border border-primary p-4">
            <h3 class="">Name : ${country.name}</h3>
            <h3>Capital : ${country.capital}</h3>
            <h4>Population :${country.population}</h4>
            <button class="btn btn-info" onclick="CountryDetails('${country.name}')">See More Details</button>
        </div>
        
        `
        id.appendChild(div)

    })
}

const CountryDetails =(mim)=>{
   const url =`https://restcountries.eu/rest/v2/name/${mim}`
   fetch(url)
   .then(res=>res.json())
   .then(data=>Cdetails(data))
}

const Cdetails =(datas) =>{
    const Img = document.getElementById('cimg')
    Img.style.display ='block'
    console.log(datas);
    datas.forEach(data =>{
        Img.src =`${data.flag}`
    })

}
//https://restcountries.eu/rest/v2/name/{name}
/*
 1.button on click show the country flags and theres relision snd their country code
 2.(advanced) ..ekta search box banabo oikhane country name na first letter likar sathe sathe oi related country gula cholee asbeee


*/