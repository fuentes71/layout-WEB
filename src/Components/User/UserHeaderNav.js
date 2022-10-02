import React from 'react';
import { ChakraProvider, Box, Grid } from '@chakra-ui/react';
import UseMedia from '../Hooks/UseMedia';
import { useLocation } from 'react-router-dom';

const UserHeaderNav = () => {
  const mobile = UseMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);
  return (
    <ChakraProvider>
      <Box>
        <Grid>
          <h1>Ponto Go</h1>
          <span></span>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default UserHeaderNav;
