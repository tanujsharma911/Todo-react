

function Navbar({ theme, setTheme, changeTheme }) {

    return (
        <div className='sticky top-0 left-0 w-screen flex items-center justify-end p-3'>
            <div>
                <button className="py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    type="button"
                    onClick={() => changeTheme()}
                >{theme === "light" ? "🌙" : "☀️"}</button>
            </div>
        </div >
    )
}

export default Navbar