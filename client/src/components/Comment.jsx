import Image from "./Image";

const Comment = () => {
    return (
        <div className="p-4 bg-slate-50 rounded-xl">
            <div className='flex items-center gap-4'>
                <Image
                    src={`${import.meta.env.VITE_IK_STATIC_IMG_BASE}/userImg.jpeg`}
                    className="w-10 h-10 rounded-full object-cover"
                    w="40"
                />
                <span className="font-medium">John Doe</span>
                <span className="text-sm text-gray-500">2 days ago</span>
            </div>
            <div className="mt-4">
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Tempor nostra torquent maximus quisque turpis neque duis lobortis. Neque magna risus id aptent; natoque pharetra. Phasellus inceptos dis fermentum viverra himenaeos vitae dapibus hendrerit.
                </p>
            </div>
        </div>
    );
};

export default Comment;
