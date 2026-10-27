import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export default async function Profile() {

  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  if (!await isAuthenticated()) {
    return <div>Anonymous</div>
  }

  if (!user) {
    return <div>Anonymous</div>
  }
  
  const name = `${user.given_name} ${user.family_name}`;
  return (
    <div>
      Welcome, {name}
    </div>
  )
}