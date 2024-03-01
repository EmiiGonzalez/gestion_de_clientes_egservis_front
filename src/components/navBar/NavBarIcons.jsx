import "../../assets/css/navBar/navBarIcons.css"

export const NavBarIcons = ({classIcon, contextText}) => {
  return (
    <div className="navBarIcon-container">
      <i className={`navBarIcon ${classIcon}`}></i>
      <p className="iconText">{contextText}</p>
    </div>
  )
}
