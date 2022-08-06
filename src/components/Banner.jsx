 
function Banner() {
 const name = localStorage.getItem("name")





  return (
    name &&
    <div className='flex justify-arround m-4'>
      <div className='flex flex-col m-4 sm:w-1/2'>
        <h1 className='text-4xl my-6 font bold'>Rent A Home With Us</h1>
        <p className='font-normal'>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas accusamus aliquid perspiciatis ipsum, necessitatibus dolores qui dicta in voluptate libero blanditiis velit quis natus distinctio nisi a saepe maxime voluptatem!
    Nobis distinctio ipsam suscipit architecto quibusdam facilis neque animi vero veniam vitae magnam officia, libero exercitationem cumque. A suscipit tenetur accusantium beatae fugit impedit inventore, architecto, consequatur qui laudantium reiciendis!
        </p>
      </div>

      <div className='hidden sm:block'>
                <img className='rounded-l-full' src="https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg" alt="" />
      </div>
    </div>
  )
}

export default Banner
