import React from "react";
import "./NavigationBar.css";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

interface NavItem {
  label: string;
  link: string;
}

const navItems: NavItem[] = [
  { label: "Homepage", link: "/homepage" },
  { label: "Random Cat Facts", link: "/cat-facts" },
  { label: "Random Dog Facts", link: "/dog-facts" },
  { label: "Random Dog Pictures", link: "/dog-pictures" },
  { label: "Random Cat Pictures", link: "/cat-pictures" }
];

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const NavigationBar: React.FC = () => {
  const classes = useStyles();

  return (
    <nav className="NavigationBar">
      <ul className="miniLinks">
        {navItems.map((item) => (
          <li key={item.link}>
            <Button variant="contained" color="primary" href={item.link} className={classes.button}>
              {item.label}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
