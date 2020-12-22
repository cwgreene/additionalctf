import logo from './logo.svg';

import { ThemeProvider,
  createTheme, 
  withStyles,
  Arwes,
  Header,
  Project,
  Words,
  SoundsProvider,
  createSounds,
  Frame,
  Heading
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
        <div style={{padding:20}}>
        <Heading animate><Words animate show>Additional CTF</Words></Heading>
        <Project animate show header='Status Update'>{anim => (<Words animate show={anim.entered}>A SciFi Project</Words>)}</Project>
        <Frame animate><Words>This is a frame</Words><Words>hello</Words></Frame>
        </div>
      </Arwes>
    </SoundsProvider>
  </ThemeProvider>
);
export default App;
