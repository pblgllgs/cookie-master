import { ChangeEvent, ReactEventHandler, useState } from "react";
import { Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { Layout } from "../components/layouts"

const ThemeChangerPage = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentTheme(event.target.value);
  };

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
        </CardContent>
      </Card>
    </Layout>
  );
};

export default ThemeChangerPage;
