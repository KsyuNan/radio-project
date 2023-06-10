import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/store-typed-hook/store-typed-hooks'
import   Select  from 'react-select'
import { fetchCountries } from '../../services/thunks/fetch-countries'
import { setActiveCountry } from '../../services/actions/set-active-country'
import { CountriesSelect } from '../../typedef'

export const CountriesDropdown:FC = () => {
    const countries = useAppSelector((state) =>state.countries.data)
    const activeCountry = useAppSelector((state) =>state.countries.activeCountry)
    const dispatch = useAppDispatch()

    const handleChange = (option: CountriesSelect | null) => {
        if(option && option.label!== activeCountry) {
            dispatch(setActiveCountry(option.label))
        }
    }

    useEffect(() => {
        dispatch(fetchCountries())
    }, [])

    useEffect(() => {
        if(countries.length) {
            dispatch(setActiveCountry(countries[198].label))
        }
    }, [countries])

    return <Select options={countries} onChange={handleChange} />
}