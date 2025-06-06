import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showDiv, hideDiv } from "../Componets/divSlice";

const NavigationWithAnimation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigationRoute = (route) => {
    dispatch(showDiv());

    setTimeout(() => {
      dispatch(hideDiv());
      navigate(route);
      // setTimeout(() => {
      //   window.location.reload();
      // }, 990);
    }, 1000);
  };

  return { handleNavigationRoute };
};

export default NavigationWithAnimation;
