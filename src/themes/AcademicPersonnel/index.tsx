"use client"

import axiosInstance from "@/axios/primary";
import { academicPersonnelService } from "@/services/academicPersonnel.service";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

const OacademicPersonnel: React.FC = () => {

 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await axiosInstance.get(
         "/academic-personnel-collections-i"
       ); 
       setData(response.data);
     } catch (err: any) {
       setError(err);
     } finally {
       setLoading(false);
     }
   };

   fetchData();
 }, []);

  console.log(data);
  
  const dataT = academicPersonnelService.getAcademicPersonnel();

  console.log(dataT);
  

  return <div>Academic Personnel</div>;
}

export default OacademicPersonnel;