import "./Users.Module.css"

const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        profession: "Software Engineer",
        password: "********",
    },
    {
        id: 2,
        name: "Sarah Ahmed",
        email: "sarah.ahmed@example.com",
        profession: "UI/UX Designer",
        password: "********",
    },
    {
        id: 3,
        name: "Michael Smith",
        email: "m.smith@example.com",
        profession: "Accountant",
        password: "********",
    },
    {
        id: 4,
        name: "Emily Johnson",
        email: "emily.j@example.com",
        profession: "Nurse",
        password: "********",
    },
    {
        id: 5,
        name: "Ali Hassan",
        email: "ali.hassan@example.com",
        profession: "Marketing Specialist",
        password: "********",
    },
];

export default function Users() {
    return <div className="flex flex-col w-full mx-auto ">
        <div className="bg-white px-2 py-3" id="addNew">
            <p className="font-semibold capitalize rounded-xl  md:text-2xl border-b border-slate-200">add new user</p>

            <div className="  border-slate-400 rounded-xl bg-white/80 my-3 px-4 py-1">

                <div className="grp">

                    <input type="text" name="" id="userid" placeholder="enter full name" className="bg-blue-50 p-2 rounded m-2 w-full outline-none focus:ring-2 focus:ring-blue-500" />


                    <input type="text" name="" id="empID" placeholder="profession" className="bg-blue-50 p-2 rounded m-2 w-full outline-none focus:ring-2 focus:ring-blue-400" />

                    <input type="email" name="" id="dateID" placeholder="email" className="bg-blue-50 p-2 rounded m-2 w-full outline-none focus:ring-2 focus:ring-blue-400" />
                    <input type="text" name="" id="dateID" placeholder="password" className="bg-blue-50 p-2 rounded m-2 w-full outline-none focus:ring-2 focus:ring-blue-400" />

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">

                        <button className="bg-linear-to-r from-blue-400 to-purple-500 rounded px-4 text-white uppercase py-1 ms-2 ">Add</button>
                        <button className="bg-linear-to-r from-blue-400 to-green-500 rounded px-4 text-white uppercase py-1 ms-2 ">draft</button>
                        <button className="bg-linear-to-r from-blue-400 to-red-500 rounded px-4 text-white uppercase py-1 ms-2 ">email first</button>
                        <button className="bg-linear-to-r from-yellow-400 to-violet-500 rounded px-4 text-white uppercase py-1 ms-2 ">ask</button>
                        <button className="bg-linear-to-r from-green-400 to-blue-500 rounded px-4 text-white uppercase py-1 ms-2 ">Planning</button>
                    </div>
                </div>

                <div className="users ">
                    <p className="font-semibold text-center border-b my-4 border border-slate-400 rounded-b-lg md:text-2xl">Current Registered users</p>
                    <div className="users_indb rounded border px-2 py-3  overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="px-2  text-start">id</th>
                                    <th className="px-2 text-start ">name</th>
                                    <th className="px-2  text-start">email</th>
                                    <th className="px-2  text-start">profession</th>
                                    <th className="px-2  text-start">password</th>
                                    <th className="px-2 text-start">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => {
                                    return <tr>

                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.profession}</td>
                                        <td>{user.password}</td>
                                        <td className="underline text-blue-400 cursor-pointer">actions</td>

                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
}