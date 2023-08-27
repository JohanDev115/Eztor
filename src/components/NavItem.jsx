import { NavLink } from "react-router-dom"

function NavItem(props) {
  return (
    <li className={`${props.color} text-md font-semibold hover:text-primary`}>
      <NavLink to={props.to} className={({isActive}) =>
        isActive && props.to ? `underline underline-offset-4 decoration-primary` : undefined
      }>{props.name}</NavLink>
    </li>
  )
}

export { NavItem }