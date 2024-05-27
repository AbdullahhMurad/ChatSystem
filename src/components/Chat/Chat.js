import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import useSocket from './hooks/socketConnect'
import Navbar from './components/Navbar/Navbar';
import { fetchChats } from '../../store/actions/chat'

import FriendList from "./components/FriendList/FriendList";
// import Messenger from "./components/Messenger/Messenger";
import './Chat.scss'

const Chat = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.authReducer.user)

    // useSocket(user, dispatch)

    useEffect(() => {
        dispatch(fetchChats()).then(res => console.log(res)).catch(err => console.log(err))
    }, [dispatch])

    return (
        <div id='chat-container'>
            <Navbar />
            <div id='chat-wrap'>
                <FriendList />
                {/* <Messenger /> */}
            </div>
        </div>
    );
}

export default Chat


// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import Navbar from "./components/Navbar/Navbar"
// import "./Chat.scss"
// import { fetchChats } from '../../store/actions/chat';
// import FriendList from "./components/FriendList/FriendList";
// import Messenger from "./components/Messenger/Messenger";

// const Chat = () => {
//     //Return jsx code

//     const dispatch = useDispatch();
//     const user = useSelector(state => state.authReducer.user)
//     // const user = useSelector(state => state.user)  This did not work 
//     // console.log(user)

//       useEffect(() => {
//          dispatch(fetchChats()).then(res => console.log(res)).catch(err => console.log(err))
//      }, [dispatch])



//      return (
//         <div id='chat-container'>
//             <Navbar />
//             <div id='chat-wrap'>
//                 <FriendList />
//                 <Messenger />
//             </div>
//         </div>
//     );
// }


// export default Chat