import { getAcademicPersonnel } from "@/requests/academicPersonnel";
import { useQuery } from "@tanstack/react-query";

class AcademicPersonnel {
  async getAcademicPersonnel() {
    return useQuery({
      queryKey: ["getAcademicPersonnel"],
      queryFn: () => await getAcademicPersonnel(),
    });
  }
}

export const academicPersonnelService = new AcademicPersonnel();
