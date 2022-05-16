import { ChangeEvent, FC, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { Layout } from '../components/layouts';
import Cookies from 'js-cookie';
import axios from 'axios';


interface Props{
  theme: string;
}

const ThemeChangerPage: FC<Props> = ({theme}) => {

  const [currentTheme, setCurrentTheme] = useState(theme);

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value;
    setCurrentTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme);
    Cookies.set('theme', selectedTheme);
  };

  const onClick = async () => {
    const { data } = await axios.get('/api/hello');
    console.log({ data });
  };

  useEffect(() => {
    console.log('localstorage: ', localStorage.getItem('theme'));
    console.log('Cookies: ', Cookies.get('theme'));
  }, []);

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Theme</FormLabel>
            <RadioGroup value={currentTheme} onChange={onThemeChange}>
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="Light"
              ></FormControlLabel>
              <FormControlLabel
                value="dark"
                control={<Radio />}
                label="Dark"
              ></FormControlLabel>
              <FormControlLabel
                value="custom"
                control={<Radio />}
                label="Custom"
              ></FormControlLabel>
            </RadioGroup>
          </FormControl>
          <Button onClick={onClick}>Request</Button>
        </CardContent>
      </Card>
    </Layout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { name = 'no names', theme = 'light' } = req.cookies;

  const validTheme = ['light', 'dark', 'custom'];

  return {
    props: {
      theme: validTheme.includes(theme)? theme : 'dark',
      name,
    },
  };
};

export default ThemeChangerPage;
