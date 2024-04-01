import React from 'react';
import {BACK_END_URL} from '/config/Config'
import './style.css';
import ChatBox from "@/app/chat/components/chatBox";

export default async function Page({params}) {
    const response = await fetch(`${BACK_END_URL}/chats?with=${params.username}`,  {cache: "no-store"});
    const chat: Chat[] = await response.json();
    const chatPartner = chat[0].with;
    const messages:Message[] = chat[0].messages.sort(function (msg1,msg2) {
        const d1 = new Date(msg1.date);
        const d2 = new Date(msg2.date);
        return d1 - d2
    });
    return (
        <div>
            <h1>Chat 2 with {chatPartner}</h1>
            {messages.map(msg => <ChatBox
                content={msg.content}
                isOwn={msg.from==null}
                date={msg.date}/>)}

            <div className="input-group input-group-sm mb-5">
                <input type="text" className="form-control input-lg" id="search-church" placeholder="Type your message.." />
                <span className="input-group-btn ms-4">
                  <button className="btn btn-info btn-lg" type="submit">Send</button>
                </span>
            </div>
        </div>
    );
};



