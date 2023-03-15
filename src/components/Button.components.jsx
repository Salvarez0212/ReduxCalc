import { useDispatch } from "react-redux";

export const Button = ({ action, children }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: action });
  };

  return <button onClick={handleClick}>{children}</button>;
};
