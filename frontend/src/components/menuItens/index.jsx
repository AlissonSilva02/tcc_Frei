import './index.scss'

const SidebarItem = ({Icon, Text}) => {
    return(
        <div className='componente-sidebarItem'>
            <img src={Icon} alt="icone"/> {Text}
        </div>
    )
}

export default SidebarItem