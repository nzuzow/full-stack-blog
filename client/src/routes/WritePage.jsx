import { useAuth, useUser } from "@clerk/clerk-react";
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PhotoIcon, VideoCameraIcon } from '@heroicons/react/20/solid';
import Upload from "../components/Upload";
import Image from "../components/Image";

const WritePage = () => {
    const { isLoaded, isSignedIn } = useUser();
    const [content, setContent] = useState("");
    const [coverImg, setCoverImg] = useState("");
    const [uploadProgress, setUploadProgress] = useState(0);
    const [postImg, setPostImg] = useState("");
    const [postVid, setPostVid] = useState("");
    const navigate = useNavigate();
    const { getToken } = useAuth();

    useEffect(() => {
        postImg && setContent(prev => `${prev}<div><image class="fsb-post-img" src="${postImg.url}" alt=""/></div>`);
    }, [postImg]);

    useEffect(() => {
        postVid && setContent(prev => `${prev}<div><iframe class="ql-video fsb-post-vid" src="${postVid.url}"/></div>`);
    }, [postVid]);

    const mutation = useMutation({
        mutationFn: async (newPost) => {
            const token = await getToken();
            return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        },
        onSuccess: (res) => {
            toast.success("Post has been created");
            navigate(`/${res.data.slug}`);
        }
    });


    // Check logged in status
    if (!isLoaded) {
        return <div className="">Loading...</div>;
    }

    if (isLoaded && !isSignedIn) {
        return <div className="">You should login!</div>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            title: formData.get("title"),
            category: formData.get("category"),
            desc: formData.get("desc"),
            content: content,
            img: coverImg.filePath || ""
        };
        console.log('write page data: ', data);

        mutation.mutate(data);
    };

    return (
        <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
            <h1 className="text-cl font-light">Create a New Post</h1>
            <form
                className="flex flex-col gap-6 flex-1 mb-6"
                onSubmit={handleSubmit}
            >
                <div className="flex items-center gap-3">
                    <Upload
                        mediaType="image"
                        setProgress={setUploadProgress}
                        setData={setCoverImg}
                        btnCls="p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white w-max"
                    >
                        <span>Add a cover image</span>
                    </Upload>
                    {coverImg && <Image key={`wp-cover-preview-${coverImg.name}`} src={coverImg.name} w={75} alt="thumbnail of cover image for this post"/>}
                </div>
                <input
                    className="text-4xl font-semibold bg-transparent outline-none placeholder:text-gray-400"
                    type="text"
                    placeholder="My Awesome Story"
                    name="title"
                />
                <div className="flex items-center gap-4">
                    <label className="text-sm" htmlFor="">Choose a Category:</label>
                    <select
                        className="p-2 rounded-xl bg-white shadow-md"
                        name="category"
                        id="">
                        <option value="general">General</option>
                        <option value="web-design">Web Design</option>
                        <option value="development">Development</option>
                        <option value="databases">Databases</option>
                        <option value="seo">Search Engines</option>
                        <option value="marketing">Marketing</option>
                    </select>
                </div>
                <textarea
                    className="p-4 rounded-xl bg-white shadow-md"
                    name="desc"
                    placeholder="A Short Description"
                ></textarea>
                <div className="flex flex-1">
                    <div className="flex flex-col gap-2 mr-2">
                        <Upload
                            mediaType="image"
                            setProgress={setUploadProgress}
                            setData={setPostImg}
                        >
                            <PhotoIcon className="size-5 text-black" />
                        </Upload>
                        <Upload
                            mediaType="video"
                            setProgress={setUploadProgress}
                            setData={setPostVid}
                        >
                            <VideoCameraIcon className="size-5 text-black" />
                        </Upload>
                    </div>
                    <ReactQuill
                        theme="snow"
                        className="flex-1 flex flex-col rounded-xl bg-white shadow-md"
                        value={content}
                        onChange={setContent}
                        readOnly={(uploadProgress > 0 && uploadProgress < 100)}
                    />
                </div>
                <button
                    className="bg-blue-800 text-white font-medium rounded-xl mt-4 py-2 px-10 self-start disabled:bg-blue-400 disabled:cursor-not-allowed"
                    disabled={mutation.isPending || (uploadProgress > 0 && uploadProgress < 100)}
                >{mutation.isPending ? "Loading..." : "Send"}</button>
                <div>{"Upload Progress: " + uploadProgress}</div>
                {mutation.isError && <span>{mutation.error.message}</span>}
            </form>
        </div>
    );
};

export default WritePage;
