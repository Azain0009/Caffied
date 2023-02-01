const About = () => {
    return (
        <section className=' sm:text-left md:text-center  p-4 max-w-6xl mx-auto pt-12'>
            
                <p className=" text-orange-900 mb-4 ">About us</p>
                <h2 className='text-3xl font-medium font-playfair mb-4'>What we stand for</h2>
                <p className='mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <div className="md:grid md:grid-cols-2 gap-7">
                <img className="rounded object-cover mx-auto" src="./images/about.jpg" alt="" />
                <div className="font-medium text-left mt-4">
                    Everything we do is a matter of heart, body and soul. We strive to form profound partnerships with farmers from all over the world to create perspective together and form healthy working relationships built on trust and respect.
                    <p className="mt-7">
                    Our mission is to provide sustainably sourced, hand-picked, micro-roasted quality coffee. Great coffee is our passion and we want to share it with you.
                    We strive to form profound partnerships with farmers from all over the world to create perspective together and form healthy working relationships built on trust and respect. 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About