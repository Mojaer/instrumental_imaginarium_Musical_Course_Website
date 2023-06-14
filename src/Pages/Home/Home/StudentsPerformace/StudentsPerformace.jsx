
import { useRef } from 'react'
import perf1 from '../../../../assets/performance/performance1.jpg'
import perf2 from '../../../../assets/performance/performance2.jpg'
import perf3 from '../../../../assets/performance/performance3.avif'
import perf4 from '../../../../assets/performance/performance4.jpg'
import perf5 from '../../../../assets/performance/performance5.jpg'
import perf6 from '../../../../assets/performance/performance6.jpg'
import anime from 'animejs'





const StudentsPerformance = () => {


    const elementref1 = useRef(null)
    const elementref2 = useRef(null)
    const elementref3 = useRef(null)
    const elementref4 = useRef(null)


    const handleAnime1 = () => {

        if (window.innerWidth < 670) {
            return
        }
        const element1 = elementref1.current
        const element2 = elementref2.current


        anime({
            targets: element1,
            translateX: 450,
            duration: 3000
        });

        anime({
            targets: element2,
            translateX: -850,
            duration: 3000
        });
    }


    const handleAnime2 = () => {
        if (window.innerWidth < 670) {
            return
        }

        const element3 = elementref3.current
        const element4 = elementref4.current

        anime({
            targets: element3,
            translateX: 450,
            duration: 3000

        });

        anime({
            targets: element4,
            translateX: -850,
            duration: 3000

        });
    }

    return (
        <section  >
            <h1 className="text-3xl font-semibold my-10 uppercase text-center">Performance Of our students </h1>
            <div className=' lg:flex justify-around my-6' onMouseOver={handleAnime1}>
                <div className='md:flex w-full' ref={elementref1}>
                    <img className='w-80 h-44 rounded-md' src={perf1} alt="" />
                    <img className='w-80 h-44 rounded-md m-6' src={perf4} alt="" />
                </div>

                <div ref={elementref2}>
                    <p className="text-xl font-semibold my-10 uppercase text-center">Word Music Fest </p>
                    <p className="text-lg font-semibold my-10 uppercase text-center">Chhayanaut Cultural Center </p>
                </div>
            </div>
            <div className=' lg:flex justify-around my-6'  >
                <div className='md:flex w-full' ref={elementref3}>
                    <img className='w-80 h-44 rounded-md' src={perf2} alt="" />
                    <img className='w-80 h-44 rounded-md m-6' src={perf5} alt="" />
                </div>

                <div ref={elementref4}>
                    <p className="text-xl font-semibold my-10 uppercase text-center">Bangabandhu Music Fest </p>
                    <p className="text-lg font-semibold my-10 uppercase text-center">BMA Auditorium </p>
                </div>
            </div>
            <div className=' lg:flex justify-around my-6' onMouseOver={handleAnime2} >
                <div className='md:flex w-full' ref={elementref3}>
                    <img className='w-80 h-44 rounded-md' src={perf3} alt="" />
                    <img className='w-80 h-44 rounded-md m-6' src={perf6} alt="" />
                </div>

                <div ref={elementref4}>
                    <p className="text-xl font-semibold my-10 uppercase text-center">National Musical Contest</p>
                    <p className="text-lg font-semibold my-10 uppercase text-center">TSC Auditorium </p>
                </div>
            </div>

        </section>
    );
};

export default StudentsPerformance;