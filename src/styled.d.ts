import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    backgroundColor: string;
    buttonColor: string;
  }
}
// DefaultTheme = theme의 interface를 정의 하는곳  #3.6
