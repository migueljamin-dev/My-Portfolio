import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import WorkIcon from '@material-ui/icons/Work';

import './timeline.css'
import { Typography } from '@material-ui/core';

const CustomTimeline = ({title,icon,children}) => {
 

    return ( 
        <Timeline className={'timeline'}>
        <TimelineItem>
          <TimelineSeparator className={'timeline-firstItem'}>
            <TimelineDot  className={'timeline-dot-header'}>
               {icon}   
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent><Typography variant='h6' className={'timeline-header'}>
              {title}
              </Typography>
              </TimelineContent>
        </TimelineItem>
            {children}
            </Timeline>
       
     );
};
 
export const CustomTimelineSeparator = () => (
    <TimelineSeparator className={'separator-padding'}>
            <TimelineDot variant={'outlined'} className={'timeline-dot'}/>
            <TimelineConnector />
          </TimelineSeparator>
);

export default CustomTimeline;