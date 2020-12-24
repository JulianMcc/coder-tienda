const ProductDetail = ({item}) => {
    return (
        <article>
            <h1>{item.nombre}</h1>
            <p>Product SKU #{item.id}</p>
            <img src={item.foto} alt=""/>
            <p>Descripción del producto: {item.descripcion}</p>
            <p>Precio: ${item.precio}</p>
        </article>
    )
}

export default ProductDetail;