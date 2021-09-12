import { setUsersAction } from "../reducers/usersReducer";
import { getUsersRequest } from "../services/usersService";
import { AppThunkAction } from "../types/storeTypes";

export const getUsersThunk = (page: number): AppThunkAction => {
  return async function (dispatch) {
    let users;
    try {
      users = await getUsersRequest(page);
    } catch {
      return;
    }
    dispatch(
      setUsersAction({
        users: users.data,
        pageInfo: {
          current: users.page,
          pageSize: users.total,
          numberOfPages: users.total_pages,
        },
      })
    );
  };
};
