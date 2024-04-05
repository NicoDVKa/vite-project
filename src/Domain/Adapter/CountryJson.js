import { Country } from "../Country"

export class CountryJson {
    constructor () {
        this.cca2 = null
        this.name = new NameJson()
        this.cca3 = null
        this.independent = null
        this.currencies = null
        this.capital = null
        this.region = null
        this.subregion = null
        this.languages = null
        this.latlng = null
        this.borders = null
        this.area = null
        this.population = null
        this.timezones = null
        this.continents = null
        this.flags = new FlagJson()
        this.coatOfArms = new CoatOfArmsJson()
    }

    static fromJson(JSON) {
        const result = new CountryJson();
        for (const key in JSON) {
            if (JSON.hasOwnProperty(key) && result.hasOwnProperty(key)) {
                if(result[key]){
                    result[key] = result[key].fromJson(JSON[key])
                    
                }else{
                    result[key] = JSON[key]
                }
            }
        }
        return result;
    }

    static fromJsonToCountry(JSON) {
        let countryJson = CountryJson.fromJson(JSON)
        let country = new Country()

        // asignar valores iguales de una clase a la otra
        for (const key in countryJson) {
            if (countryJson.hasOwnProperty(key) && country.hasOwnProperty(key)) {
                country[key] = countryJson[key]
            }
        }

        // Valores de campos diferentes o personalizados
        country.code = countryJson?.cca2 || country?.cca3 
        country.currencies =countryJson.currencies ?  Object.keys(countryJson.currencies).map(item => {
            return {
                code : item,
                name : countryJson.currencies[item].name,
                symbol : countryJson.currencies[item].symbol
            }
        }) : []
        country.languages = countryJson.languages ? Object.keys(countryJson.languages).map(item => countryJson.languages[item]) : []

        return country
    }
}

class NameJson {
    constructor () {
        this.common = "",
        this.official = ""
    }

    fromJson(JSON) {
        const result = new NameJson();
        for (const key in JSON) {
            if (JSON.hasOwnProperty(key) && result.hasOwnProperty(key)) {
                result[key] = JSON[key];
            }
        }
        return result;
    }
}

class FlagJson {
    constructor () {
        this.png = "",
        this.alt = ""
    }

    fromJson(JSON) {
        const result = new FlagJson();
        for (const key in JSON) {
            if (JSON.hasOwnProperty(key) && result.hasOwnProperty(key)) {
                result[key] = JSON[key];
            }
        }
        return result;
    }
}

class CoatOfArmsJson {
    constructor () {
        this.png = ""
    }

    fromJson(JSON) {
        const result = new CoatOfArmsJson();
        for (const key in JSON) {
            if (JSON.hasOwnProperty(key) && result.hasOwnProperty(key)) {
                result[key] = JSON[key];
            }
        }
        return result;
    }
}