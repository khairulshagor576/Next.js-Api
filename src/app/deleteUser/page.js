"use client"

export default  function DeleteUser (props) 
{
    // console.log(props.id);
    let id = props.id;
    
    const deleteUser = async () => 
    {
        let response = await fetch(`http://localhost:3000/api/users/${id}`,{
            method:"delete"
        });
        let result = await response.json();
    
        //console.log(result);

        if(result.success)
        {
            alert("User is Deleted!");
        }else{
            alert("User is not Deleted!");
        }
    }
    

    return <button onClick={deleteUser}>Delete</button>
}