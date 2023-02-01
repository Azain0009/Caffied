import Instagram from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <section className="bg-gray-900 text-white text-center pb-16">
      
      <div className="md:flex gap-4 justify-around  p-7">
        <div className="">
          <h1 className="text-xl font-playfair mb-4">Caffied.</h1>
          <p className="leading-7 mb-4">For the love of coffee</p>
        </div>
        <div className="">
            <h1 className="text-xl mb-4">Follow us on our socials</h1>
            <div className="flex gap-4 justify-center">
              <Instagram/>
              <FacebookIcon/>
              <TwitterIcon/>
              
          </div>

        </div>
      </div>
      
      <p>&copy;2022 Caffied Ltd.</p>
    </section>
  )
}

export default Footer