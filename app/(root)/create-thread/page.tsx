import { currentUser } from "@clerk/nextjs";
import { Redirect } from "next";

const Page = async () => {
    const user = await currentUser();
    if (!user) return null;

    // const userInfo = await fetchUser(user.id);
    return (
        <h1 className="head-text">
            create thread
        </h1>
    )
}

export default Page