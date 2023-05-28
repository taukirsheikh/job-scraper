import React, {useState, useEffect} from 'react'
import { FromCotiviti } from '../../services/JobsApi';
import axios from 'axios';
import {RiBuilding4Line} from 'react-icons/ri'
import {GoPin} from 'react-icons/go'


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
                        <div className="md:w-64 w-48 relative md:mx-[1.4rem] mx-1  mt-4 h-48 hover:bg-indigo-400 bg-indigo-300 rounded shadow-md p-4 " key={index}>
                            <h1 className='font-bold md:text-xl text-base'>
                                {job_title}
                            </h1>
                            <h2 className='font-semibold'><RiBuilding4Line className="inline text-2xl text-sky-950"/> Cotiviti Nepal</h2>
                            <h3><GoPin className="inline text-2xl text-sky-950"/> Hattisar Sadak, Kathmandu</h3>
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