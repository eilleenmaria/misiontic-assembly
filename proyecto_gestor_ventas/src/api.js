const callApi = async (url) => {
    const response = await fetch("http://localhost3001/api" + url);
    const data = await response.json();
    return data;
}

const api = {
    product: {
        list() {
            return callApi("/productos");
        },
        create() {
            return callApi("/productos");
        },
    },
};

export default api;