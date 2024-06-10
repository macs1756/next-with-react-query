import axiosInstance from "@/axios/primary";
import { IacademicPersonnel } from "@/types";

export const getAcademicPersonnel = async () => {
  try {
    const response = await axiosInstance.get<IacademicPersonnel>(
      "/academic-personnel-collections-i"
    );
    return response.data;
  } catch (err: any) {
    console.error(err);
    throw err;
  }
};
