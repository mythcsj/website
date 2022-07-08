import { PureComponent } from 'react';
import { Button, Modal } from 'react-bootstrap';
import styles from '../styles/Home.module.scss';

type OnlineArticlePanelProps = {
  show?: boolean;
  onHide?: () => void;
};

export class OnlineArticlePanel extends PureComponent<OnlineArticlePanelProps> {
  render() {
    const { show, onHide } = this.props;

    return (
      <>
        {/* <Modal show={show} onHide={onHide} bsSize="large">
          <Modal.Header>
            <Modal.Title>xxxx</Modal.Title>
            <Modal.Body>
              <iframe
                ref="iframe"
                scrolling="yes"
                frameBorder="0"
                style={{
                  width: '100%',
                  height: 630,
                  overflow: 'visible',
                }}
                src=""
              /> 
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={onHide}>关闭</Button>
            </Modal.Footer>
          </Modal.Header>
        </Modal> */}

        <Modal {...this.props} fullscreen={true}>
          <Modal.Header closeButton>
            <Modal.Title>对话框标题</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              scrolling="yes"
              frameBorder="0"
              style={{
                width: '100%',
                height: 630,
                overflow: 'visible',
              }}
              src="https://mp.weixin.qq.com/s/HBHoXaEDWVD7SV96xZjDAQ"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>取消</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
