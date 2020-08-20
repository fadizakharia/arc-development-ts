import createPalette, { Palette } from "@material-ui/core/styles/createPalette";
import { createMuiTheme } from "@material-ui/core";
import createTypography from "@material-ui/core/styles/createTypography";

declare module "@material-ui/core/styles/createTypography" {
  export type variant = Variant | "tab" | "estimate";
  export interface Typography
    extends Record<variant, TypographyStyle>,
      FontStyle,
      TypographyUtils {}
  export interface TypographyOptions
    extends Partial<
      Record<variant, TypographyStyleOptions> & FontStyleOptions
    > {}
  export default function createTypography(
    palette: Palette,
    typography: TypographyOptions | ((palette: Palette) => TypographyOptions)
  ): Typography;
}
declare module "@material-ui/core/styles/createPalette" {
  interface CommonColors {
    black: string;
    white: string;
    blue: string;
    orange: string;
  }
  interface Palette {
    common: CommonColors;
  }
  interface PaletteOptions {
    common?: Partial<CommonColors>;
  }
  export default function createPalette(palette: PaletteOptions): Palette;
}
const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

const theme = createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
  },
});
export default theme;
