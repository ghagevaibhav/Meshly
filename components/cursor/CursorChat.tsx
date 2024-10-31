import CursorSVG from '@/public/assets/CursorSVG'
import { CursorChatProps, CursorMode } from '@/types/type'
import React from 'react'
// {cursorState.mode === CursorMode.Chat && () }

const CursorChat = ({ cursor, cursorState, setCursorState, updateMyPresence }: CursorChatProps) => {
  return (
    <div className='absolute top-0 left-0' style={{transform: `translatex(${cursor.x})px translatey(${cursor.y}px)`}}>
            <>
                <CursorSVG color='#000'/>

                <div className='absolute left-2 top-5 bg-blue-500 py-2 px-4 text-sm leading-relaxed text-white rounded-[20px]'>
                    {cursorState.previousMessage && (
                        <div>
                            {cursorState.previousMessage}
                        </div>
                    )}
                    <input type="text" name="" id="" />
                </div>
            </>
        CursorChat
    </div>
  )
}

export default CursorChat