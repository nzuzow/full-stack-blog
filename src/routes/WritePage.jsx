import { useUser } from "@clerk/clerk-react";
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from "react-quill-new";

const WritePage = () => {
    const { isLoaded, isSignedIn } = useUser();

    /*
    Commented out for now so we don't have to worry about logging in.
    if (!isLoaded) {
        return <div className="">Loading...</div>;
    }

    if (isLoaded && !isSignedIn) {
        return <div className="">You should login!</div>;
    }*/

    return (
        <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
            <h1 className="text-cl font-light">Create a New Post</h1>
            <form className="flex flex-col gap-6 flex-1 mb-6">
                <button className="p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white w-max">Add a cover image</button>
                <input className="text-4xl font-semibold bg-transparent outline-none placeholder:text-gray-400" type="text" placeholder="My Awesome Story" />
                <div className="flex items-center gap-4">
                    <label className="text-sm" htmlFor="">Choose a Category:</label>
                    <select className="p-2 rounded-xl bg-white shadow-md" name="cat" id="">
                        <option value="general">General</option>
                        <option value="web-design">Web Design</option>
                        <option value="development">Development</option>
                        <option value="databases">Databases</option>
                        <option value="seo">Search Engines</option>
                        <option value="marketing">Marketing</option>
                    </select>
                </div>
                <textarea className="p-4 rounded-xl bg-white shadow-md" name="desc" placeholder="A Short Description"></textarea>
                <ReactQuill theme="snow" className="flex-1 flex flex-col rounded-xl bg-white shadow-md"/>
                <button className="bg-blue-800 text-white font-medium rounded-xl mt-4 py-2 px-10 self-start">Send</button>
            </form>
        </div>
    );
};

export default WritePage;
