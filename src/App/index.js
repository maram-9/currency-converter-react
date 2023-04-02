import { Form } from './Form';
import { Clock } from "./Clock";
import { Content } from "./styled";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Content>
                <Clock />
                <Form />
            </Content>
        </ThemeProvider>
    );
}

export default App; 