export const load = async ({ fetch }) => {
    const fetchBlog = async () => {
        const blogRes = await fetch('http://127.0.0.1:8000/blog/home/');
        const blogData = await blogRes.json();
        return blogData.detail
    }

    return {
        blogs : fetchBlog()
    }
}

