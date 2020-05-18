import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { useTheme } from 'styled-components';

import LoginPage from './LoginPage';
import QuestionsPage from './QuestionsPage';
import QuestionPage from './QuestionPage';
import NewQuestionPage from './NewQuestionPage';
import LeaderBoardPage from './LeaderBoardPage';
import PrivateRoute from './PrivateRoute';

import { handleInitialData } from '../actions/shared';

const App = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const loading = useSelector((state) => !state.users || !state.questions);

  useEffect(() => {
    function handleData() {
      dispatch(handleInitialData());
    }

    handleData();
  }, [dispatch]);

  return (
    <Router>
      <LoadingBar style={{ backgroundColor: theme.green }} />
      {!loading && (
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <PrivateRoute>
            <Route exact path="/">
              <Redirect to="/questions" />
            </Route>
            <Route exact path="/questions" component={QuestionsPage} />
            <Route exact path="/questions/:id" component={QuestionPage} />
            <Route exact path="/add" component={NewQuestionPage} />
            <Route exact path="/leaderboard" component={LeaderBoardPage} />
          </PrivateRoute>
        </Switch>
      )}
    </Router>
  );
};

export default App;
