import { useAuthContext } from "./useAuthContext";
import { useTodosContext } from "./useTodosContext";

export const useSignout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: todosDispatch } = useTodosContext();

  const signout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    dispatch({ type: "SIGNOUT" });
    todosDispatch({ type: "SET_TODOS", payload: null });
  };

  return { signout };
};
