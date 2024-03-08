import React from "react";
import './myprofile.css';
import {callApi , errorResponse ,getSession} from './main';
import Axios from "axios";

export function profileInfo()
{
    var url = "http://localhost:5000/myprofile/info";
    //var data = JSON.stringify({
     // emailid  : getSession("sid")
    //});
    //callApi("POST" , url , data , loadInfo , errorResponse );
    Axios.post(url ,{emailid : getSession("sid")})
        .then(res => loadInfo(res))
        .catch(err => errorResponse(err));
}

export function loadInfo(res)
{
    var data = res.data;
    // var data = JSON.parse(res);
    var L1 = document.getElementById("L1");
    var L2 = document.getElementById("L2");
    var L3 = document.getElementById("L3");
    var L4 = document.getElementById("L4");

    L1.innerText = data[0].firstname;
    L2.innerText = data[0].lastname;
    L3.innerText = data[0].contactno;
    L4.innerText = data[0].emailid;

}

class MyProfile extends React.Component
{
    constructor()
    {
        super();
        this.sid = getSession("sid");
        if(this.sid === "")
            window.location.replace("/");

        profileInfo();
    }

render()
    {
        return(
            <div className='full-height'>
                <h3>User Profile</h3>
               <div className = "tablestyle">
                <table className='tablestyle'>
                    <tr>
                        <td className='firstcolumn' >First Name</td>
                        <td><label id='L1'></label></td>
                    </tr>
                    <tr>
                        <td className='firstcolumn' >Last Name</td>
                        <td><label id='L2'></label></td>
                    </tr>
                    <tr>
                        <td className='firstcolumn' >Contact No.</td>
                        <td><label id='L3'></label></td>
                    </tr>
                    <tr>
                        <td className='firstcolumn' >Email Id</td>
                        <td><label id='L4'></label></td>
                    </tr>
                </table>
                </div>
            </div>
        );
    }
}

export default MyProfile;