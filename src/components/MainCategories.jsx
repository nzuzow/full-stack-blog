import { Link } from "react-router-dom";

const MainCategories = () => {
    const links = [
        {
            path: '/posts',
            label: 'All Posts',
            btnCls: true,
        },
        {
            path: '/posts?cat=web-design',
            label: 'Web Design',
            btnCls: false,
        },
        {
            path: '/posts?cat=development',
            label: 'Development',
            btnCls: false,
        },
        {
            path: '/posts?cat=databases',
            label: 'Databases',
            btnCls: false,
        },
        {
            path: '/posts?cat=seo',
            label: 'Search Engines',
            btnCls: false,
        },
        {
            path: '/posts?cat=marketing',
            label: 'Marketing',
            btnCls: false,
        },
    ];

    return (
        <div className='hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8'>
            {/* Links */}
            <div className="flex-1 flex items-center justify-between flex-wrap">
                {links.map((link, index) => (
                    <Link
                        to={link.path}
                        key={index}
                        className={`rounded-full px-4 py-2 ${link.btnCls ? 'bg-blue-800 text-white' : 'hover:bg-blue-50'}`}
                    >{link.label}</Link>
                ))}
            </div>
            <span className="text-xl font-medium">|</span>
            {/* Search */}
            <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="gray"
                >
                    <circle cx="10.5" cy="10.5" r="7.5" />
                    <line x1="16.5" y1="16.5" x2="22" y2="22" />
                </svg>
                <input type="text" placeholder="search posts" className="bg-transparent" />
            </div>
        </div>
    );
};

export default MainCategories;