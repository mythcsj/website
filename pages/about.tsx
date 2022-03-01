import { InferGetStaticPropsType } from 'next';
import { Card } from 'react-bootstrap';
import { myInfo, myInfoDetail } from './api/about';
import { lines } from './api/timeLine';
import Timeline from '../components/TimeLine';
import styles from '../styles/Home.module.scss';

export function getStaticProps() {
  return { props: { myInfo, myInfoDetail } };
}

export default function AboutPage({
  myInfo,
  myInfoDetail,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div className="m-2 d-flex justify-content-center">
        <Card className={`${styles.card}`}>
          <Card.Img src={myInfo.url} />
          <p className="m-2 text-center">{myInfo.title}</p>
        </Card>
      </div>

      <div className="text-center">
        <h4 className={`${styles.description}`}>{myInfo.description}</h4>
        <p>{myInfo.address}</p>
      </div>

      <div className="h-100 d-flex justify-content-center">
        <ul>
          {myInfoDetail.map(({ date, event }) => (
            <li key={date} className="m-2 d-flex align-content-center">
              {date} : {event}
            </li>
          ))}
        </ul>
      </div>

      <h4 className={`${styles.description} text-center`}>{myInfo.honor}</h4>

      <Timeline datas={lines} />

      <div className="m-5 d-flex justify-content-center">
        <Card
          className={`h-100 ${styles.card}`}
          style={{ backgroundColor: '#99CCCC' }}
        >
          <Card.Body style={{ height: '200px', width: '500px' }}>
            <Card.Title>关于本站</Card.Title>
            <Card.Text>
              <ol className="m-3">
                <li>专业吹水二十年，欢迎来打脸</li>
                <li>不涉及任何商业行为</li>
                <li>不发布、传送、传播、储存违反国家法律法规禁止的内容</li>
                <li>禁止违反法律法规、政策及公序良俗</li>
              </ol>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
