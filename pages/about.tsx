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
    </>
  );
}
