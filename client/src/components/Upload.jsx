import { IKContext, IKUpload } from "imagekitio-react";
import { useRef } from "react";
import { toast } from "react-toastify";

const authenticator =  async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/posts/upload-auth`);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        const { signature, expire, token } = data;
        return { signature, expire, token };
    } catch (error) {
        throw new Error(`Authentication request failed: ${error.message}`);
    }
};

const Upload = ({ children, mediaType, setProgress, setData, btnCls }) => {
    const ref = useRef(null);

    const onImgUploadError = (err) => {
        console.log(err);
        toast.error("Image upload failed. Please try again.");
    };

    const onImgUploadSuccess = (res) => {
        console.log(res);
        setData(res);
    };

    const onImgUploadProgress = (progress) => {
        console.log(progress);
        setProgress(Math.round((progress.loaded / progress.total) * 100));
    };

    const handleBtnClick = (e) => {
        e.preventDefault();
        return ref.current.click();
    };

    return (
        <IKContext
            publicKey={import.meta.env.VITE_IK_PUBLIC_KEY}
            urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
            authenticator={authenticator}
        >
            <IKUpload
                folder={"/react-full-stack-blog"}
                useUniqueFileName={true}
                onError={onImgUploadError}
                onSuccess={onImgUploadSuccess}
                onUploadProgress={onImgUploadProgress}
                className="hidden"
                ref={ref}
                accept={`${mediaType}/*`}
            />
            {ref && <button onClick={handleBtnClick} className={btnCls}>{children}</button>}
        </IKContext>
    );
};

export default Upload;
