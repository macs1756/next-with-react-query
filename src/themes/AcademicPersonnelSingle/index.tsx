"use client";
import LayoutFetch from "@/layouts/fetchProvide";
import { academicPersonnelService } from "@/services/academicPersonnel.service";
import { urlIdToString } from "@/utils";
import { useRouter } from "next/router";
import React from "react";

const OacademicPersonnelSingle: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <div>Error with found id</div>;

  const { data, error, isLoading } =
  academicPersonnelService.getAcademicPersonnelById(urlIdToString(id));

  const deleteEntity = (id: string) => {
    alert(id)
    // need to call academicPersonnelService with dethod delete
  }

  return (
    <LayoutFetch error={error} isLoading={isLoading}>
      <div>{data?.data.attributes.fullName}</div>
      <div>{data?.data.attributes.email}</div>
      <div>Affiliated {data?.data.attributes.isAffiliated.toString()}</div>

      <button
        className="mt-[24px] rounded-lg py-[8px] px-[14px] bg-slate-600"
        onClick={() => deleteEntity(urlIdToString(id))}>
        Delete this entity
      </button>
    </LayoutFetch>
  );
};

export default OacademicPersonnelSingle;
