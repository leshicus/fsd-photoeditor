import React from 'react';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.settingsPanel}>
        SETTINGS
      </div>
      <div className={classes.iframePanel}>
        <iframe
          src="http://localhost:3002"
          title="Fsd PhotoEditor SDK"
          className={classes.iframeBody}
        />
      </div>

    </div>
  );
}

export default App;
