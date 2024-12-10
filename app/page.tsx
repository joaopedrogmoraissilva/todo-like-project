import Link from "next/link"

export default function Page() {
    return (
        <div>
            <h1 className="text-3xl font-bold">Welcome to ToDoList</h1>
            <Link className="hover:underline hover:text-blue-500 text-2xl" href="/dashboard/todo">Dashboard</Link>
        </div>
    );
}