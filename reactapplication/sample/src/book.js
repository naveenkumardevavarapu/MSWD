import React from 'react';
import './book.css'
import { callApi, errorResponse, getSession } from './main';



const space = {height : '5px'}


export function visitor(){
    var H1 = document.getElementById('H1');
    var H2 = document.getElementById('H2');
    var H3 = document.getElementById('H3');
    var H4 = document.getElementById('H4');
    var H5 = document.getElementById('H5');
    var H6 = document.getElementById('H6');
    H1.style.border="";
    H2.style.border="";
    H3.style.border="";
    H4.style.border="";
    H5.style.border="";
    H6.style.border="";
    if(H1.value==="")
    {
        H1.style.border = "1px solid red";
        H1.focus();
        return;
    }
    if(H2.value==="")
    {
        H2.style.border = "1px solid red";
        H2.focus();
        return;
    }
    if(H3.value==="")
    {
        H3.style.border = "1px solid red";
        H3.focus();
        return;
    }
    if(H4.value==="")
    {
        H4.style.border = "1px solid red";
        H4.focus();
        return;
    }
    if(H5.value==="")
    {
        H5.style.border = "1px solid red";
        H5.focus();
        return;
    }
    if(H6.value==="")
    {
        H6.style.border = "1px solid red";
        H6.focus();
        return;
    }

    var url = "http://localhost:5000/book/visitors";
    var data = JSON.stringify({
        visitorname : H1.value,
        companyname : H2.value,
        visitorcontactnumber : H3.value,
        meetingpurpose : H4.value,
        createby : H5.value,
        createin : H6.value
    });
    callApi("POST", url, data, submitSuccess, errorResponse);


    H1.value="";
    H2.value="";
    H3.value="";
    H4.value="";
    H5.value="";
    H6.value="";
}

function submitSuccess(res)
{
    var data = JSON.parse(res);
    alert(data);
}


class Book extends React.Component
{
    constructor()
  {
        super();
        this.sid = getSession("sid");
        if(this.sid === "")
            window.location.replace("/");

    }

    render()
    {
        return(
               <div className='full-height'>
                <div className='bookcontent'>
                    <div style = {space}></div>
                    <div className='table-container'>
                        <div className='row'>
                            <div className='column'>
                                <div>Student Name</div> 
                            </div>
                            <div className='column'>
                                <div>Visitor Name</div> 
                            </div>
                            <div className='column'>
                                <div>Parent Contact Number</div> 
                            </div>
                            <div className='column'>
                                <div>Meeting Purpose</div> 
                            </div>
                            <div className='column'>
                                <div>CreateBy</div> 
                            </div>
                            <div className='column'>
                                <div>CreateOn</div> 
                            </div>
                        </div>
                    </div>
                    <div className='table-container'>
                        <div className='row'>
                            <div className='column'>
                                <div><input type='text' id='H1' className='txtbox'/></div> 
                            </div>
                            <div className='column'>
                                <div><input type='text' id='H2' className='txtbox'/></div> 
                            </div>
                            <div className='column'>
                                <div><input type='text' id='H3' className='txtbox'/></div> 
                            </div>
                            <div className='column'>
                                <div><input type='text' id='H4' className='txtbox'/></div> 
                            </div>
                            <div className='column'>
                                <div><input type='text' id='H5' className='txtbox'/></div> 
                            </div>
                            <div className='column'>
                                <div><input type='text' id='H6' className='txtbox'/></div> 
                            </div>
                        </div>
                    </div>
                    <div style = {space}></div>
                    <div style = {space}></div>
                    <div button className='btn1' onClick={visitor}>Submit</div>
                </div>
                </div>
        );
    }
}

export default Book;