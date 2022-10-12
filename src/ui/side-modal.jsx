import { Sidebar } from 'primereact/sidebar';

const SideModal = (props)=>{
    const visibleRight = true;
    return(
        <div>
            <Sidebar visible={visibleRight} position="right" onHide={props.onClose}>
                {props.children}
            </Sidebar>
        </div>
    )
};

export default SideModal;