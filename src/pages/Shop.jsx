import { Outlet, NavLink } from "react-router-dom"
const shops = [
  {
    id:1,
    title:'Overview',
    link:'.'
  },
  {
    id:2,
    title:'Live',
    link:'live'
  },
  {
    id:3,
    title:'Push',
    link:'push'
  },
  {
    id:4,
    title:'Move',
    link:'movee'
  },
  {
    id:5,
    title:'Educational Offers', 
    link:'educational-offers'
  },
  {
    id:6,
    title:'Max for Live',
    link:'max-for-live'
  },
  {
    id:7,
    title:'Merchandise',
    link:'merchandise'
  },
]
const Shop = () => {
  return (
    <div>
    <div className='px-8'>
     <ul className='flex gap-4'>
      {shops.map((shop) =>(
        <li className='text-xs font-bold py-6' key = {shop.id}>
          <NavLink className={({isActive}) => (isActive ? "text-[#FF764D]" : "text-gray-600")} to={shop.link} end={shop.link === "."}>
            {shop.title}
        </NavLink>
        </li>
      ))}
     </ul>
    </div>
    <Outlet />
    </div>
  )
}

export default Shop
