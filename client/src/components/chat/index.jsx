import React from 'react'
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced';


const chat = () => {
    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        "techmonowar",
        "techmonowar"

    )
  return (
    <div style={{flexBasis: "100%"}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow
        {...chatProps}
        style={{height:"100vh"}}
        render
        />
    
    
    
    
    </div>
  )
}

export default chat