import { FC } from 'react'
import { Button } from 'react-bootstrap
import { useAppDispatch } from '../../hooks/store-typed-hook/store-typed-hooks'
import { clearFavouriteStations } from '../../services/actions/clear-favourite-stations'

export const ClearFavouriteBtn: FC = () => {
    const dispatch = useAppDispatch()
    const handleClick = () => dispatch(clearFavouriteStations())

    return <Button onClick={handleClick}> Clear favourite < /Button>
}