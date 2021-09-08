import { Button, Typography } from "@material-ui/core";
import { Twitter, Instagram, Facebook } from "@material-ui/icons/";
import { useContext } from "react";
import styled from "styled-components";

import { TranslationContext } from "../contexts/TranslationContext";

const FindUs = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: end;
  margin: 20px;
`;

export default function FindUsComponent() {
  const { findUs } = useContext(TranslationContext).config;
  return (
    <FindUs>
      <Typography variant="h4" component="h2">
        {findUs.label}
      </Typography>
      <Button startIcon={<Twitter />} href="https://twitter.com/">
        {findUs.twitter}
      </Button>
      <Button startIcon={<Instagram />} href="https://instagram.com/">
        {findUs.instagram}
      </Button>
      <Button startIcon={<Facebook />} href="https://facebook.com/">
        {findUs.facebook}
      </Button>
    </FindUs>
  );
}
