import { Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useCallback, useContext, useEffect, useMemo } from "react";
import styled from "styled-components";

import { TranslationContext } from "../contexts/TranslationContext";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getUsersThunk } from "../thunks/usersThunks";

const UsersPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 15px;
  padding: 20px;
`;

const GridPagination = styled(Pagination)`
  align-self: center;
`;

export default function UsersPageComponent() {
  const dispatch = useAppDispatch();
  const { users, pageInfo } = useAppSelector((state) => state.users);
  const { usersPage } = useContext(TranslationContext).config;

  useEffect(() => {
    dispatch(getUsersThunk(1));
  }, []);

  const columnConfig: GridColDef[] = useMemo(
    () => [
      { field: "id", headerName: usersPage.id, width: 90 },
      {
        field: "first_name",
        headerName: usersPage.firstName,
        width: 150,
      },
      {
        field: "last_name",
        headerName: usersPage.lastName,
        width: 150,
      },
    ],
    [usersPage]
  );

  const changePageHandler = useCallback(
    (e, page: number) => {
      dispatch(getUsersThunk(page));
    },
    [users]
  );

  return (
    <UsersPageContainer>
      <Typography variant="h2">{usersPage.users}</Typography>
      <DataGrid rows={users} columns={columnConfig} hideFooter />
      <GridPagination
        page={pageInfo.current}
        count={pageInfo.numberOfPages || 1}
        onChange={changePageHandler}
        size="large"
        shape="rounded"
      />
    </UsersPageContainer>
  );
}
