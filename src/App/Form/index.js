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
} from "./styled";

import { useRatesDate } from "./useRatesData";

export const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useRatesDate();

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
        <form onSubmit={onSubmit}>
            <Header>
                Przelicznik walut
            </Header>
            {ratesData.state === "loading"
             ? (
                <Loading>
                    Sekundka.... <br />Trwa ładowanie walut z Europejskiego Banku Centralnego
                </Loading>
             ) : (
                ratesData.state === "error" ? (
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
                </form>
            );
        };