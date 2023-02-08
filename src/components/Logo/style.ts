import styled from "styled-components";

export const LogoName = styled.p(({ theme }) => ({
  fontWeight: theme.fontWeight.m,
  fontSize: theme.fontSize.l,
  color: theme.colors.primary,
  paddingLeft: theme.sizes.xs,
  width: "70px",
}));
