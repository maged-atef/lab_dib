import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export default function Protected(props) {
    const moveTo = useNavigate()
    const getCredentials = JSON.parse(localStorage.getItem("token"))
    const [admin, setadmin] = useState(getCredentials)
    console.log(admin);

    useEffect(() => {
        if (!admin || admin == {} || admin == null) {
          return  moveTo("/Login")
        } else if (admin.email != "maged.atef.arteen@gmail.com" &&
            admin.password != "1111"
        ) {
            alert("Not Authorized")
            moveTo("/login")
        } else {
           
        }
    }, {})


    return <>
        {props.children}
    </>
}