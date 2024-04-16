
import { arrowRight } from '@/app/assets/icons';
import Button from '@/app/_components/Button';


const ShowMore = ({pageNumber,isNext ,setLimit}) => {
    const handleNavigation = ()=>{
        const newLimit = (pageNumber +1)* 5;
        setLimit(newLimit);
    }
  return (
    <div className=' mt-10' >
        {!isNext &&(   
        <Button
        label='More'
        iconURL={arrowRight}
        handleClick={handleNavigation}
        />
              )}
    </div>
  )
}

export default ShowMore;
