interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition ${className || ''}`}
  >
    {children}
  </button>
);

export default Button;
