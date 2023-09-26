import Heading from "../components/common/Heading";

const Contact = () => {
    return (
        <>
            <Heading heading="Contact Me" />
            <form className="bg-slate-100 p-4">
                <div className="my-2">
                    <label>Email</label>
                    <input type="email" className="border-2 border-black" />
                </div>

                <div className="my-2">
                    <label>Fullname:</label>
                    <input type="text" className="border-2 border-black" />
                </div>
            </form>
        </>
    )
}

export default Contact;