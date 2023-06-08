
import { Button } from 'react-bootstrap'
import { FcLike, FcLikePlaceholder } from 'react-icons/Fc'

interface Props {
    active: boolean,
    onClick: () => void
}

export const ToggleIconButton = ({active, onClick}: Props) => {
    return (
        <Button variant='outline-light' onClick={onClick} > {active ? <FcLike/> : <FcLikePlaceholder />}</Button>
    )
}