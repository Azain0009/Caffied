import Button from "./Button"

const Newsletter = () => {
    return (
        <section className='sm:text-left md:text-center py-14 px-4 max-w-6xl mx-auto '>
            <p className=" text-orange-900 mb-4">Newsletter</p>
            <h2 className='text-3xl font-medium font-playfair mb-4'>Stay in touch</h2>
            <p className='mb-4'>Lorem ipsum dolor sit amet consectetur.</p>
            <div className="sm:flex md:flex justify-center gap-3 ">
                <div>
                <input className="border-2 rounded-lg border-gray bg-gray-200 text-center mb-2 py-2 px-12 " placeholder="Enter E-mail" type="text" />
                    </div>
                <div>
                <Button title="Sign-up" />
                </div>
            </div>
        </section>
    )
}

export default Newsletter