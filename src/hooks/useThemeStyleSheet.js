import { useTheme } from "@react-navigation/native"
import { useMemo } from "react";

export const useThemeStyleSheet = (createStyles, ...rest) => {

  const theme = useTheme();

  const styles = useMemo(() => createStyles(theme, ...rest), [theme]);

  return styles;

}

