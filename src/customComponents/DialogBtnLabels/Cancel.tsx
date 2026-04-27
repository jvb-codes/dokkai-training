const Cancel = ({ dialogType }: { dialogType: string }) => {
  const dialogTypes = ["delete"];

  return <div>{dialogTypes.includes(dialogType) && "Cancel"}</div>;
};

export default Cancel;
