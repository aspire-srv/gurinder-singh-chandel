
import { MEDIA_ASSET } from "../utils/constants";


const Category = (props) =>{
 const { imageId, action, accessibility } = props.catData
    return(
        <div>
            <a href={action.link} target="_blank" rel="noreferrer">
                 <img className="cat-img" alt={accessibility.altText} src={MEDIA_ASSET + imageId} />
            </a>
     </div>
    )
}

export default Category;