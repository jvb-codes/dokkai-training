type IconPropsType = {
  iconName: string;
  title?: string;
  onClick?: <T>(arg?: T) => void;
  styles?: string;
};

export const Icon = ({ iconName, title, onClick, styles }: IconPropsType) => {
  return (
    <>
      <span
        title={title}
        className={`material-symbols-outlined ${styles}`}
        onClick={onClick}
      >
        {iconName}
      </span>
    </>
  );
};
