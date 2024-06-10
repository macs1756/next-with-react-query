"use client"

import axiosInstance from "@/axios/primary";
import { academicPersonnelService } from "@/services/academicPersonnel.service";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

const OacademicPersonnel: React.FC = () => {



 
  const data = academicPersonnelService.getAcademicPersonnel();

   console.log(data);
  

  return <div>Academic Personnel</div>;
}

export default OacademicPersonnel;