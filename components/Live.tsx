import { useMyPresence, useOthers } from "@liveblocks/react"
import LiveCursors from "./cursor/LiveCursors"
import { useCallback } from "react";


const Live = () => {

    const others = useOthers();
    const [{ cursor }, updateMyPresence] = useMyPresence() as any;

    const handlePointerMove = useCallback((event: React.PointerEvent) => {
        event.preventDefault();
        
        const x = event.clientX - event.currentTarget.getBoundingClientRect().x
        const y = event.clientY - event.currentTarget.getBoundingClientRect().y
        updateMyPresence({ cursor: { x, y } })
        
    }, [updateMyPresence])
    
    const handlePointerLeave = useCallback((event: React.PointerEvent) => {
        event.preventDefault();
        updateMyPresence({ cursor: null, message: null })

    }, [updateMyPresence])

    const handlePointerDown = useCallback((event: React.PointerEvent) => {
        
        const x = event.clientX - event.currentTarget.getBoundingClientRect().x
        const y = event.clientY - event.currentTarget.getBoundingClientRect().y
        updateMyPresence({ cursor: {x, y} })

    }, [updateMyPresence])
    
    return (
        <div 
        onPointerLeave={handlePointerLeave} 
        onPointerDown={handlePointerDown} 
        onPointerMove={handlePointerMove}
        className="h-[100vh] w-full flex text-center justify-center items-center"
        >
            <h1 className="text-2xl text-white font-medium">Hello There</h1>
            <LiveCursors others={others}/>
        </div>
    )
}

export default Live