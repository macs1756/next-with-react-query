import axiosInstance from "@/axios/primary";
import { IacademicPersonnel, IacademicPersonnelSingle } from "@/types";

export const getAcademicPersonnel = async (value: string | null) => {

  const params = new URLSearchParams([
    ["populate", "*"],
  ]);

  if (value) {
    params.append("filters[fullName][$containsi]", value);
  } else {
    params.delete("filters[fullName][$containsi]");
  }
    
    try {
      const response = await axiosInstance.get<IacademicPersonnel>(
        `/academic-personnel-collections-i?${params}`
      );
      return response.data;
    } catch (err: any) {
      console.error(err);
      throw err;
    }
};

export const getAcademicPersonnelById = async (id: string) => {
  try {
    const response = await axiosInstance.get<IacademicPersonnelSingle>(
      `/academic-personnel-collections-i/${id}?populate=*`
    );
    return response.data;
  } catch (err: any) {
    console.error(err);
    throw err;
  }
};

