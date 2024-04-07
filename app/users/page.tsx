import React from 'react';
import {BACK_END_URL} from "@/config/Config";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments, faUserGroup} from "@fortawesome/free-solid-svg-icons";

interface User {
  id: 1,
  name: "",
  username: ""
}

const UsersPage = async () => {
  const res = await fetch(BACK_END_URL + "/users", { cache: "no-store" });
  const users: User[] = await res.json();

  return (
    <div className="mt-5">
      <h3 className="text text-center text-secondary mb-5"><FontAwesomeIcon icon={faUserGroup}/>Users</h3>
      <ul>
        {users.map(user =>
          <div className="mb-3" key={user.id}>
            <li><span className="text text-center text-dark mr-2">{user.username} </span>
              <Link href={`/chat/${user.username}`}  className="btn btn-sm btn-outline-dark" ><FontAwesomeIcon
                  icon={faComments}
              /></Link>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default UsersPage;
