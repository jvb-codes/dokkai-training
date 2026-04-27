const Continue = ({ dialogType }: { dialogType: string }) => {
  return <>{dialogType === "delete" && "Continue"}</>;
};

export default Continue;
