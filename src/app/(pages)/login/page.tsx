import Link from "next/link"



export default function Login(){


    return <div>
            <h1>Login form</h1>
            <div>
                
            </div>
            <div className="flex gap-6">
                <button className="bg-green-200 p-2 rounded-lg">Login</button>
                <Link href="/" className="bg-gray-200 p-2 rounded-lg">Cancel</Link>
            </div>
        </div>
}