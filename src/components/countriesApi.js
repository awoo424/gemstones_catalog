import countries from '../data/countries.json'

export function ajaxFindCountry(query) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const results = countries.filter((element) => {
                return element.name.toLowerCase().includes(query.toLowerCase())
            })
            resolve(results)
        }, 1000)
    })
}