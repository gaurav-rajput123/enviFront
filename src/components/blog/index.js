import React, { useEffect,useState} from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/blogStyles/blog.module.css";

import { API } from '../../utils/constants'

export default function Blog() {

    const [allBlogs, setAllBlogs] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [blogRange, setBlogRange] = useState([0, 6])
    const [blogPageButtons, setBlogPageButtons] = useState([]);
    


    useEffect(() => {

        async function fetchData() {
            const res = await fetch(`${API}/blog/getall`);
            const { allBlogs: data } = await res.json();
            if (!res.ok) {
                return Promise.reject(data)
            }
            else {
                console.log(data);
                setAllBlogs(data);
            }

        }
        fetchData();
        
    }, []);
    /**************************calculating Page buttons after allBlogs are fetched */
    useEffect(() => {
        setBlogPageButtons((old) => {

            let temp = [];

            for (let i = 0; i < allBlogs.length / 6; i++) {
                temp.push(i + 1);
            }
            return temp;
        })
    }, [allBlogs]);
    /***************displaying atmost 6 blogs at a time ******************************/
    useEffect(() => {

        setBlogs(allBlogs.slice(blogRange[0], blogRange[1]));
        
      
    }, [blogRange, allBlogs])







    function handleBlogchange(e) {
     
        const factor =Number(e.target.value);
       
        
        const update = factor * Math.min(6, allBlogs.length);
        setBlogRange([update - Math.min(6, allBlogs.length), update]);
        const buttonDiv=document.getElementById(styles.buttonLayout).childNodes;
        buttonDiv.forEach((button) => {
            button.classList.remove(styles.activeButton);
        })
        buttonDiv[factor].classList.add(styles.activeButton);



        // if(factor>(allBlogs.length/Math.min(6,allBlogs.length))-Math.min(3,allBlogs.length))//handling corner case when blogPageNumber is at last triplet
        // {
        //     const newBlogNumber=Math.min(6,allBlogs.length)-Math.min(3,allBlogs.length);
        //     setBlogPageButtons(()=>{

        //             buttonDiv.forEach((button)=>{
        //             button.classList.remove(styles.activeButton);
        //             });

        //         if(factor!==allBlogs.length/Math.min(6,allBlogs.length))//corner case when last triplet will be displayed (on next render) like 12 13 14 or 11 12 13 where last triplet is 13 14 15
        //         {
        //             let temp=allBlogs.length/6 -2;
        //             buttonDiv[factor%temp +1].classList.add(styles.activeButton); 
        //         }
        //         else
        //         {
        //             buttonDiv[3].classList.add(styles.activeButton);

        //         }
        //         return [newBlogNumber+1,newBlogNumber+2,newBlogNumber+3]
        //     })


        // }
        //else//updating blogPage button according to user Click
        //{

            // setBlogPageButtons((old)=>{
            //     let temp=[...old];
            //     temp=temp.map((blogPageNumber)=>{


            //         const x= blogPageNumber+factor-old[0];
            //         if(Math.ceil(allBlogs.length/6)>=x){return x}
            //         else
            //         {

            //         }

            //     })
            //     temp.filter((pageNumber)=>pageNumber!==null)
                
            //     buttonDiv.forEach((button)=>{
            //         button.classList.remove(styles.activeButton);
            //     });
            //     buttonDiv[1].classList.add(styles.activeButton);
                
            //     return temp;
            // })
        //}
       
    }



    return <main className={styles.blog}>
        <h1> Blog Site</h1>
        <img id={styles.heroImg} src={process.env.PUBLIC_URL + "green-energy.png"} alt=""></img>
        <p>To inform our audience and up their game towards the environment, we have a blog page. Here we post additional information about facts pointing towards the growing intensity of the crisis. Moreover, we post solutions for these problems and would like your participation in this ever-growing community. The idea of sustainability is central to our project since everything else revolves around this aim. </p>
        {/* <h1>Recent Posts</h1>
        <div className={styles.recentPosts}>
            {
                blogs.map((blog) => {
                    return <div key={blog.id}>
                        <p>
                            <Link to={`/blogs/${blog._id}`}>

                                {blog.title}
                            </Link>
                        </p>
                    </div>
                })
            }
        </div>
        <div id={styles.buttonLayout}>

        <button onClick={handleBlogchange} value={1} >First</button>
        {blogPageButtons.map((blogPageNumber, index) => {
            
            return <button  key={index} onClick={handleBlogchange} value={blogPageNumber} >{blogPageNumber}</button>
        })}
            <button onClick={handleBlogchange} value={Math.ceil(allBlogs.length / Math.min(6, allBlogs.length))}>Last</button>
        </div> */}









        {/* <p>We at Envinova Smartech strive to offer our best services in the field of solar energy. We aim to create a market comprising of a close-knit community with goals that are sustainability-oriented. The need of the hour unequivocally is undertaking measures that do not overlook the idea of having a sustainable present and hence creating the possibility of a healthy future. </p>
        <img className={styles.otherImages} src={process.env.PUBLIC_URL + 'final clean.png'} alt="" />
        <p>

            With our solar tree, we aim at harnessing such an abundant resource, especially in India, where more than 300 days are sunny in a year. The Nova Store brings in space for all people looking out for affordable eco-friendly solutions for daily needs. It can bring about the difference and impact we intend and need to create for the future generations that deserve to experience the nuances of nature equally bright.
        </p>
        <img className={styles.otherImages} src={process.env.PUBLIC_URL + 'illustration.png'} alt=""></img>
        <p>The unprecedented growth of climate extremities indicates how rapidly our earth responds to man's exploitative and selfish actions. The soaring temperatures and rains are uncalled to make the climate crisis spiralling out of control. The potential of the scorching sun rays goes beyond creating immense heat waves. Harnessing the abundant potential of this renewable resource can be proved fruitful in terms of sustainability and contributing towards a better tomorrow. </p>
        <img id={styles.lastImage} src={process.env.PUBLIC_URL + 'blog_end1.jpeg'} alt=""></img> */}
    </main>
}