const Navbar = ({ isHome }) => {
    return (
        <nav className="flex justify-between px-40 py-3 text-white bg-blue-950">
            <div className="order-1 text-xl font-bold flex items-center">Expense Manager</div>
            <div className="order-2">
                <ul className="flex gap-10 items-center">
                    <li className="cursor-pointer hover:text-amber-300 duration-150">Home</li>
                    <li>
                        <button className="bg-indigo-400 border-0 rounded-md px-4 py-2 cursor-pointer hover:bg-indigo-500 duration-500">Log in</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;