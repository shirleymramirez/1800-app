
const URL = 'http://localhost:8081/posts';

const apiGetPosts = async () => {
    const response = await fetch(URL);
    const jsonData = await response.json();
    return jsonData;
};

export default apiGetPosts;