import { Mundo } from './mundo.model';

export interface Pais extends Mundo {
    country: string;
    todayDeaths: number;
    critical: number;
    casesPerOneMillion: number
    deathsPerOneMillion: number;
    countryInfo: CountryInfo;
}

class CountryInfo {
    flag: string;
}