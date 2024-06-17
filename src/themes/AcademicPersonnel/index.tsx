"use client";
import { DomainFrontend } from "@/consts";
import { academicPersonnelService } from "@/services/academicPersonnel.service";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const OacademicPersonnel: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [debounceInputValue] = useDebounce(inputValue, 1000);

  const { data, error, isLoading, refetch } =
    academicPersonnelService.getAcademicPersonnel(debounceInputValue);

  useEffect(() => {
    refetch();
  }, [debounceInputValue]);

  return (
    <div className="py-[50px]">
      <input
        className="text-black mb-[30px] p-[5px]"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        type="text"
        value={inputValue}
      />

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
