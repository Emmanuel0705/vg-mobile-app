import React from 'react';
import Modal from 'react-native-modal';
import {Layout} from '@ui-kitten/components';
import style from '../assets/style';

function Modall(props) {
  const {isModalVisible} = props;
  return (
    <Modal isVisible={isModalVisible}>
      <Layout
        style={[
          style.displayFlex,
          style.authContainerpadding,
          style.roundededges,
        ]}>
        {props.body}
      </Layout>
    </Modal>
  );
}

export default Modall;
