import React from 'react'
// import App from '../App.css'
import { useState } from 'react'



const Navbar = () => {

  const [togel, settogel] = useState(false)


  const navmenutoggel = () => {

    if (togel === false) {
      settogel(!togel)
    }
  }

  const navmenutoggelclose = () => {
    if (togel === true) {
      settogel(!togel)
    }
  }








  return (
    <>
      {/* mobil nav menu list  */}

      <section className={togel === true ?  "mobil-nav-menu-list-section" : "nav-hide-menu"   } >
        <div className='mobil-nav-menu-list-div' >
          <ul className='mobil-nav-menu-list-ul-gr'>
            <p className='mobil-nav-menu-list-ul-p' >Treading</p>

            <li className='mobil-nav-menu-list-li-gr' >Best Seller</li>
            <li className='mobil-nav-menu-list-li-gr' >New Relese</li>
            <li className='mobil-nav-menu-list-li-gr' >Movers and Shaakers</li>

          </ul>


          <ul className='mobil-nav-menu-list-ul-gr' >
            <p className='mobil-nav-menu-list-ul-p' >Treading</p>

            <li className='mobil-nav-menu-list-li-gr' >Best Seller</li>
            <li className='mobil-nav-menu-list-li-gr' >New Relese</li>
            <li className='mobil-nav-menu-list-li-gr' >Movers and Shaakers</li>


          </ul>

          <ul className='mobil-nav-menu-list-ul-gr'  >
            <p className='mobil-nav-menu-list-ul-p' >Treading</p>

            <li className='mobil-nav-menu-list-li-gr' >Best Seller</li>
            <li className='mobil-nav-menu-list-li-gr' >New Relese</li>
            <li className='mobil-nav-menu-list-li-gr' >Movers and Shaakers</li>

          </ul>
        </div>

        <div className={togel === false ? "nav-hide-menu" : "vnsdnn"} >
          <button className='mobil-nav-menu-list-close-div' onClick={navmenutoggelclose} >
            <span class="material-symbols-outlined  mobil-nav-menu-list-close-btn ">
              close
            </span>
          </button>
        </div>
      </section>

      {/* header full responsive */}

      <header className='navbar' >



        <ul className='ul-navbar ' >
          <li className='navbar-menu-icon-li  ' ><button className='navbar-menu-logo btn-nav-menu' onClick={navmenutoggel} ><span className="material-symbols-outlined navbar-menu-logo">menu</span></button></li>
          <li className='navbar-logo-li navbar-li-h' >
            <img className='logo-amz' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8uc0Y7NWPbEoh6E8Q6AssDaoNZb__xw-07ssoWxe&s" alt="" />
          </li>
          <li className='navbar-location-li navbar-li-h' >
            <p className='header-pd' >Delivering to New Delhi 110043</p>
            <p className='header-pd-2'><span className="material-symbols-outlined span-loca ">location_on</span>Update location</p>
          </li>
          <li className='header-input-li ' >
            <select name="item" id="item-dropbox" className='input-gr input-select-navbar' >
              <option value="all">All</option>
              <option value="gift">kjs</option>
              <option value="mobile">dvs</option>
              <option value="laptop">sdv</option>
              <option value="earphone">va</option>
            </select>
            <input type="text" className='input-gr input-navbara ' placeholder='Search Amazon.in' />
            <span className="material-symbols-outlined navbar-seach-icon ">search</span>
          </li>
          <li className='navbar-language-i' >
            <span><img height="12px" width="12px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtqZSVh-r980BVONEUOxFXzOYmFMYzFqisgllqPHIFxA&s" alt="" /></span>
            <p>En</p>
          </li>
          <li className='navbar-singin-li navbar-li-h' >
            <p className='navbar-singin' >Hello, sing in</p>
            <p className='navbar-singin-P' >Accounts & Lists</p>
          </li>
          <li className='navbar-return-li navbar-li-h' >
            <p className='navbar-return-p' >Return</p>
            <p className='navbar-return-p2' >& Order</p>
          </li>
          <li className='navbar-mobile-singin' >
            <p className='navbar-mobile-singin-p' >Sing in </p>
            <span className="material-symbols-outlined navbar-user-icon ">person</span>
          </li>
          <li className='cart-li ' >
            <span className="material-symbols-outlined navbar-cart-icon ">remove_shopping_cart</span>
            <p className='navbar-cart-p' >cart</p>
          </li>
        </ul>

        <div className='navbar-mobilesearch-div' >
          <li className='header-mobileinput-li' >
            <input type="text" className='input-gr inputmobile-navbara ' placeholder='Search Amazon.in' />
            <div className=' navbar-mobile-seach-icon-div' >
              <span className="material-symbols-outlined navbar-mobile-seach-icon ">search</span>
            </div>
          </li>
        </div>


        <div className='catogery-div' >
          <ul className='catogery-ul' >
            <li className='catogery-li all-li-catogery ' ><span className="material-symbols-outlined">menu</span> All </li>
            <li className='catogery-li catogery-li-1 ' >phone</li>
            <li className='catogery-li catogery-li-2 ' >laptop</li>
            <li className='catogery-li catogery-li-3 ' >computer</li>
            <li className='catogery-li catogery-li-4 ' >buds</li>
            <li className='catogery-li catogery-li-5' >electric</li>
            <li className='catogery-li catogery-li-6 ' >tv</li>
            <li className='catogery-li catogery-li-7 ' >item</li>
            <li className='catogery-li catogery-li-8 ' >item</li>
            <li className='catogery-li catogery-li-9 ' >item</li>
            <li className='catogery-li catogery-li-10 ' >item</li>
            <li className='catogery-li catogery-li-11 ' >item</li>
            <li className='catogery-li catogery-li-12 ' >item</li>
            <li className='catogery-li catogery-li-13 ' >item</li>
            <li className='catogery-li catogery-li-14 ' >item</li>
            <li className='catogery-li catogery-li-15 ' >item</li>
            <li className='catogery-li catogery-li-16 ' >item</li>
          </ul>
        </div>

        <div className='mobile-catogery-div'>
          <ul className='mobile-catogery-ul' >
            <li>
              <p className='mobile-catogery-ul-shop-by' >Shop by</p>
              <p className='mobile-catogery-ul-category' >Category</p>
            </li>
            <li>Your list</li>
            <li>Deals</li>
            <li>Sell</li>
          </ul>
        </div>
        <div className='navbar-location-mobile-div' >
          <p className='navbar-location-mobile-div-p' ><span className="material-symbols-outlined navbar-location-mobile-div-icon ">location_on</span>Delivering to New Delhi 110043 - Update location ⌵</p>
        </div>
      </header>
    </>
  )
}

export default Navbar
