import { useSelector, useDispatch } from "react-redux";
import { SET_INPUT } from "../redux/reducers/mathReducer";

export const Input = () => {
  const { result } = useSelector((state) => state.mathReducer);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch({
      type: SET_INPUT,
      payload: +event.target.value,
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingresa un valor"
        onChange={handleChange}
      />
      <p>{result}</p>
    </div>
  );
};
