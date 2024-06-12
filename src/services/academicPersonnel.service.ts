import {
  deleteAcademicPersonnelById,
  getAcademicPersonnel,
  getAcademicPersonnelById,
} from "@/requests/academicPersonnel";
import { useMutation, useQuery } from "@tanstack/react-query";

class AcademicPersonnel {
  getAcademicPersonnel() {
    const { data, isLoading, error } = useQuery({
      queryKey: ["getAcademicPersonnel"],
      queryFn: () => getAcademicPersonnel(),
    });
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
    const { status } = useMutation({
      mutationKey: ["deleteAcademicPersonnel"],
      mutationFn: () => deleteAcademicPersonnelById(id),
    });
    return { status };
  }
}

export const academicPersonnelService = new AcademicPersonnel();
