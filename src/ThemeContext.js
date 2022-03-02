import { createContext } from "react";

// hooks look like:
// const [theme, setTheme] = useState('darkblue');
const ThemeContext = createContext(["#green", () => {}]);
// we give it an empty function that does nothing
// because if someone calls it, we want it to look like a hook

// we are mimicking a useState hook

export default ThemeContext;
