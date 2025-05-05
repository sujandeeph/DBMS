// ResultsPage.jsx
import { useSearchParams } from "react-router-dom";
import Main from './Main'
import Footer from './Footer'
const Resultsrent = () => {
  const [searchParams] = useSearchParams();
  const location = searchParams.get("location");
  const type = searchParams.get("type");
  
  return (
    <div>
        <div className="w-full bg-slate-800 h-[12vh] flex justify-center items-center">
        <h2  className=" text-white text-3xl font-bold uppercase" >sell {type} in {location}</h2>
        
        </div>
    {
        type=='Row House' && location=='Vijayanagr' && (<div className="flex flex-wrap justify-center gap-x-3 gap-y-2 p-4 bg-gray-100">
            <Main id={1} image={'./icons/vijaynagarHouse1.webp'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/vijaynagarHouse2.jpg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/vijaynagarHouse3.jpg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/vijaynagarHouse4.jpeg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/vijaynagarHouse5.avif'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/vijaynagarHouse6.avif'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
            
            
            
            
 </div>)

    }
     {
        type=='Shop' && location=='Vijayanagr' && (<div className="flex flex-wrap justify-center gap-x-3 gap-y-2 p-4 bg-gray-100">
            <Main id={1} image={'./icons/vijaynagarShop1.jpg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/vijaynagarShop2.jpg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/vijaynagarShop3.jpg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/vijaynagarShop4.jpg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/vijaynagarShop5.jpg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/vijaynagarShop6.jpg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
            
            
            
            
 </div>)

    }
{
        type=='Apartment' && location=='Vijayanagr' && (<div className="flex flex-wrap justify-center gap-x-3 gap-y-2 p-4 bg-gray-100">
            <Main id={1} image={'./icons/vijayanagarApartment1.jpg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/vijayanagarApartment2.jpg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/vijayanagarApartment3.jpg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/vijayanagarApartment4.jpg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/vijayanagarApartment5.jpg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/vijayanagarApartment6.jpg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
            
            
            
            
 </div>)

    }
     {
        type=='Commercial Plot' && location=='Vijayanagr' && (<div className="flex flex-wrap justify-center gap-x-3 gap-y-2 p-4 bg-gray-100">
            <Main id={1} image={'./icons/vijaynagarcommercialplot/vijaynagarCommercial1.jpg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/vijaynagarcommercialplot/vijaynagarCommercial2.jpeg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/vijaynagarcommercialplot/vijaynagarCommercial3.jpeg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/vijaynagarcommercialplot/vijaynagarCommercial4.jpeg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/vijaynagarcommercialplot/vijaynagarCommercial5.jpg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/vijaynagarcommercialplot/vijaynagarCommercial6.jpg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
            
            
            
            
 </div>)

    }
     {
        type=='Row House' && location=='Gokulam' && (<div className="flex flex-wrap justify-center gap-x-3 gap-y-2 p-4 bg-gray-100">
            <Main id={1} image={'./icons/gokulamHouse/gokulamHouse1.jpeg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/gokulamHouse/gokulamHouse2.avif'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/gokulamHouse/gokulamHouse3.jpeg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/gokulamHouse/gokulamHouse4.webp'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/gokulamHouse/gokulamHouse5.jpeg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/gokulamHouse/gokulamHouse6.jpg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
            
            
            
            
 </div>)

    }
     {
        type=='Shop' && location=='Gokulam' && (<div className="flex flex-wrap justify-center gap-x-3 gap-y-2 p-4 bg-gray-100">
            <Main id={1} image={'./icons/gokulamShop/gokulamShop1.jpg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/gokulamShop/gokulamShop2.jpg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/gokulamShop/gokulamShop3.jpg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/gokulamShop/gokulamShop4.jpg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/gokulamShop/gokulamShop5.jpg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/gokulamShop/gokulamShop6.jpg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
            
            
            
            
 </div>)

    }
      {
        type=='Commercial Plot' && location=='Gokulam' && (<div className="flex flex-wrap justify-center gap-x-3 gap-y-2 p-4 bg-gray-100">
            <Main id={1} image={'./icons/gokulamcommericlaplot/gokulamCommercial1.jpeg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/gokulamcommericlaplot/gokulamCommercial2.jpeg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/gokulamcommericlaplot/gokulamCommercial3.jpeg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/gokulamcommericlaplot/gokulamCommercial4.jpeg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
                <Main id={1} image={'./icons/gokulamcommericlaplot/gokulamCommercial5.jpeg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
              <Main id={1} image={'./icons/gokulamcommericlaplot/gokulamCommercial6.jpeg'} area={'25,000sqft'} pricepersqft={'Rs 1,800'} totalpricce={'2 Cr'}
             location={'Vijaynagar'}/>
           
            
            
            
            
 </div>)

    }
     <Footer/>
    </div>
  );
};

export default Resultsrent;
