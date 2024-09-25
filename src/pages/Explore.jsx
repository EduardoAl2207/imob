import {Link} from 'react-router-dom'
import Slider from '../components/Slider'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'


function Explore() {
  return (
    <div className='explore'>
      <header>
        <p className="pageHeader">Explorar</p>
      </header>

      <main>
        <Slider />

        <p className="exploreCategoryHeading">Categorias</p>
        <div className="exploreCategories">
          <Link to='/category/rent'>
            <img
              src={rentCategoryImage} 
              alt="rent" 
              className='exploreCategoryImg' 
            />
            <p className="exploreCategoryName">Lugares para alugar</p>
          </Link>
          <Link to='/category/sale'>
            <img
              src={sellCategoryImage} 
              alt="sell" 
              className='exploreCategoryImg' 
            />
            <p className="exploreCategoryName">Lugares para venda</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Explore
