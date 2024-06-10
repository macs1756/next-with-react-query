"use client";

import { academicPersonnelService } from "@/services/academicPersonnel.service";
import { useRouter } from "next/router";
import React from "react";

const OacademicPersonnelSingle: React.FC = () => {
  const router = useRouter();

  const { id } = router.query;

  if (!id) return <div>Error with found id</div>;

  const currentId = Array.isArray(id) ? id[0] : id;
  const { data, error, isLoading } =
    academicPersonnelService.getAcademicPersonnelById(currentId);

  if (error) return <div>Error on side server</div>;

  return (
    <div className="py-[50px]">
      {data &&
        (isLoading ? (
          <div>Loading...</div>
        ) : (
          <React.Fragment>
            <div>{data?.data.attributes.fullName}</div>
            <div>{data?.data?.attributes.email}</div>
            <div>Affiliated {data.data.attributes.isAffiliated.toString()}</div>
          </React.Fragment>
        ))}
    </div>
  );
};

export default OacademicPersonnelSingle;
