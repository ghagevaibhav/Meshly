import { useOthers } from "@liveblocks/react"
import LiveCursors from "./cursor/LiveCursors"


const Live = () => {

    const others = useOthers();

  return (
    <LiveCursors others={others}/>
  )
}

export default Live