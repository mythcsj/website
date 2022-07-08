import { PureComponent } from 'react';
import { Button, Modal } from 'react-bootstrap';

type OnlineArticlePanelProps = {
  show?: boolean;
  title?: string;
  link?: string;
  onHide?: () => void;
};

export class OnlineArticlePanel extends PureComponent<OnlineArticlePanelProps> {
  render() {
    const { title, link, onHide } = this.props;
    return (
      <>
        <Modal {...this.props} fullscreen={true}>
          {title && (
            <Modal.Header>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
          )}
          <Modal.Body>
            <iframe
              scrolling="yes"
              frameBorder="0"
              style={{
                width: '100%',
                height: 1000,
                overflow: 'visible',
              }}
              src={link}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onHide}>关闭</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
