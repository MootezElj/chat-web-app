import {BACK_END_URL} from "@/config/Config";
import './style.css';
import ChatBox from "@/app/chat/components/chatBox";
import SendMessageBlock from "@/app/chat/components/sendMessageBlock";

export default async function Page({params}: {params: {username: string}}) {
    const response = await fetch(`${BACK_END_URL}/chats?with=${params.username}`,  {cache: "no-store"});
    const chatPartner = params.username;
    const chat: Chat[] = await response.json();
    let messages: Message[] = [];
    let chatPresent = chat.length > 0;
    if (chatPresent){
        messages = sortMessages();
    }

    function sortMessages(): Message[] {
        return chat[0].messages.sort(function (msg1, msg2) {
            const d1 = new Date(msg1.date);
            const d2 = new Date(msg2.date);
            return d1.getTime() - d2.getTime();
        });
    }

    return (
        <div>
            {chatPresent && renderChatPresent()}
            {!chatPresent && renderNoPresentChat()}
        </div>
    );

    function renderChatPresent() {
        return <div>
            <h2 className='mt-2 mb-2 text-info'>Chat with {chatPartner}</h2>
            {messages.map((msg, index) => <ChatBox
                key = {index}
                content={msg.content}
                isOwn={msg.from == null}
                date={msg.date}/>)}
            <SendMessageBlock/>
        </div>;
    }

    function renderNoPresentChat() {
        return <div>
            <h2>You don&apos;t have a chat with {chatPartner} yet</h2>
            <button className="btn btn-outline-dark">Init chat</button>
        </div>;
    }

};



