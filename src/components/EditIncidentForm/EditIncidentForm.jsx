import React, { useEffect, useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import SelectInputType from '../UI/SelectInput/SelectInputType';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReport, updateReport } from '../../store/actions/reportsActions';
import { useParams } from 'react-router';
import SelectInputStatus from '../UI/SelectInput/SelectInputStatus';
import SelectInputStaff from '../UI/SelectInput/SelectInputStaff';

const EditIncidentForm = (props) => {
  const dispatch = useDispatch();
  const PARAMS = useParams();
  const report = useSelector((state) => state.reports.report);
  const [state, setState] = useState({
    status: '',
    date: '',
    licenseNumber: '',
    color: '',
    type: '',
    ownerFullName: '',
    officer: '',
    clientId: '04b3683d-962d-4ea8-b431-94a40828799e',
    description: '',
    resolution: '',
  });

  console.log(state);

  useEffect(() => {
    dispatch(fetchReport(PARAMS.id));
  }, [dispatch, PARAMS]);

  useEffect(() => {
    setState({
      status: report.status,
      licenseNumber: report.licenseNumber,
      color: report.color,
      type: report.type,
      ownerFullName: report.ownerFullName,
      officer: report.officer,
      description: report.description,
      resolution: report.resolution,
    });
  }, [report]);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const selectChangeHandler = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateReport(PARAMS.id, { ...state }));
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Grid container direction='column' spacing={2}>
        <Grid item>
          <TextField
            fullWidth
            variant='outlined'
            label='Bike license number'
            name='licenseNumber'
            onChange={inputChangeHandler}
            value={state.licenseNumber}
            required
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            variant='outlined'
            label='Color'
            name='color'
            onChange={inputChangeHandler}
            value={state.color}
            required
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            variant='outlined'
            label='Owner Full Name'
            name='ownerFullName'
            onChange={inputChangeHandler}
            value={state.ownerFullName}
            required
          />
        </Grid>
        <Grid item container alignItems='center'>
          <SelectInputType
            name='type'
            val={state.type}
            onChange={selectChangeHandler}
          />
          <TextField
            id='date'
            label='Date'
            name='date'
            style={{ width: '20rem', marginLeft: '4rem' }}
            type='date'
            required
            onChange={inputChangeHandler}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item>
          <SelectInputStatus
            name='status'
            val={state.status}
            onChange={selectChangeHandler}
          />
          <SelectInputStaff
            name='officer'
            val={state.officer}
            onChange={selectChangeHandler}
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            multiline
            rows={3}
            variant='outlined'
            label='Description'
            name='description'
            onChange={inputChangeHandler}
            value={state.description}
            required
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            multiline
            rows={3}
            variant='outlined'
            label='Resolution'
            name='resolution'
            onChange={inputChangeHandler}
            value={state.resolution}
            required={state.status === 'done' ? true : false}
            disabled={state.status === 'done' ? false : true}
          />
        </Grid>

        <Grid item>
          <Button type='submit' color='primary'>
            Update
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default EditIncidentForm;
