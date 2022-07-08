import type { PropsWithChildren } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

export type TimelineProps = PropsWithChildren<{
  datas: any[];
}>;

export default function Timeline({ datas }: TimelineProps) {
  return (
    <>
      <VerticalTimeline lineColor="green" animate={false}>
        {datas.map(({ id, title, icon: Icon, imageSrc, date, description }) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={date}
            dateClassName="text-danger"
            iconStyle={{ background: '#F0FFF0', color: 'bulle' }}
            icon={<Icon style={{ fontSize: '4rem' }} />}
            key={id}
          >
            <h3 className="vertical-timeline-element-title">{title}</h3>
            {!!imageSrc ? (
              <div className="d-flex justify-content-center">
                <img
                  src={imageSrc}
                  className="m-2"
                  style={{
                    height: '30rem',
                    width: '300px',
                    textAlign: 'center',
                  }}
                />
              </div>
            ) : (
              <></>
            )}
            {!!description ? <p>{description}</p> : <></>}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
}
