import Link from "next/link";
import "../../style.css"

async function getUsers() {
    let response = await fetch("http://localhost:3000/api/users");
    let data = await response.json();
    return data;
}
export default async function users () {
    let users = await getUsers();
    console.log(users);
    return (
        <div>
            <h1>Users List</h1>
            {
                users.map((user,index)=>(
                    <div key={index} className="list-user">
                        <span><Link href={`/users/${user.id}`}>{user.name}</Link></span>
                        <span><Link href={`/users/${user.id}/update`}>Edit</Link></span>
                    </div>
                ))
            }
        </div>
    )
}