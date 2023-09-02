import {useCurrentDate } from "./useCurrentDate";
import { Wrapper } from "./styled"

const formatDate = (date) => date.toLocaleString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit", 
    second: "2-digit",
    day: "numeric", 
    year: "numeric",
    month: "long"
});

export const Clock = () => {
    const date = useCurrentDate();

    return (
        <Wrapper>
            Today is
            {" "}
            {formatDate(date)}
        </Wrapper>
    )
};