interface ButtonProps {
  buttonType?: "primary" | "secondary";
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  buttonType,
}) => {
  return (
    <>
      {buttonType === "primary" ? (
        <button
          onClick={onClick}
          className={`${buttonType} font-bold bg-[var(--primary-color)] hover:bg-green-600/10 text-sm text-slate-700 px-3 rounded-md py-1 leading-[12px] h-9`}
        >
          {children}
        </button>
      ) : (
        <button
          onClick={onClick}
          className={`${buttonType} font-bold border hover:bg-green-600/10 text-sm text-slate-700 px-3 rounded-md py-1 leading-[12px] h-9`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
