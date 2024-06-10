import axiosInstance from "@/axios/primary";

export const getAcademicPersonnel = async () => {
  try {
    const response = await axiosInstance.get<>(
      "/academic-personnel-collections-i"
    );
    return response.data;
  } catch (err: any) {
    console.error(err);
    throw err;
  }
};
