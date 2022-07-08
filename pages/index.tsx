import { PureComponent } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import { OnlineArticlePanel } from '../components/OnlineArticlePanel';
import PageHead from '../components/PageHead';
import styles from '../styles/Home.module.scss';
import { mainNav } from './api/home';

export default class HomePage extends PureComponent {
  state = {
    show: false,
    title: '',
    link: '',
  };
  render() {
    let close = () => this.setState({ show: false });
    return (
      <>
        <PageHead title="mythcsj" />

        <main
          className={`flex-fill d-flex flex-column justify-content-center align-items-center ${styles.main}`}
        >
          <h1 className={`m-0 text-center ${styles.title}`}>
            welcome to mythcsj space
          </h1>

          <p className={`text-center fs-4 ${styles.description}`}>
            一个被代码耽误的诗人
          </p>

          <div
            className={`d-flex flex-wrap flex-column flex-sm-row justify-content-center align-items-center `}
          >
            {mainNav.map(({ link, title, summary }) => (
              <Col sm={12} key={title}>
                <Card
                  key={link}
                  className={`m-3 p-4 rounded-3 border ${styles.card}`}
                  tabIndex={-1}
                >
                  <Card.Body>
                    <Card.Title as="h2" className="fs-4 mb-3">
                      {title}
                    </Card.Title>
                    <Card.Text className="fs-5">{summary}</Card.Text>

                    <OnlineArticlePanel
                      key={this.state.title}
                      show={this.state.show}
                      link={this.state.link}
                      onHide={() => {
                        this.setState({ show: false });
                      }}
                    ></OnlineArticlePanel>

                    <Button
                      variant="primary"
                      onClick={() => {
                        this.setState({ show: true, title, link });
                      }}
                    >
                      查看详情
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </div>
        </main>
      </>
    );
  }
}
