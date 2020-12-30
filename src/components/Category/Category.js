import {useParams} from 'react-router-dom';
import './Category.css'

const Category = () => {
    const {category_name} = useParams();

    const categoria = (cat) => {
        switch(cat) {
            case 'rock': return <p>Estos son los discos de {[cat]}</p>;
            case 'indie': return <p>Estos son los discos de {[cat]}</p>;
            case 'pop': return <p>Estos son los discos de {[cat]}</p>;
            case 'metal': return <p>Estos son los discos de {[cat]}</p>;
            case 'folk': return <p>Estos son los discos de {[cat]}</p>;
            case 'nacional': return <p>Estos son los discos de {[cat]}</p>;
            case 'electronica': return <p>Estos son los discos de {[cat]}</p>;
            default: return <p>No tenemos discos de ese género</p>
        }
    }
    return (
        <>
            {
            categoria(category_name) 
            }
        </>
    )
}
export default Category;