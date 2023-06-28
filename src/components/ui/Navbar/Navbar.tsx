import Link from "next/link";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
const Navbar = () => {
  return (
    <AppBar elevation={0} position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuOutlined color="primary" />
        </IconButton>
        <Link href={"/"}>
          <Typography variant="h6" color="primary">
            CookiMaster
          </Typography>
        </Link>



        <div style={{flex:1}}></div>
        <Link href={"/theme-changer"}>
          <Typography variant="h6" color="primary" sx={{out:'none'}}>
            Cambiar Tema{" "}
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
