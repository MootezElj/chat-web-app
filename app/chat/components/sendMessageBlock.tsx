import React from 'react';
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SendMessageBlock = () => {
    return (
        <div className="send-message-block input-group input-group-sm">
            <input type="text" className="form-control input-lg" id="search-church"
                   placeholder="Type your message.."/>
            <span className="input-group-btn ms-4">
                  <button className="btn btn-outline-info" type="submit"><FontAwesomeIcon icon={faPaperPlane}/></button>
                </span>
        </div>
    );
};

export default SendMessageBlock;