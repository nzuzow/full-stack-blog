import { Link } from "react-router-dom";
import Search from "./Search";

const SideMenu = () => {
    const categories = [
        {
            path: '/posts',
            label: 'All',
        },
        {
            path: '/posts?cat=web-design',
            label: 'Web Design',
        },
        {
            path: '/posts?cat=development',
            label: 'Development',
        },
        {
            path: '/posts?cat=databases',
            label: 'Databases',
        },
        {
            path: '/posts?cat=seo',
            label: 'Search Engines',
        },
        {
            path: '/posts?cat=marketing',
            label: 'Marketing',
        },
    ];
    const sortFilters = [
        {
            id: 'newest',
            label: 'Newest'
        },
        {
            id: 'popular',
            label: 'Most Popular'
        },
        {
            id: 'trending',
            label: 'Trending'
        },
        {
            id: 'oldest',
            label: 'Oldest'
        },
    ];
    return (
        <div className="px-4 h-max sticky top-6">
            <h3 className="mb-4 text-sm font-medium">Search</h3>
            <Search />
            <h3 className="mt-8 mb-4 text-sm font-medium">Filter</h3>
            <div className="flex flex-col gap-2 text-sm">
                {sortFilters.map((item) => (
                    <label
                        key={item.id}
                        htmlFor={item.id}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <input
                            type="radio"
                            name="sort"
                            id={item.id}
                            value={item.id}
                            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 bg-white cursor-pointer rounded-sm checked:bg-blue-800"
                        />
                        {item.label}
                    </label>
                ))}
            </div>
            <h3 className="mt-8 mb-4 text-sm font-medium">Categories</h3>
            <div className="flex flex-col gap-2 text-sm">
                {categories.map((cat, idx) => (
                    <Link className="underline" key={idx} to={cat.path}>{cat.label}</Link>
                ))}
            </div>
        </div>
    );
};

export default SideMenu;
