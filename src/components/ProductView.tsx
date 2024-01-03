import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { GlobalContext } from './Global';
import previous from '../../public/images/icon-previous.svg'
import next from '../../public/images/icon-next.svg'
import Close from './CloseIconInterative'


const ProductView = ({ items, onClickPreview, modal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageSelected, setImageSelected] = useState(items[currentIndex].image);
  const { mobile } = useContext(GlobalContext);

  useEffect(() => {
    // Atualiza a imagem quando currentIndex muda
    setImageSelected(items[currentIndex].image);
  }, [currentIndex, items]);

  const handlePrevious = () => {
    // Verifica se o índice é maior que 0 para evitar índices negativos
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    // Verifica se o índice é menor que o comprimento do array - 1 para evitar índices fora do alcance
    setCurrentIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : prevIndex));
  };
  

  return (
    <div className={`flex flex-col  justify-center items-center ${mobile
      ? 'min-w-screen'
      : 'min-w-[448px]' }`}>
        <div>
           {modal? 
            <div className='relative'>
                <Close color='#fff'/>
                <Image
                className='rounded-xl' 
                alt='Image preview' 
                src={imageSelected} 
                width={448} 
                height={448}
                />
                  {mobile 
                ? 
                <>
                  <button 
                  className='absolute top-1/2 left-0 transform -translate-y-1/2 mt-2 ml-18 bg-white rounded-full py-3 px-4'
                  onClick={handlePrevious}
                >
                  <Image alt='Previous' src={previous} />
                  
                </button>
                <button 
                  className='absolute top-1/2 right-0 transform -translate-y-1/2 mt-2 mr-2 bg-white rounded-full py-3 px-4'
                  onClick={handleNext}
                  >
                  <Image alt='Next' src={next} />
                </button>
                </>
                 :
                 <>
                  <button 
                    className='absolute top-1/2 left-[-28px] transform -translate-y-1/2 mt-2 ml-2 bg-white rounded-full py-3 px-4'
                    onClick={handlePrevious}
                  >
                    <Image alt='Previous' src={previous} aria-hidden />
                  </button>
                  <button 
                    className='absolute top-1/2 right-[-28px] transform -translate-y-1/2 mt-2 mr-2 bg-white rounded-full py-3 px-4'
                    onClick={handleNext}
                  >
                    <Image alt='Next' src={next} />
                  </button>      
                 </>
                 }
                
              </div>
           :
              <div className='relative'>
                <Image
                  className={mobile ? '' : 'rounded-xl max-w-screen'} 
                  alt='Image preview' 
                  src={imageSelected} 
                  width={448} 
                  height={448}
                  onClick={onClickPreview}
                />
              
              
            </div>
           }
        </div>
        {!mobile ? 
          <div className='flex gap-7 mt-8'>
          {items.map(( item:any) =>(
          <div key={item.product} >
            <div className={`relative rounded-xl overflow-hidden transition-opacity duration-300`}>
              <Image
                className="w-full h-full object-cover"
                alt={item.product}
                src={item.thumb}
                width={92}
                height={92}
                onClick={() => setImageSelected(item.image)}
              />
              
              
              {item.image === imageSelected && (
                <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-50 border border-orange1 rounded-xl"></div>
              )}
            </div>
          </div>
          ))}
        </div>
        :
        null  
      }
        </div>      
    
  )
}

export default ProductView
