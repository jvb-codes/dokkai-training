const Ok = ({ dialogType }: { dialogType: string }) => {
  const okTypes = [
    "duplicate",
    "wordNotFound",
    "wordNotSelected",
    "networkError",
    "404",
  ];

  return <>{okTypes.includes(dialogType) && "Ok"}</>;
};

export default Ok;
