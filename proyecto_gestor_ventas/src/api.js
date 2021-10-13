const callApi = async (url, options ={}) => {
    
    options.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    };
    
    const response = await fetch("http://localhost3001/api" + url, options);
    const data = await response.json();
    return data;
}

const api = {
    product: {
        list() {
            return callApi("/productos");
        },
        create(producto) {
            return callApi("/productos", {
                method: "POST", 
                body: JSON.stringify(producto),
            });
        },
    },
};

export default api;