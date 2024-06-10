import { getAcademicPersonnel } from "@/requests/academicPersonnel";
import { useQuery } from "@tanstack/react-query";

class AcademicPersonnel {
  
    getAcademicPersonnel() {
    const { data, isLoading, error } = useQuery({
      queryKey: ["getAcademicPersonnel"],
      queryFn: () => getAcademicPersonnel(),
    });

    return { data, isLoading, error };
  }
}

export const academicPersonnelService = new AcademicPersonnel();
