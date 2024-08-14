const Child32 = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[300px] bg-red-300">
      Child3-2<div>{children}</div>
    </div>
  );
};

export default Child32;
