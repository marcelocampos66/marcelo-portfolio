interface IAppContext {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IColors {
  primary: string;
  secondary: string;
  third: string;
  oposite: string;
  text: string;
  background: string;
}

interface ITheme {
  title: string;
  colors: IColors;
}
