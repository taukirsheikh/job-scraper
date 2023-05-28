import React, { useState } from "react";
import { useEffect } from "react";
import FromMeroJob from "../../services/JobsApi";
import {RiBuilding4Line} from 'react-icons/ri'
import {GoPin} from 'react-icons/go'

const Merojob = () => {
  const [jobData, setJobData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchJobData = async () => {
      try {
        const jobDataList = await FromMeroJob();
        if (mounted) {
          setJobData(jobDataList.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching job data:", error);
        setIsLoading(false);
      }
    };

    fetchJobData();

    return () => {
      mounted = false;
    };
  }, []);
 
  
  return (
    <>
      <div className="bg-indigo-400 shadow-lg rounded-lg p-2 text-center font-bold w-56 mx-4   mt-12">
        Jobs You May Like
      </div>
      <div className="">
        {isLoading ? (
          <p>Loading...</p>
        ) : jobData.length > 0 ? (
          <div className="flex flex-wrap justify-evenly">
            {jobData.map(
              (
                {
                  job_title,
                  company,
                  job_link,
                  More_jobs,
                  deadline,
                  location,
                  skills,
                  views,
                },
                index
              ) => {
                return (
                  <div
                    key={index}
                    className="md:mt-4  md:w-72   "
                  >
                    <div className="hover:bg-indigo-400 bg-indigo-300 w-48 h-68 md:h-72  justify-center md:mx-4 mx-0 rounded shadow-md mt-4 md:w-64 p-4 relative z-1">
                      <h1 className="md:text-xl  font-bold">{job_title}</h1>
                      <div className="text-sm md:text-base">

                     
                      <h2 className="font-semibold hover:cursor-pointer hover:text-blue-900">
                        <a
                          href={More_jobs}
                          target="_blank"
                        >
                          <RiBuilding4Line className="inline text-2xl text-sky-950"/> {company}
                        </a>
                      </h2>
                      <h3><GoPin className="inline text-2xl text-sky-950"/> {location}</h3>

                      <p className="">
                        <strong>Skills:</strong>
                        {skills}
                      </p>
                      <p className="font-semibold">{deadline}</p>
                     
                        <p className=" w-24 font-light rounded p-0.5 inline">
                          {views}
                        </p>
                        <button className="bg-blue-100 hover:bg-blue-600  font-semibold py-1 px-4 rounded   absolute bottom-2 right-2 ">
                        <a
                          href={job_link}
                          target="_blank"
                        >
                            Visit
                        </a>
                          </button>
                     
                    </div>
                  </div>
                  </div>
                );
              }
            )}
          </div>
        ) : (
          <p>No Jobs Found</p>
        )}
      </div>
    </>
  );
};

export default React.memo(Merojob);
{
  /* <div className="p">
  <h2 className="text-xl font-semibold mb-2">Card Title</h2>
  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla orci eget nunc tincidunt aliquet.</p>
</div>
<div className="flex justify-end p-4">
  
</div> */
}
