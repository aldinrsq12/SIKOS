import { Button } from '@material-ui/core'
import React ,{useState} from 'react'
import "./Banner.css"
import Search from './Search'
import {useHistory} from "react-router-dom"

function Banner() {
    const history = useHistory();

    const [showSearch,setShowSearch] = useState(false)
    return (
        <div className="banner">
            <div className="banner_search">
                {showSearch && <Search />}
                {/* <Button onClick ={()=>{setShowSearch(!showSearch)}} className="button_searchButton" variant="outlined">{showSearch ? "HIDE" : "Pilih Tanggal" }</Button> */}
            </div>
            <div className="banner_info">
                <h2>Mencari Kost Lebih Praktis</h2>
                <h5>cari kost dengan harga terbaik dan paling nyaman</h5>
                <Button onClick={()=>{history.push("/search")}}variant="outlined"> Mencari sekitar</Button>
            </div>
        </div>
    )
}

export default Banner
