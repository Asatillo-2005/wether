import "./wether.scss"
import { useEffect, useState, useRef } from "react"

import img1 from "../../assets/svg/sun-wether2.svg"
import img2 from "../../assets/svg/moon-wether.svg"
import img22 from "../../assets/svg/wether-moon.svg"
import img3 from "../../assets/svg/wether-img1.svg"
import img4 from "../../assets/svg/cloud-wether.svg"
import img5 from "../../assets/svg/vector-wether.svg"

function Wether() {

    const [data, setData] = useState([])
    const [search, setSearch] = useState()
    const [send, setSend] = useState()
    const elWether = useRef()
    const elSun = useRef()
    const elMoon = useRef()
    const elMoon2 = useRef()
    const elSearch = useRef()

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${send}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`)
            .then((res) => res.json())
            .then((data) => setData(data))
    },[send])

    const el = new Date().getHours()
    let now2 =  new Date().getMinutes()
    let now3 =  new Date().getSeconds()
    

    useEffect(() => {
        if (el >= 18) {
            elWether.current.classList.add('box-dark')
            elSun.current.classList.add('sun-close')
            elMoon.current.classList.add('open-moon')
        }
    }, [])

    useEffect(() => {
        if (el >= 22) {
            elMoon.current.classList.remove('open-moon')
            elMoon2.current.classList.add('open-moon2')
        }
    },[])

    useEffect(() => {
        if (el <= 6) {
            elWether.current.classList.remove('box-dark')
            elMoon2.current.classList.remove('open-moon2')
            elSun.current.classList.remove('sun-close')
        }
    },[])

    console.log(data);
    console.log(now2);
    console.log(now3);

    return (
        <section className="section-wethre" >
            <div className="container">
                <div className="wether-box">
                    <ul className="wether-content" ref={elWether}  >
                        <div className="wether-time">{el}:{now2}:{now3}</div>
                        <li className="wether-content-item1">
                            <img className="wether-sun" src={img1} alt="error" ref={elSun} />
                            <img className="wether-moon" src={img2} alt="error" ref={elMoon} />
                            <img className="wether-moon2" src={img22} alt="error" ref={elMoon2} />
                            <div className="wether-gradus">{data?.main?.temp}<span className="wether-gradus-name">sunny</span></div>
                        </li>
                        <li className="wether-content-item2">
                            <div className="wethre-contetnt-item2-items"><img src={img3} alt="error" />{data?.wind?.deg} km/h</div>
                            <div className="wethre-contetnt-item2-items"><img src={img4} alt="error" />{data?.clouds?.all}%</div>
                            <div className="wethre-contetnt-item2-items"><img src={img5} alt="error" />2 of 10</div>
                        </li>
                    </ul>
                    <input className="wether-search" type="text" placeholder="search" ref={elSearch} onChange={(evt) => {
                            setSearch(evt.target.value)             
                    }} />
                    <button className="wether-btn" onClick={()=>{setSend(search)}}>click</button>
                </div>
            </div>
        </section>
    )
}

export default Wether