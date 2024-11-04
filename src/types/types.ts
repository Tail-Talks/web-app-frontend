import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export type PropWithChildren = {
  children: ReactNode;
};

export type UserRoutes = {
  id: string | number;
  path: string;
  Component: React.FC<any>;
  componentAdditionalProps?: any;
  hiddenForLoggedInUser?: boolean;
  title?: string;
};

export type Button = {
  accesskey?: string;
  autofocus?: boolean;
  disabled?: boolean;
  form?: string;
  formaction?: string;
  formenctype?: string;
  formmethod?: string;
  formnovalidate?: boolean;
  formtarget?: string;
  name?: string;
  type?: "button" | "submit" | "reset";
  value?: string;
};

export type LinkBtn = {
  accesskey?: string;
  download?: string;
  href?: string;
  hreflang?: string;
  rel?: string;
  rev?: string;
  tabindex?: number;
  target?: string;
  title?: string;
  type?: string;
};

export type CustomBtn = {
  tag: string;
  value: string;
  attrBtn?: Button;
  attrLink?: LinkBtn;
};
