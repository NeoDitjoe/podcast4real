import { useEffect } from "react"
import { useStateContext } from "../UseContext/UseContext"
import supabase from "./supabase"
import ScrollToTop from "../scrollToTop/ScrollToTop"
import logo from '../assets/logo.png'

export default function LoginIn(){

    const { user } = useStateContext()

    const login = async() => {
        await supabase.auth.signInWithOAuth({
          provider: "github"
        })
    }
    
    return (
        <div style={{ display:'flex', flexDirection: 'column', textAlign:'center', marginLeft:"30%"}}>
            <ScrollToTop/>
            <img src={logo} alt="" style={{ width:'50%'}} loading="lazy"/>
            { user ? <button style={{ width:'50%'}} type="button" className="btn btn-danger" onClick={() => supabase.auth.signOut()}>logout</button> : <button style={{ width:'50%'}} type="button" className="btn btn-success" onClick={login}> login with Github</button>}
        </div>   
    )
}