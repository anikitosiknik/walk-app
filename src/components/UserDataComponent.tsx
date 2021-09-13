import {
  Box,
  List,
  Avatar,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
} from "@material-ui/core";
import { useContext } from "react";
import styled from "styled-components";

import { TranslationContext } from "../contexts/TranslationContext";
import { User } from "../types/usersTypes";

const UserDataContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  margin: 0 100px;
`;

const UserDataList = styled(List)`
  width: 100%;
`;

const ProfileAvatar = styled(Avatar)`
  width: 150px !important;
  height: 150px !important;
`;

const UserDataText = styled(Typography)`
  font-weight: 900 !important;
  font-size: 1.2rem !important;
`;

export default function UserDataComponent({
  user,
}: {
  user: User | undefined;
}) {
  const { userDataComponent } = useContext(TranslationContext).config;
  return (
    <UserDataContainer>
      <UserDataList>
        <ListItem>
          <ListItemText>{userDataComponent.name}</ListItemText>
          <ListItemSecondaryAction>
            <UserDataText>{user?.first_name}</UserDataText>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText>{userDataComponent.lastName}</ListItemText>
          <ListItemSecondaryAction>
            <UserDataText>{user?.last_name}</UserDataText>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText>{userDataComponent.email}</ListItemText>
          <ListItemSecondaryAction>
            <UserDataText>{user?.email}</UserDataText>
          </ListItemSecondaryAction>
        </ListItem>
      </UserDataList>
      <ProfileAvatar alt={user?.first_name} src={user?.avatar} />
    </UserDataContainer>
  );
}
