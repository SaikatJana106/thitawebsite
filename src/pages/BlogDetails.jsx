import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import blogData from "../json/blog.json";

const BlogDetails = () => {
    const { blogId } = useParams(); // get the ID from the URL
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        // fetch(blogData)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         const foundBlog = data.popular.find(
        //             (item) => item.id === parseInt(blogId)
        //         );
        //         setBlog(foundBlog);
        //     })
        //     .catch((err) => console.error("Error loading blog:", err));
        const foundBlog = blogData.popular.find(
            (item) => item.id === parseInt(blogId)
        );
        setBlog(foundBlog);
    }, [blogId]);

    if (!blog) {
        return (
            <div className="text-center py-20 text-gray-600 text-xl">
                Loading blog details...
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-10 relative z-10">
            <h1>hi</h1>
            <img
                src={blog.image}
                alt={blog.title}
                className="w-full rounded-2xl mb-6"
            />
            <h1 className="text-3xl font-bold mb-4 text-white">{blog.description}</h1>

            <div className="prose max-w-none text-white">{parse(blog.content)}</div>
            <div className="flex flex-wrap gap-2 my-6">
                {blog.tags?.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-purple-100 text-[#B555D3] text-sm font-medium px-3 py-1 rounded-full"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default BlogDetails;
