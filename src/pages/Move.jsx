import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Move = () => {
    const items = [
        {
            id: 1,
            name: "Overview",
            link: "overview"

        },
        {
            id: 2,
            name: "Tech Specs",
            link: "specs"

        },
        {
            id: 3,
            name: "Learn more",
            link: "more"

        },
        {
            id: 4,
            name: "Buy More",
            link: "buy"

        },
    ]
  return (
    <div className="px-8 font-semibold">
        <nav>
            <ul className='flex gap-4'>
                {
                    items.map((item) => (
                        <li className='text-xs font-bold py-6' key={item.id}>
                            <ListItems name={item.name} link={item.link}/>
                        </li>

                    ))
                }
            </ul>
        </nav>

        <Outlet />
      
    </div>
  )
}

export default Move

const ListItems = ({name, link}) => {
    return <div>
        <NavLink className={({isActive}) => (isActive ? "text-[#0000FF]" : "text-gray-600")} to={link}>
            {name}
        </NavLink>
    </div>
}
