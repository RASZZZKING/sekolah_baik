import "react";

declare module "react" {
  export interface CSSProperties extends CSS.Properties<string | number> {
    "--value"?: string | number;
    "--size"?: string | number;
  }
}
