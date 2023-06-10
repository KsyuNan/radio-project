import { createAsyncThunk } from '@reduxjs/toolkit';
import { countriesUrl } from '../../constants/api';
import { Countries, CountriesSelect } from '../../typedef';

export const fetchCountries = createAsyncThunk<CountriesSelect[]>(
    'countries/fetch',
    ()=>
     fetch(countriesUrl)
      .then((res) => res.json()
      .then((data: Countries[]) => 
        data.map(({name}) => ({
            value: name.toLowerCase(),
            label: name}))
      )
))
