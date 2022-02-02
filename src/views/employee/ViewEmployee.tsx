import React from 'react';
import { Card, Grid } from '@material-ui/core';
import CardHeader from '../../components/card/CardHeader';
import TableEmployee from './TableEmployee';
import CreateEmployee from './CreateEmployee';

const ViewEmployee = () => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Card style={{ background: 'transparent', boxShadow: 'none' }}>
                    <CardHeader title="Employees" subtitle="Employee Page" />
                </Card>
            </Grid>

            <TableEmployee />
            <CreateEmployee />
        </Grid>
    )

};

export default ViewEmployee;