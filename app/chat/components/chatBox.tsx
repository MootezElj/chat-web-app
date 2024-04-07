import React from 'react';

const ChatBox = ({isOwn, content, date}: {isOwn: boolean, content: string, date: string}) => {

    return (
        <div>
            <div className="chatBox">
                <div className={"inlineContainer".concat(isOwn?" own":"")}>
                    <img className="inlineIcon" src="https://www.pinclipart.com/picdir/middle/205-2059398_blinkk-en-mac-app-store-ninja-icon-transparent.png" />
                    <div className={isOwn?"ownBox own":"otherBox other"}>
                        {content}
                    </div>
                </div><span className={isOwn?"own":"other"}>{date}</span>
            </div>
        </div>
    );
};

export default ChatBox;
