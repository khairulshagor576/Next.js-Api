"use client"
import "../../style.css"
export default function page () {
    return (
        <div className="add-user">
            <h1>Add User</h1>
            <div>
                <label>Name:</label>
                <input type="text" placeholder="Enter your name" className="input-field"/>
            </div>
            <div>
                <label>Age:</label>
                <input type="text" placeholder="Enter your age" className="input-field"/>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" placeholder="Enter your email" className="input-field"/>
            </div>
            <div>
                <button className="btn">Add User</button>
            </div>
        </div>
    )
}