import './index.scss'

export default function SidebarItem({Icon, Text})  {
    return(
        <div className='componente-sidebarItem'>
            {Icon && <img src={Icon} alt="icone"/>} {Text}
        </div>
    )
}

