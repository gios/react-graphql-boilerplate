import { PropsWithChildren } from "react";

import classes from "./home.module.scss";

type Props = {};

export function HomeLayout(props: PropsWithChildren<Props>) {
  return <div className={classes.home}>{props.children}</div>;
}
