import { AppBar, IconButton, Toolbar, Link, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NextLink from 'next/link';

export const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuOutlinedIcon />
        </IconButton>
        <NextLink href="/" passHref>
          <Link>
            <Typography variant="h6" color="white">
              Cookie Master
            </Typography>
          </Link>
        </NextLink>
        <div style={{ flex: 1 }} />
        <NextLink href="/theme-changer" passHref>
          <Link>
            <Typography variant="h6" color="white">
              Cambiar tema
            </Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
