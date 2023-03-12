import React from "react";
import "./newUser.css";

const newUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label> Username</label>
          <input type="text" placeholder="Enam" />
        </div>

        <div className="newUserItem">
          <label> Full Name</label>
          <input type="text" placeholder="Enam Ahmed Chowdhury" />
        </div>

        <div className="newUserItem">
          <label> Email</label>
          <input type="email" placeholder="mdenam@gmail.com" />
        </div>

        <div className="newUserItem">
          <label> Passowrd</label>
          <input type="password" placeholder="password" />
        </div>

        <div className="newUserItem">
          <label> Phone</label>
          <input type="text" placeholder="+8801864299319" />
        </div>

        <div className="newUserItem">
          <label> Adress</label>
          <input type="text" placeholder="Dhaka" />
        </div>

        <div className="newUserItem">
          <label> Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>

            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>

            <input type="radio" name="gender" id="others" value="others" />
            <label for="others">Others</label>
          </div>
        </div>

        <div className="newUserItem">
          <label> Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <button className="newUserBtn">Create</button>
      </form>
    </div>
  );
};

export default newUser;
