import { useEffect, useState } from "react";
import CardItem from "./CardItem";

const Card = () => {
    const [usersData, setUsersData] = useState();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsersData(data));
    }, [])

    return <section>
        <CardItem usersData={usersData} />
    </section>
}

export default Card;