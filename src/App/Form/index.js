import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        
        calculateResult(currency, amount);
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <fieldset className="form__fieldset">
                <h1 className="form__legend">
                Przelicznik walut
            </h1>
            <p>
                <label>
                    <span className="form__labelText">
                        Kwota w zl*:
                    </span>
                    <input
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                    placeholder="Wpisz kwote w zl"
                    className="form__field"
                    type="number"
                    required
                    step="0.01"
                    />
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">
                        Wybierz walutę:
                    </span>
                    <select 
                        className="form__field"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                    >
                        {currencies.map((currency => (
                            <option
                            key={currency.short}
                            value={currency.short}
                            >
                             {currency.name}   
                            </option>
                        )))}
                    </select>
                </label>
            </p>
            </fieldset>
            <p>
                <button className="form__button">Przelicz!</button>
            </p>
            <p className="form__info">
                Kursy pochodza ze stron nbp.pl z dnia 06.12.2022
                </p>
            <Result result={result} />           
        </form>
    );
};