import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import { deleteReport, fetchReports } from '../../store/actions/reportsActions';
import IncidentItem from '../../components/IncidentItem/IncidentItem';

const Incident = () => {
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.reports.reports);
  const deleteMessage = useSelector((state) => state.reports.deleteMessage);

  useEffect(() => {
    dispatch(fetchReports());
  }, [dispatch, deleteMessage]);

  const deleteHandler = (id) => {
    dispatch(deleteReport(id));
  };

  return (
    <Grid container direction='column' spacing={2}>
      <Grid
        item
        container
        direction='row'
        justify='space-between'
        alignItems='center'>
        <Grid item>
          <Typography variant='h3'>All incidents</Typography>
        </Grid>
      </Grid>
      <Grid item container direction='row' spacing={2}>
        {reports.map((report) => {
          return (
            <IncidentItem
              report={report}
              key={report._id}
              deleteHandler={deleteHandler}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Incident;
