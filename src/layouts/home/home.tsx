import { PropsWithChildren } from "react";

import classes from "./home.module.scss";

export function HomeLayout(props: PropsWithChildren<{}>) {
  return <div className={classes.home}>{props.children}</div>;
}
