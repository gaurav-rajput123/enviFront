import React, { useEffect, useState } from "react";
import { API } from '../../utils/constants'
import { useParams } from "react-router";
import styles from "../../styles/blogStyles/singleBlog.module.css"
export default function SingleBlog()
{
    const [blogData, setBlogData] = useState({});
    const { blogId } = useParams();
    useEffect(()=>{
        async function fetchData () {
            try {
                const res = await fetch(`${API}/blog/${blogId}`);
                if (res.ok) {
                    const { blog } = await res.json();
                    setBlogData(blog);
                }
            }
            catch (e) {
                console.error(e);
            }
        }
        fetchData();

    }, [blogId])

    return <div>
        <h1>
            {blogData.title}

        </h1>
        {/* <p dangerouslySetInnerHTML={{ __html: blogData.content }}></p> */}
    </div>
}