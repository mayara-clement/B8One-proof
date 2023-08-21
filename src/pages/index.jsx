import CategoryList from '../components/Categories/CategoryList'
import Products from '../components/Products/Products'
import BannerHome from '../components/BannerHome/BannerHome'
import BenefitsBar from '../components/BenefitsBar/BenefitsBar'
import AgeModal from '../components/AgeModal/AgeModal'
import { useContext } from 'react';
import AppContext from '../context/AppContext'

export default function Home() {
  const { showModal } = useContext(AppContext)

  return (
    <>
      <AgeModal showModal={showModal} />
      <CategoryList />      
      <BannerHome />
      <BenefitsBar />
      <Products />
    </>
  )
}
