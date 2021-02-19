import React,{useEffect} from "react";
import './Home.scss';
import { Modal } from 'antd';
import { PlusCircleOutlined }  from '@ant-design/icons';
import TaskForm from '../../components/TaskForm/TaskForm';

const Home = () => {

    useEffect(()=>{
        const allNewData = [{"Description":"New Task","Priority":"Priority 1","Status":"Todo","Company":"Company 1","Project":"Project 1","Task":"Task 1"}]
        window.localStorage.setItem('data', JSON.stringify(allNewData));
      },[])
      
    const [visible, setVisible] = React.useState(false);
    const showModal = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
          <>
            <div className="main-layout">
                <PlusCircleOutlined  onClick={showModal} />
                <Modal
                title="Create Task"
                visible={visible}
                onCancel={handleCancel}
                >
                <p><TaskForm /></p>
            </Modal>
            </div>
          </>
    );
};
export default Home;
  