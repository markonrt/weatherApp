let niz = [];
//let grad_top = document.querySelector('#grad');
class Weather{
    constructor(city){
        this.city = city;
    }
    
    async getApi(city){
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=8117422a5a8bc114914fcf06171be9b2`)
            const data = await response.json();
        //grad_top.innerText = `${data.city.name} (${data.city.country})`
        
        data.forEach((element,i) => {
            if(i%8==0){
                niz.push(element)
            }
        });
        
        }
        catch(e){
            console.log(e);
        }
        
    }
    changeCity(city){
        this.city = city;
    }
}

let niz2 = niz.find(z=> z.main.temp_max == '25');
let niz3 = niz.filter(z=> z.main.temp_max > 10 || z.main.temp_max<25);
console.log(niz3)