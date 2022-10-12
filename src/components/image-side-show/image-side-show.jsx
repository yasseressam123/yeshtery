import { Galleria } from 'primereact/galleria';
import img1 from '../../assets/images/img1.jpeg';
import img1Thumb from '../../assets/images/img1-thumb.jpeg';
import img2 from '../../assets/images/img2.jpeg';
import img2Thumb from '../../assets/images/img2-thumb.jpeg';
import img3 from '../../assets/images/img3.jpeg';
import img3Thumb from '../../assets/images/img3-thumb.jpeg';
import img4 from '../../assets/images/img4.jpeg';
import img4Thumb from '../../assets/images/img4-thumb.jpeg';
import img5 from '../../assets/images/img5.jpeg';
import img5Thumb from '../../assets/images/img5-thumb.jpeg';


const ImageSideShow = ()=>{
    const images = [
        {thumbnailImageSrc:img1Thumb , itemImageSrc:img1},
        {thumbnailImageSrc:img2Thumb , itemImageSrc:img2},
        {thumbnailImageSrc:img3Thumb , itemImageSrc:img3},
        {thumbnailImageSrc:img4Thumb , itemImageSrc:img4},
        {thumbnailImageSrc:img5Thumb , itemImageSrc:img5}
    ];

    const itemTemplate = (item) => {
        return <img src={`${item.itemImageSrc}`} alt="img" style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={`${item.thumbnailImageSrc}`} alt="img" />
    }
    return(
        <div>
            <Galleria value={images} item={itemTemplate} thumbnail={thumbnailTemplate} numVisible={4}></Galleria>
        </div>
    )
};

export default ImageSideShow;