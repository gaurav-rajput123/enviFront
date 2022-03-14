import { useState } from 'react';
import getCookie from '../../utils/getcookie';
import { API } from '../../utils/constants'
export default function CreateBlog () {
    const [blog, setBlog] = useState({
        title: '',
        content: '',

    })
    function handleChange (e) {
        const { name, value } = e.target;
        setBlog((prev) => {
            return {
                ...prev, [name]: value
            }
        })
    }
    async function handleClick (e) {
        e.preventDefault();

        try {

            const token = getCookie('token');

            const storage = window.localStorage;
            const userId = storage.getItem('userId');
            console.log(token, userId);


            const res = await fetch(`${API}/blog/create/${userId}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...blog })
            })
            const data = await res.json();

            if (res.ok) {
                console.log(data);
            }
        }
        catch (e) {
            console.log(e);
        }

    }
    return <div style={{ paddingTop: '8vw' }}>
        <form onSubmit={handleClick}>

            <input type='text' placeholder='enter blogTitle' name='title' value={blog.title} onChange={handleChange}></input><br />
            <input type="text" placeholder="enter blogString" name='content' value={blog.content} onChange={handleChange} ></input>
            <button type="submit">Submit Blog</button>
        </form>
    </div>

}