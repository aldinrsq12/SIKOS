
import React from 'react'
import Banner from './Banner'
import "./Home.css"
import Card from "./Card"

function Home() {
    return (
        <div className="home">
       
            <Banner />
            <div className='home_section'>
            {/* <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            /> */}
            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            <div className='home_section'>
            <Card
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthM32vpLGH5JNugpOphXM7LrfJxdgmTxtjQ&usqp=CAU"
                title="Kost Cak Ji, Njarak"
                description="Kost Karyawan"
                price="Rp 600.000/Bulan"
               
            />
            <Card
                src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtqydcv4fd3I-DnlusQrIsNRJzhBOQZ4sMQw&usqp=CAU"
                title="Kost Tretan, Dolly"
                description="Kost Strategis dekat kampus dan pusat perbelanjaan"
                price="Rp 550.000/Bulan"
            />
            <Card
                src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20033389-03ab438c3ba8243aa1585f701f64bec5.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit"
                title="Kost Kacong, Moroseneng"
                description="Kost Mahasiswa/Mahasiswi"
                price="Rp 500.000/Bulan"
            />
            </div>

        </div>
    )
}

export default React.memo(Home)
