import Comment from "./Comment";

const Comments = () => {
    return (
        <div className="flex flex-col gap-8 lg:w-3/5 pb-8">
            <h2 className="text-xl text-gray-600 underline">Comments</h2>
            <div className="flex items-center justify-between gap-8 w-full">
                <textarea placeholder="Write a comment..." className="w-full p-4 rounded-xl text-gray-600"/>
                <button className="bg-blue-800 px-4 py-3 text-white font-medium rounded-xl">Send</button>
            </div>
            <Comment />
            <Comment />
            <Comment />
        </div>
    );
};

export default Comments;