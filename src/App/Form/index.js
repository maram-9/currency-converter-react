import { useState } from "react";
import { Result } from "./Result";
import {
    Button, 
    Field, 
    Header, 
    Info, 
    LabelText, 
    Loading, 
    Failure,
    StyledForm, 
} from "./styled";

import { useRatesData } from "./useRatesData";

export const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            sourceAmount: +amount, 
            targetAmount: amount * rate, 
            currency,
        });
    }

    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <StyledForm onSubmit={onSubmit}>
            <Header>
                Przelicznik walut
            </Header>
            {ratesData.status === "loading"
             ? (
                <Loading>
                    Sekundka.... <br />Trwa ładowanie walut z Europejskiego Banku Centralnego
                </Loading>
             ) : (
                ratesData.status === "error" ? (
                    <Failure>
                        Hmmm... chyba cos poszlo nie tak. Sprawdz prosze czy masz polaczenie z internetem
                    </Failure>
                ) : (
                    <>
                        <p>
                            <label>
                                <LabelText>
                                    Kwota w zl*:
                                </LabelText>
                                <Field
                                    value={amount}
                                    onChange={({ target }) => setAmount(target.value)}
                                    placeholder="Wpisz kwote w zl"
                                    type="number"
                                    required
                                    step="0.01" />
                            </label>
                        </p>
                        <p>
                            <label>
                                <LabelText>Wybierz walutę:</LabelText>
                                <Field
                                    as="select"
                                    value={currency}
                                    onChange={({ target }) => setCurrency(target.value)}
                                >
                                    {Object.keys(ratesData.rates).map((currency => (
                                        <option
                                            key={currency}
                                            value={currency}
                                        >
                                            {currency}
                                        </option>
                                    )))}
                                </Field>
                            </label>
                        </p>
                        <p>
                            <Button>Przelicz!</Button>
                        </p>
                        <Info>
                            Kursy walut pobierane sa z Europejskiego Banku Centralnego. <br />
                            Aktualne na dzień:&nbsp;<strong>{ratesData.date}</strong>
                        </Info>
                        <Result result={result} />
                    </>
                    )
                )}           
                </StyledForm>
            );
        };