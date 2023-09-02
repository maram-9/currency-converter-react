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
                Currency converter
            </Header>
            {ratesData.status === "loading"
             ? (
                <Loading>
                    Wait a second.... <br />Currencies from the European Central Bank are being loaded
                </Loading>
             ) : (
                ratesData.status === "error" ? (
                    <Failure>
                        Hmmm... something went wrong. Please check if you have internet connection
                    </Failure>
                ) : (
                    <>
                        <p>
                            <label>
                                <LabelText>
                                    Amount in PLN*:
                                </LabelText>
                                <Field
                                    value={amount}
                                    onChange={({ target }) => setAmount(target.value)}
                                    placeholder="Enter the amount in PLN"
                                    type="number"
                                    required
                                    step="0.01" />
                            </label>
                        </p>
                        <p>
                            <label>
                                <LabelText>Choose currency:</LabelText>
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
                            <Button>Convert!</Button>
                        </p>
                        <Info>
                            Exchange rates are taken from the European Central Bank. <br />
                            Current date&nbsp;<strong>{ratesData.date}</strong>
                        </Info>
                        <Result result={result} />
                    </>
                    )
                )}           
                </StyledForm>
            );
        };