export const load = async ({ fetch }) => {
    const fetchBlog = async () => {
        const blogRes = await fetch('http://15.206.146.196/home');
        const blogData = await blogRes.json();
        return blogData.detail
    }

    return {
        blog: fetchBlog()
    }
}

