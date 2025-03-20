import { Toaster } from "react-hot-toast";
import UserDataTable from "@/components/resetpass/userDataTable";
import AddNewUser from "@/components/resetpass/addNewUser";
export default function FileUpload() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4 p-8">
      <h1 className="text-3xl">This is all User & Password</h1>
      <Toaster />

      <div className="font-mono">
        <h1 className="mb-5 text-xl font-bold">Testing Reset Password POC</h1>
        <ol className="list-decimal">
          <li>Create new User with your email</li>
          <li>Click Reset Password Button</li>
          <li>Follow Link in your email to reset password page</li>
          <li>Refresh database again to see if password is update</li>
        </ol>
      </div>
      <UserDataTable />
      <AddNewUser />
    </main>
  );
}
