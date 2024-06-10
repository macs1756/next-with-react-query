"use client";

import axiosInstance from "@/axios/primary";
import { getAcademicPersonnel } from "@/requests/academicPersonnel";
import { academicPersonnelService } from "@/services/academicPersonnel.service";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

const OacademicPersonnel: React.FC = () => {
  

  const {data, error, isLoading} = academicPersonnelService.getAcademicPersonnel();

  console.log(data);
  console.log(error);
  console.log(isLoading);
  

  return <div>Academic Personnel</div>;
};

export default OacademicPersonnel;
