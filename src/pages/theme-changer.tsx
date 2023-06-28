import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";
import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Layout from "@/components/layouts/Layout";
import { GetServerSideProps } from "next";
import { ThemeOptions } from "@/types/themes";

type Props = {
  theme: ThemeOptions;
};
const ThemeChangerPage = ({ theme }: Props) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeOptions>(theme);

  const handleChangeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTheme(e.target.value as ThemeOptions);
    Cookie.set("theme", e.target.value);
  };

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup value={currentTheme} onChange={handleChangeTheme}>
              <FormControlLabel
                value="LIGHT"
                control={<Radio />}
                label="Light"
              />
              <FormControlLabel value="DARK" control={<Radio />} label="Dark" />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default ThemeChangerPage;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { theme = "LIGHT" } = req.cookies;
  const themes = ["LIGHT", "DARK"];

  return {
    props: {
      theme: themes.includes(theme) ? theme : ThemeOptions,
    },
  };
};
