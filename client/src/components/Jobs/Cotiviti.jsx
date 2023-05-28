import React, {useState, useEffect} from 'react'
import { FromCotiviti } from '../../services/JobsApi';
import axios from 'axios';


const Cotiviti = () => {
    const [cotivjobData, setJobData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
useEffect(()=>{
    let mounted=true
    const FetchJobData= async()=>{
        try{


            const resp=await FromCotiviti()
            if(mounted){
                setJobData(resp.data)
                setIsLoading(false);

            }
        }
        catch(err){
            console.error(err)
            setIsLoading(false)
            throw err;
        }
    }
    FetchJobData()
    return () => {
        mounted = false;
      };

},[])
// useEffect(() => {
//     console.log("Job data:", cotivjobData);
//   }, [cotivjobData]);

  return (
    <>
    <div>
        <hr className='mt-4' />
        {isLoading ? (<p>Loading</p>):cotivjobData.length>0?(
            <div className=' flex flex-wrap justify-evenly'>
            {
                cotivjobData.map(({job_title, job_url},index)=>{
                    return (
                        <div className="w-64 relative md:mx-[1.4rem] mx-2  mt-4 h-48 hover:bg-indigo-500 bg-indigo-300 rounded shadow-md p-4 " key={index}>
                            <h1 className='font-bold md:text-xl text-base'>
                                {job_title}
                            </h1>
                            <h2 className='font-semibold'>🚞Cotiviti Nepal</h2>
                            <h3>📌Hattisar Sadak, Kathmandu</h3>
                            <button className="bg-blue-100 hover:bg-blue-600  font-semibold py-1 px-4 rounded   absolute bottom-2 right-2 ">
                        <a
                          href={job_url}
                          target="_blank"
                        >
                            Visit
                        </a>
                          </button>
                            

                            
                        </div>

                    )
                })
            }
            </div>
        ):(<p>keep exploring</p>)}
    </div>
    </>
  )
}

export default Cotiviti