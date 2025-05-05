// ResultsPage.jsx
import { useSearchParams } from "react-router-dom";

const Resultsbuy = () => {
  const [searchParams] = useSearchParams();
  const location = searchParams.get("location");
  const type = searchParams.get("type");
  
  return (
    <div>
      <div className="w-screen bg-slate-800 h-[12vh] flex justify-center items-center">
        <h2  className=" text-white text-3xl font-bold uppercase" >buy {type} in {location}</h2>
        
        </div>
    
    </div>
  );
};

export default Resultsbuy;
