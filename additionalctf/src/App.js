import logo from './logo.svg';

import { ThemeProvider,
  createTheme, 
  withStyles,
  Arwes,
  Header,
  Project,
  Words,
  SoundsProvider,
  createSounds
} from 'arwes';

const styles = theme => ({
  root: {
    padding: [theme.padding, 0],
    background: theme.background.primary.level0
  },
  title: {
    textDecoration: 'underline'
  }
});

const MyHeader = withStyles(styles)(({ classes, children }) => (
  <header className={classes.root}>
    <h1 className={classes.title}>{children}</h1>
  </header>
));

const mySounds = {
  shared: { volume: 1, },  // Shared sound settings
  players: {  // The player settings
    click: {  // With the name the player is created
      sound: { src: [process.env.PUBLIC_URL +'/static/sounds/click.mp3'] }  // The settings to pass to Howler
    },
    typing: {
      sound: { src: [process.env.PUBLIC_URL +'/static//sounds/typing.mp3'] },
      settings: { oneAtATime: true }  // The custom app settings
    },
    deploy: {
      sound: { src: [process.env.PUBLIC_URL +'/static/sounds/deploy.mp3'] },
      settings: { oneAtATime: true }
    },
  }
};

const App = () => (
  <ThemeProvider theme={createTheme()}>
    <SoundsProvider sounds={createSounds(mySounds)}>
      <Arwes animate show>
        <Header animate show>
          <Words animate show>My App</Words>
        </Header>
        <Project animate header='Status Update'><p>A SciFi Project</p></Project>       
      </Arwes>
    </SoundsProvider>
  </ThemeProvider>
);
export default App;
