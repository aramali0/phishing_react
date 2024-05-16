import { NavLink } from 'react-router-dom';

function NavCard({ name, icon, id }) {
  return (
    <NavLink 
      to={id} 
      className={({ isActive }) => 
        `mh-20 text-lg my-3 font-bold text-center b-10 flex justify-center ${
          isActive ? 'bg-blue-200' : 'bg-transparent'
        } hover:bg-blue-200`
      }
    >
      <span className="block w-15 h-15 text-center">
        <ion-icon name={icon} className="text-4xl"></ion-icon>
      </span>
      <span className="block">{name}</span>
    </NavLink>
  );
}

export default NavCard;

