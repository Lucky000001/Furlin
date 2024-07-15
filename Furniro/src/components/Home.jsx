// import React from 'react'
import  "./Banner.css";
import Browse from "./Browse.jsx";
import ProductsComponent from "./ProductsComponent.jsx";
import CarouselComponent from "./CarouselComponent.jsx";
import Gallery from "./Gallery.jsx";


function Home() {
  return (
    <>
      <div className="bannerbox">
        <div className="banner ">

        <section className="full-screen-section d-flex">
            <div className="container-fluid d-flex align-items-center justify-content-end">
                <div className="text-box bg-light p-4 rounded">
                    <div className="bannertext text-start">
                    <p><b className="text-dark txt-sz1">New Arrival</b></p>
                    <h2><b>Discover our <br></br> New Collection</b></h2>
                    <p className="text-dark txt-sz2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    </div>
                </div>
            </div>
        </section>


        </div>
      </div>
      <Browse/>
      <ProductsComponent/>
      <CarouselComponent/>
      <Gallery/>
      
    </>
  )
}

export default Home
