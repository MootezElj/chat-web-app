import React from 'react';
import Button from "@/components/buttons/button";
import {BACK_END_URL} from "/config/Config"

interface User {
    id: 1,
    name: "",
    username: ""
}

const UsersPage = async () => {
    const res = await fetch(BACK_END_URL+"/users",  {cache: "no-store"});
    const users: User[] = await res.json();

    return (
        <div>
            <h1 >Users</h1>
            <ul>
                {users.map(user =>
                    <div className="mb-3" key={user.id}>
                        <li><span className="text text-primary mr-2">{user.username}</span>
                            <Button link={`/chat/${user.username}`} text="Chat" type={"warning"}/>
                        </li>
                    </div>
                ) }
            </ul>
        </div>
    );
};

export default UsersPage;
