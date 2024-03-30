import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ChatPage = () => {
    const [chats,setChats]=useState([])
    const fetchChats=async()=>{
        const {data} =await axios.get('api/users/chat')
        setChats(data.chats)
        console.log(data.chats);
    }
    useEffect(()=>{
      fetchChats()
    },[])
  return (
    <div>
        {
         chats.map(chat=><div key={chat.id}>{chat.sender}</div>)
        }
    </div>
  )
}

export default ChatPage
