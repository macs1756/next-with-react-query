import axiosInstance from "@/axios/primary";
import {
  getAcademicPersonnel,
  getAcademicPersonnelById,
} from "@/requests/academicPersonnel";
import { useQuery } from "@tanstack/react-query";


class AcademicPersonnel {
//next time use class as folder for axios requests and use tanstack query in jsx

  getAcademicPersonnel(value: string | null) {

  
    const { data, isLoading, error, refetch } = useQuery({
      queryKey: ["getAcademicPersonnel"],
      queryFn: () => getAcademicPersonnel(value),
    });
    
    refetch();

    return { data, isLoading, error };
  }

  getAcademicPersonnelById(id: string) {
    const { data, isLoading, error } = useQuery({
      queryKey: ["getAcademicPersonnelById"],
      queryFn: () => getAcademicPersonnelById(id),
    });
    return { data, isLoading, error };
  }

  
  deleteAcademicPersonnelById(id: string) {
    try {
      const response = axiosInstance.delete(
        `/academic-personnel-collections-i/${id}`
      );
      return { response };
    } catch (err: any) {
      console.error(err);
      return err;
    }
  }

}

export const academicPersonnelService = new AcademicPersonnel();
