import { Box, Paper } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { ThemeContext } from "../contexts/ThemeContext";
import { useAppSelector } from "../store/hooks";
import { themes } from "../types/ThemeTypes";
import { User } from "../types/usersTypes";
import MapComponent from "./MapComponent";
import UserDataComponent from "./UserDataComponent";

const ProfileContainer = styled(Paper)`
  height: 100%;
  background-color: ${({ theme }: { theme: themes }) =>
    theme === themes.light ? "#fff" : "#424242"};
`;

const ProfileDataContainer = styled(Box)`
  margin: 0 20px;
  padding: 0 20px;
  height: 100%;
  background-color: ${({ theme }: { theme: themes }) =>
    theme === themes.light ? "rgba(0, 0, 0, 0.08)" : "#303030"};
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
`;

export default function ProfilePageComponent() {
  const { currentTheme } = useContext(ThemeContext);
  const { currentUserId, users } = useAppSelector((state) => state.users);
  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {
    const user = users.find((el) => el.id === currentUserId);
    setCurrentUser(user);
  }, [currentUserId, users]);

  return (
    <ProfileContainer square theme={currentTheme}>
      <ProfileDataContainer theme={currentTheme}>
        <UserDataComponent user={currentUser} />
        {/* ROUTES ARE MOCKED DATA */}
        <MapComponent
          routes={[
            {
              date: new Date(),
              polyline: [
                [51.51, -0.1],
                [51.51, -0.12],
                [51.501, -0.1],
                [51.505, -0.09],
                [51.51, -0.1],
              ],
            },
            {
              date: new Date(1631538495900),
              polyline: [
                [51.51, -0.12],
                [51.501, -0.1],
                [51.505, -0.09],
                [51.51, -0.1],
                [51.501, -0.1],
                [51.505, -0.09],
                [51.51, -0.1],
              ],
            },
          ]}
        />
      </ProfileDataContainer>
    </ProfileContainer>
  );
}
