
export const URL = 'http://localhost:8081/posts';

export const apiGetPosts = async () => {
    const response = await fetch(URL);
    return await response.json();
};
