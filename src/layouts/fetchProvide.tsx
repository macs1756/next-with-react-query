import { ReactNode } from "react";

interface IlayoutFetch {
  children: ReactNode;
  isLoading: boolean;
  error: Error | null;
}

const LayoutFetch: React.FC<IlayoutFetch> = ({
  children,
  error,
  isLoading,
}) => {
  return (
    <div className="py-[50px]">
      {!error ? (isLoading ? <div>Loading...</div> : children) :
        <div>Error on side server</div>}
    </div>
  );
};

export default LayoutFetch;
