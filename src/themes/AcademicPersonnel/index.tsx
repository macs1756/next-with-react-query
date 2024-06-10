"use client";
import { DomainFrontend } from "@/consts";
import { academicPersonnelService } from "@/services/academicPersonnel.service";
import Link from "next/link";

const OacademicPersonnel: React.FC = () => {
  const { data, error, isLoading } =
    academicPersonnelService.getAcademicPersonnel();

  return (
    <div className="py-[50px]">
      {!error ? (
        <div>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div>
              <h5 className="mb-[33px]">
                Total: {data?.meta.pagination.total}
              </h5>
              {data?.data.map((e) => (
                <div className="p-[8px]" key={e.id + "academicPersonnelCard"}>
                  <Link href={DomainFrontend + "/academic-personnel/" + e.id}>
                    {e.attributes.fullName}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>Error on side server</div>
      )}
    </div>
  );
};

export default OacademicPersonnel;
