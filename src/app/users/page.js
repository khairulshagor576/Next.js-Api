import Link from "next/link";

async function getUsers() {
    let response = await fetch("http://localhost:3000/api/users");
    let data = await response.json();
    return data;
}
export default async function users () {
    let users = await getUsers();
    return (
        <div>
            <h1>Users List</h1>
            {
                users.map((item)=>(
                    <div>
                        <Link href={`/users/${item.id}`}>{item.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}