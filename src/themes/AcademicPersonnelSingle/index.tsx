"use client"

import { academicPersonnelService } from "@/services/academicPersonnel.service";
import { useRouter } from "next/router";

const OacademicPersonnelSingle: React.FC = () => {

  const router = useRouter()

  const { id } = router.query;

 

 // const { data, error, isLoading } = academicPersonnelService.getAcademicPersonnelById(id);

  console.log(id);
  

  return <div>OacademicPersonnelSingle</div>;
};

export default OacademicPersonnelSingle;
