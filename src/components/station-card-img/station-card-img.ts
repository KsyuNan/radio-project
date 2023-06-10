import { FC } from 'react'
import { BiRadio} from 'react-icons/bi'
import { Station } from '../../typedef' 

interface Props {
    station: Station
}

export const StationCardImg: FC<Props> = ({station}) => {
    return station.favicon ? (
        <img
         alt={station.name}
         src={station.favicon}
         loading='lazy'
         style={{width: '100%'}}
        />
    ) : (
        <BiRadio size='100%'/>
    )
};