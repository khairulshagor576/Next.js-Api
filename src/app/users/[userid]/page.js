
async function getUser(id) {
    let response = await fetch(`http://localhost:3000/api/users/${id}`);
    let data = await response.json();
    return data.result;
}

export default async function ({params}) {
    //console.log(params.userid);
    let user = await getUser(params.userid);
    console.log(user);
    return (
        <div>
            <h1>User Details</h1>
            <h3>{user[0].name}</h3>
            <h3>{user[0].age}</h3>
            <h3>{user[0].email}</h3>
        </div>
    )
}