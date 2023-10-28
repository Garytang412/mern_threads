import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";

const Page = async () => {
    const user = await currentUser();
    if (!user) return null;

    const userInfo = await fetchUser(user.id);

    if (!userInfo?.onboarded) redirect('/onboarding'); // redirect to onboarding page if not finish account setup.


    return (
        <>
            <h1 className="head-text">
                create thread
            </h1>

        </>
    )
}

export default Page