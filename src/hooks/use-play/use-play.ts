import { useAppSelector } from "../store-typed-hook/store-typed-hooks";
import { useEffect, useRef} from 'react'


export const usePlay = () => {
    const play = useAppSelector((state) => state.player.play)
    const activeStation = useAppSelector((state) => state.stations.activeStation)
    const audioRef = useRef(new Audio())


  useEffect(() =>{
    if(play) {
        audioRef.current = new Audio(activeStation.url_resolved)
        audioRef.current.play()
    } else {
        audioRef.current.pause()
    }

    return () => audioRef.current.pause()
  }), [activeStation, play]
   
  return {
    play,
    activeStation
  }
    
}