
import { styled } from "@mui/material/styles";
import PrimarySearchAppBar from "./navbar";
import MiniDrawer from "./sidebar";

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  paddingLeft: 50,
}));
const MainContentLayout = styled("div")(({ theme }) => ({
  paddingTop: 20,
  paddingLeft: 70,
  paddingRight: 70,
}));

export const DashboardLayout = (props) => {
  const { children } = props;
  return (
    <>
      <MiniDrawer />
      <DashboardLayoutRoot>
        <PrimarySearchAppBar />
        <MainContentLayout>{children}</MainContentLayout>
      </DashboardLayoutRoot>
    </>
  );
};
