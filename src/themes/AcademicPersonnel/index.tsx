"use client";
import { academicPersonnelService } from "@/services/academicPersonnel.service";



const OacademicPersonnel: React.FC = () => {
  const { data, error, isLoading } =
    academicPersonnelService.getAcademicPersonnel();

  console.log(data);


  return (
    <div>
      Academic Personnel
      {error ? <div>
        {
          isLoading ? <div>Loading...</div> :
            <div>
              {
                
              }
            </div>
        }
      </div> : <div>Error on side server</div>}
    </div>
  );
};

export default OacademicPersonnel;
