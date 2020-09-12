import React,{useState} from 'react'
import Conversations from './Conversation'
import Contacts from './Contacts'
import NewContactModal from './NewContactModal'
import NewConversationModal from './NewConversationModal'
import {Tab,Nav, Button, Modal} from 'react-bootstrap'
function Sidebar({id}) {

    const conversations_key='conversations'
    const contacts_key='contacts'
    const [activeKey,setActiveKey]=useState(conversations_key)
    const conversationOpen=activeKey===conversations_key
    const [modalOpen,setModalOpen]=useState(false)

    function closeModal(){
        setModalOpen(false)
    }

    return (
        <div style={{width:'30%'}} className='d-flex flex-column'>
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>

            <Nav variant='tabs' className='justify-content-center'>
                <Nav.Item>
                <Nav.Link eventKey={conversations_key}>Conversations</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey={contacts_key}>Contacts</Nav.Link>
                </Nav.Item>
            </Nav>

            <Tab.Content className='border-right overflow-auto flex-grow-1'>

                <Tab.Pane eventKey={conversations_key}>
                <Conversations/>
                </Tab.Pane>

                <Tab.Pane eventKey={contacts_key}>
                <Contacts/>
                </Tab.Pane>

            </Tab.Content>

            <div className='p-2 border-top border-right small'>
                Your Id:<span className='text-muted'>{id}</span>
            </div>
            <Button onClick={()=>setModalOpen(true)} className='rounded-0'>
                New {conversationOpen?'Conversation':'Contact'}
            </Button>
            </Tab.Container>

            <Modal show={modalOpen} onHide={closeModal}>
                {conversationOpen?<NewConversationModal closeModal={closeModal}/>:<NewContactModal closeModal={closeModal}/>}
            </Modal>

        </div>
    )
}

export default Sidebar
