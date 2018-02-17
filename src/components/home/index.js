import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { tokenExpired } from "../../actions";
import Layout from '../common/Layout';
import Style from './style';

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class Home extends Component {

  render() {
    return (
      <Layout>
        <div style={{ width: 1200, height: 500 }}>
          <Paper style={{ height: 300 }}>
            <Table style={{ }}>
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell numeric>Calories</TableCell>
                <TableCell numeric>Fat (g)</TableCell>
                <TableCell numeric>Carbs (g)</TableCell>
                <TableCell numeric>Protein (g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(n => {
                return (
                  <TableRow key={n.id}>
                    <TableCell>{n.name}</TableCell>
                    <TableCell numeric>{n.calories}</TableCell>
                    <TableCell numeric>{n.fat}</TableCell>
                    <TableCell numeric>{n.carbs}</TableCell>
                    <TableCell numeric>{n.protein}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          </Paper>
        </div>
      </Layout>
    );
  }
};

const mapStateToProps = state => {
  const { token, isAuth } = state.auth;
  return { token, isAuth };
}

export default connect(mapStateToProps, {
  tokenExpired
})(Home);