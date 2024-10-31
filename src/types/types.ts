import { ReactNode } from "react";

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
  autofocus?: string;
  disabled?: string;
  form?: string;
  formaction?: string;
  formenctype?: string;
  formmethod?: string;
  formnovalidate?: string;
  formtarget?: string;
  name?: string;
  type?: string;
  value?: string;
};

export type LinkBtn = {
  accesskey?: string;
  coords?: string;
  download?: string;
  href?: string;
  hreflang?: string;
  name?: string;
  rel?: string;
  rev?: string;
  shape?: string;
  tabindex?: string;
  target?: string;
  title?: string;
  type?: string;
};

export type CustomBtn = {
  tag: string;
  attr: LinkBtn | Button | any;
};
