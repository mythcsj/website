import { InferGetStaticPropsType } from 'next';
import { Card } from 'react-bootstrap';
import styles from '../styles/Home.module.scss';
import { myInfo, myInfoDetail } from './api/about';

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
        <h5 className={`${styles.description}`}>{myInfo.description}</h5>
        <p>{myInfo.address}</p>
      </div>

      <div className="h-100 d-flex justify-content-center">
        <ul>
          {myInfoDetail.map(({ date, event }) => (
            <li key={date} className="d-flex align-content-center">
              {date} : {event}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
