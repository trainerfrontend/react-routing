import UseFetch from "../../hooks/UseFetch";
import CardItem from "./CardItem";

const Card = () => {
    const { data } = UseFetch("https://jsonplaceholder.typicode.com/users");

    return <section>
        <CardItem usersData={data} />
    </section>
}

export default Card;