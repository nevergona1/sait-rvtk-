import '../../main/main.css'
export default function ProfCard({description,image_url,img2}){
    return(
        <a href='#' className='card'>
            <img src={image_url} alt="img" className='card-img'/>
            <p>{description}</p>
            <img src={img2} alt="" />
        </a>
    );
}