import React, { useEffect, useContext, useState } from 'react'
import style from './banner.module.css'
import AppContext from '../../context/AppContext'
import fetchBanners from '../../api/fetchBanners'
import Percentage from '../../assets/svg/Percentage'

function BannerHome() {
  const [banner, setBanner] = useState({})
  const { age } = useContext(AppContext)

  useEffect(() => {
    const banner = fetchBanners()
    
    setBanner(banner)
  }, [])

  return (
    <>
      <div className="container">
        {age > 50 ? (
          <div className={style.bannerHomeOver}>
            <div>            
              <span className={style.titleFlag}><Percentage /> Parabéns, você ativou descontos de 10% em todos os produtos do site!</span>
            </div>
            <img src={banner.overSixtyFive.banner} alt="banner home" />
          </div>
        ) : (
          <div className={style.bannerHome}>
            <img src="/img/banner.png" alt="banner home" />
          </div>
        )}
      </div>
    </>
  )
}
export default BannerHome
