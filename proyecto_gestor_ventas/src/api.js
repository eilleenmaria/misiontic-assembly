const callApi = async (url, options = {}) => {
    options.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    };
    
    const response = await fetch("http://localhost:3001/api" + url, options);
    const data = await response.json();
    return data;
};

const api = {
    products: {
        list() {
            return callApi("/productos");
        },
        create(producto) {
            console.log(JSON.stringify(producto));
            return callApi("/productos", {
                method: "POST", 
                body: JSON.stringify(producto),
            });
        },
        delete(id){
            return callApi(`/productos/${id}`, {
                method: "DELETE",
            });
        },
        edit(producto) {
            return callApi(`/productos/${producto._id}`, {
              method: "PUT",
              body: JSON.stringify(producto),
            });
        },
        getProduct(id) {
            return callApi(`/productos/${id}`);
        },
    },
    ventas: {
        list() {
            return callApi("/ventas");
        },
        create(venta) {
            console.log(JSON.stringify(venta));
            return callApi("/ventas", {
                method: "POST", 
                body: JSON.stringify(venta),
            });
        },
    },
};

export default api;