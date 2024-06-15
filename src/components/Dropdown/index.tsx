import { useState, useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";
import { academicPersonnelService } from "@/services/academicPersonnel.service";

const Dropdown = () => {
  const [show, setShow] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current, {
      easing: "linear"
    });
  }, [parent]);

  const reveal = () => setShow(!show);

  const { data } = academicPersonnelService.getAcademicPersonnel();

  return (
    <div className="relative py-[20px]">
      <div className="absolute top-0">
        <div
          ref={parent}
          className="bg-white w-[300px] rounded-sm  relative mt-[24px] "
        >
          <strong
            className="dropdown-label block bg-white  text-black w-full cursor-pointer p-[10px]"
            onClick={reveal}
          >
            Open
          </strong>

          {show && (
            <ul className={"text-black py-[10px] bg-white notScale"}>
              {data &&
                data.data.map((e) => (
                  <li
                    className="py-[5px] px-[10px] border-b"
                    key={e.id + "dropdown"}
                  >
                    {e.attributes.fullName}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
