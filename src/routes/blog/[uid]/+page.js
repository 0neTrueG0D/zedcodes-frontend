export const load = async ({ fetch, params }) => {
    const fetchBlog = async (uid) => {
        const blogRes = await fetch(`http://127.0.0.1:8000/blog/${uid}`);
        const blogData = await blogRes.json();
        return blogData.detail
    }

    return {
        blog: fetchBlog(params.uid)
    }
}

