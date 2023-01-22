import React,{useState} from 'react'
import "./Form.css"

const Form = () => {
    const [clientData, setClientData] = useState({
        clientname: "",
        yourname: "",
        description: "",

    })

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
    
        setClientData({ ...clientData, [name]: value });
      };

    //   connect with firebaes

    const submitData = async(event) =>{
        event.preventDefault();
        const{ clientname , yourname ,description} = clientData
        if(clientname && yourname && description){
        const res = await fetch('https://resume-6d379-default-rtdb.asia-southeast1.firebasedatabase.app/customPages.json',{
        method : "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            clientname , yourname ,description
        })

        }
        )
    

        if (res){
            setClientData({
                clientname: "",
               yourname: "",
                description: "",
            })
            alert("data stored");
        }
        else{
            alert("please fill the data ")
        }
    }
    else{
        alert("please fill the data ")
    }
    }
  return (
    <section>
        <h1 className="heading">create a new page</h1>
        <form action="" method='POST'>
            <input required name='clientname' type="text" placeholder='creating page for'
            value={clientData.clientname}
            onChange={postUserData} />
            <input required name='yourname' type="text" placeholder='your name'
            value={clientData.yourname}
            onChange={postUserData}/>
            <div>
                <textarea required name='description' type="text" placeholder='Your description'
                 value={clientData.description}
                 onChange={postUserData}/>
            </div>
            <button
              type="submit"
              className="btn btn-style w-100"
              onClick={submitData}>
                Submit
            </button>
        </form>


    </section>
  )
}

export default Form