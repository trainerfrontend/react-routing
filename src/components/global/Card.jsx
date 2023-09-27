import UseFetch from "../../hooks/UseFetch";
import CardItem from "./CardItem";

const Card = () => {
    const { data, isLoading, isError } = UseFetch("https://jsonplaceholder.typicode.com/users");

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>Error...</h1>
    }
    return <section>
        <CardItem usersData={data} />
    </section>
}

export default Card;