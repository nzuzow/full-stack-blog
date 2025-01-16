import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
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
    return (
        <div className='flex flex-col gap-8'>
            {/* detail */}
            <div className='flex gap-8'>
                <div className="lg:w-3/5 flex flex-col gap-8">
                    <h2 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam modieum aut.
                    </h2>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span>Written by</span>
                        <Link className="text-blue-800">John Doe</Link>
                        <span>on</span>
                        <Link className="text-blue-800">Web Design</Link>
                        <span>2 days ago</span>
                    </div>
                    <p className="text-gray-500 font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                </div>
                <div className="hidden lg:block w-2/5">
                    <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
                </div>
            </div>
            {/* content */}
            <div className='flex flex-col md:flex-row gap-8'>
                {/* text */}
                <div className="lg:text-lg flex flex-col gap-6 text-justify">
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Tempor nostra torquent maximus quisque turpis neque duis lobortis. Neque magna risus id aptent; natoque pharetra. Phasellus inceptos dis fermentum viverra himenaeos vitae dapibus hendrerit. Pharetra nam leo per semper aenean dapibus gravida fringilla mi. Dignissim mattis interdum cursus vestibulum lobortis nulla.</p>
                    <p>Fames posuere enim efficitur nec nisl felis sit ultrices. Amet mollis dignissim dis habitasse efficitur vel est. Penatibus nulla pulvinar lacus dui ultrices. Euismod imperdiet nunc hendrerit nulla dignissim odio. Sit et hac pulvinar; ridiculus at senectus? Convallis facilisis lacinia ornare condimentum cras; interdum tortor vel.</p>
                    <p>Aliquam pretium risus praesent ligula rutrum fringilla primis. Ut convallis ad augue litora facilisis vulputate. Magnis penatibus ipsum praesent, ultricies cubilia senectus malesuada. Nulla et orci aliquet quis pharetra dictum quam cursus. Vivamus ligula suspendisse, ridiculus velit tempus interdum. Nec nisl viverra tincidunt at metus sociosqu pharetra lorem. Habitasse netus iaculis ac porttitor condimentum. Orci lacus integer ipsum interdum ac. Habitasse magna eros arcu curae, finibus tempor. Lobortis eget malesuada viverra eu turpis congue.</p>
                    <p>Felis blandit nam tincidunt non turpis vitae pellentesque tempor luctus. Libero molestie habitant cubilia luctus morbi. Curae ultricies sed litora donec dignissim at ad augue! Vestibulum ex vivamus maecenas aenean convallis et dui lacus. Ac non eget porta magna mauris primis luctus fringilla inceptos. Maximus maximus morbi et libero felis class adipiscing neque. Accumsan eget bibendum suspendisse nam est ultricies. Donec sodales velit felis urna habitant sociosqu dui mus ipsum. Hendrerit non bibendum himenaeos nunc auctor quisque odio malesuada. Lobortis vitae efficitur integer vehicula neque dapibus nibh.</p>
                    <p>Ultricies sagittis eu ut pharetra elementum purus conubia. Ornare vulputate condimentum justo tempor fames. Senectus platea accumsan euismod sed condimentum class varius nibh ultrices. Elit in fusce iaculis vehicula dis et netus id dignissim. Maximus neque mattis penatibus ridiculus, tortor dolor. Magna amet potenti torquent aliquet consectetur ex conubia penatibus. Elit integer enim consequat vehicula maecenas adipiscing et.</p>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Tempor nostra torquent maximus quisque turpis neque duis lobortis. Neque magna risus id aptent; natoque pharetra. Phasellus inceptos dis fermentum viverra himenaeos vitae dapibus hendrerit. Pharetra nam leo per semper aenean dapibus gravida fringilla mi. Dignissim mattis interdum cursus vestibulum lobortis nulla.</p>
                    <p>Fames posuere enim efficitur nec nisl felis sit ultrices. Amet mollis dignissim dis habitasse efficitur vel est. Penatibus nulla pulvinar lacus dui ultrices. Euismod imperdiet nunc hendrerit nulla dignissim odio. Sit et hac pulvinar; ridiculus at senectus? Convallis facilisis lacinia ornare condimentum cras; interdum tortor vel.</p>
                    <p>Aliquam pretium risus praesent ligula rutrum fringilla primis. Ut convallis ad augue litora facilisis vulputate. Magnis penatibus ipsum praesent, ultricies cubilia senectus malesuada. Nulla et orci aliquet quis pharetra dictum quam cursus. Vivamus ligula suspendisse, ridiculus velit tempus interdum. Nec nisl viverra tincidunt at metus sociosqu pharetra lorem. Habitasse netus iaculis ac porttitor condimentum. Orci lacus integer ipsum interdum ac. Habitasse magna eros arcu curae, finibus tempor. Lobortis eget malesuada viverra eu turpis congue.</p>
                    <p>Felis blandit nam tincidunt non turpis vitae pellentesque tempor luctus. Libero molestie habitant cubilia luctus morbi. Curae ultricies sed litora donec dignissim at ad augue! Vestibulum ex vivamus maecenas aenean convallis et dui lacus. Ac non eget porta magna mauris primis luctus fringilla inceptos. Maximus maximus morbi et libero felis class adipiscing neque. Accumsan eget bibendum suspendisse nam est ultricies. Donec sodales velit felis urna habitant sociosqu dui mus ipsum. Hendrerit non bibendum himenaeos nunc auctor quisque odio malesuada. Lobortis vitae efficitur integer vehicula neque dapibus nibh.</p>
                    <p>Ultricies sagittis eu ut pharetra elementum purus conubia. Ornare vulputate condimentum justo tempor fames. Senectus platea accumsan euismod sed condimentum class varius nibh ultrices. Elit in fusce iaculis vehicula dis et netus id dignissim. Maximus neque mattis penatibus ridiculus, tortor dolor. Magna amet potenti torquent aliquet consectetur ex conubia penatibus. Elit integer enim consequat vehicula maecenas adipiscing et.</p>
                </div>
                {/* menu */}
                <div className="md:pl-4 h-max sticky top-6">
                    <h3 className="mb-4 text-sm font-medium">Author</h3>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-8">
                            <Image src="userImg.jpeg" className="w-12 h-12 rounded-full object-cover" w="48" h="48" />
                            <Link className="text-blue-800">John Doe</Link>
                        </div>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur</p>
                        <div className="flex gap-2">
                            <Link>
                                <Image src="facebook.svg" />
                            </Link>
                            <Link>
                                <Image src="instagram.svg" />
                            </Link>
                        </div>
                    </div>
                    <PostMenuActions />
                    {/* Categories */}
                    <h3 className="mt-8 mb-4 text-sm font-medium">Categories</h3>
                    <div className="flex flex-col gap-2 text-sm">
                        {categories.map((cat, idx) => (
                            <Link key={idx} className="underline" to={cat.path}>{cat.label}</Link>
                        ))}
                    </div>
                    {/* Search */}
                    <h3 className="mt-8 mb-4 text-sm font-medium">Search</h3>
                    <Search />
                </div>
            </div>
            <Comments />
        </div>
    );
};

export default SinglePostPage;