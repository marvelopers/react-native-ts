import { ICountry } from "./Icountry";
import { COUNTRY_URL } from "./url";

export const getCountrise = (): Promise<ICountry[]> => new Promise((resolve, reject) => {
  fetch(COUNTRY_URL)
    .then((res) => res.json())
    .then((result: any[]) => {
      const counties = result.map((data: any) => {
        const { region, subregion, name, capital, population } = data
        return { region, subregion, name, capital, population } as ICountry
      })
      resolve(counties)
    })
    .catch(reject)
})