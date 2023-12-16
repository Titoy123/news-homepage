import HeroMobile from '../assets/images/image-web-3-mobile.jpg'
import HeroDesktop from '../assets/images/image-web-3-desktop.jpg'
import RetroImg from '../assets/images/image-retro-pcs.jpg'
import LaptopImg from '../assets/images/image-top-laptops.jpg'
import GrowthImg from '../assets/images/image-gaming-growth.jpg'
export default function Main() {
    return (
       <div  className='my-7 mx-4 lg:mx-36 lg:mb-16 lg:grid lg:grid-cols-3 lg:gap-6 lg:grid-rows-[280px]'>
        <MainHero/>
        <MainHeading/>
        <ButtonPara/>
        <MainArticle/>
        <SubArticle/>
       </div>
    )
}

const MainHero = () => {
    return (
        <div className='mb-7 col-span-2 lg:row-start-1'>
            <picture className=''>
                <source media="(min-width: 768px)" srcSet={HeroDesktop} />
                <img src={HeroMobile} alt="Hero Image" />
            </picture>
        </div>
    );
};


const MainHeading = () => <h1 className='text-very-dark-blue text-[2.5rem]  leading-10 font-extrabold mb-6 lg:row-start-2 lg:text-[3rem] lg:p-10 lg:h-1/2 lg:-ml-7 lg:leading-[3rem]'>The Bright Future of Web 3.0?</h1>

const ButtonPara = () => {
    return (
        <div className='lg:flex lg:flex-col lg:items-start  lg:p-10  '>
        <p className='text-dark-grayish-blue mb-7 '>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
         But is it really fulfilling its promise?</p>
         <button className='bg-red text-sm text-white uppercase font-bold tracking-widest px-11 py-5 mb-16 hover:bg-very-dark-blue transition '>Read more</button>
        </div>
    )
}

const ArticleTitle = ({title, className}) => <h3 className={className}>{title}</h3>

const ArticlePara = ({para, className}) => <p className={className}>{para}</p>



const MainArticle = () => {
    return (
        <div className='bg-very-dark-blue mb-14 p-7 col-start-3 row-start-1 row-end-3 lg:mb-0'>

        <h2 className='text-orange capitalize text-3xl font-bold mb-9'>new</h2>

        <div>
        <ArticleTitle title="Hydrogen VS Electric Cars" className="text-white font-bold text-lg mb-2 hover:text-orange cursor-pointer transition"/>
        <ArticlePara para="Will hydrogen-fueled cars ever catch up to EVs?" className="text-gray-blue mb-6 pb-6 border-b border-b-gray-blue"/>
        </div>

        <div>
        <ArticleTitle title="The Downsides of AI Artistry" className="text-white font-bold text-lg mb-2 hover:text-orange cursor-pointer transition"/>
        <ArticlePara para="What are the possible adverse effects of on-demand AI image generation?" className="text-gray-blue mb-6 pb-6 border-b border-b-gray-blue"/>
        </div>
        
        <div>
        <ArticleTitle title="Is VC Funding Drying Up?" className="text-white font-bold text-lg mb-2 hover:text-orange cursor-pointer transition"/>
        <ArticlePara para=" Private funding by VC firms is down 50% YOY. We take a look at what that means." className="text-gray-blue mb-6"/>
        </div>



        </div>
    )
}


const SubArticle = () => {
    return (
        <div className='flex flex-col items-center gap-7 lg:row-start-3 lg:flex-row lg:col-span-3'>
           <div className='flex items-center gap-5'>

                <img src={RetroImg} alt='Retro computer img' className='max-w-[80px]'/>

                <div>

                <h3 className='text-gray-blue text-3xl font-bold'>01</h3>
                <ArticleTitle title="Reviving Retro PCs" className="text-lg font-bold text-very-dark-blue hover:text-red cursor-pointer transition"/>
                <ArticlePara para="What happens when old PCs are given modern upgrades?" className="text-very-dark-blue"/>

                </div>

           </div>

             <div className='flex items-center gap-5'>

                <img src={LaptopImg} alt='Laptop image' className='max-w-[80px]'/>

                <div>
                    
                <h3 className='text-gray-blue text-3xl font-bold'>02</h3>
                <ArticleTitle title="Top 10 Laptops of 2022" className="text-lg font-bold text-very-dark-blue hover:text-red cursor-pointer transition"/>
                <ArticlePara para="Our best picks for various needs and budgets." className="text-very-dark-blue"/>

                </div>

           </div>

           <div className='flex items-center gap-5'>

                <img src={GrowthImg} alt='Gaming controller' className='max-w-[80px]'/>

                <div>
                    
                <h3 className='text-gray-blue text-3xl font-bold'>03</h3>
                <ArticleTitle title="The Growth of Gaming" className="text-lg font-bold text-very-dark-blue hover:text-red cursor-pointer transition"/>
                <ArticlePara para="How the pandemic has sparked fresh opportunities." className="text-very-dark-blue"/>

                </div>

           </div>

       </div>
    )
}
