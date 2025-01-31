import PostListItem from "./PostListItem";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component';

const fetchPosts = async ( pageParam ) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
        params: { page: pageParam }
    });
    return res.data;
};

const PostList = () => {

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ['posts'],
        queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
        initialPageParam: 1,
        getNextPageParam: (lastPage, pages) => {
            return lastPage.hasMore ? (pages.length + 1) : undefined;
        },
    });

    if (status === "pending") {
      return <span>Loading...</span>
    }

    if (status === "error") {
      return <span>Error: {error.message}</span>
    }

    console.log('PostList - data: ', data);

    const allPosts = data?.pages?.flatMap((page) => page.posts) || [];

    return (
        <InfiniteScroll
            className="flex flex-col gap-12 mb-8"
            dataLength={allPosts.length}
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={<h4>Loadingmore posts...</h4>}
            endMessage={
                <p>
                    <b>All posts loaded!</b>
                </p>
            }
        >
            {allPosts.map((post) => (
                <PostListItem key={post._id} post={post} />
            ))}
        </InfiniteScroll>
    );
};

export default PostList;
