import './App.css';
import Footer from './components/Footer';
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Homepage from './pages/Homepage';
import GameDashboard from './pages/GameDashboard';
import Gameroom from './pages/Gameroom';
import Profile from './pages/Profile';
import GameOne from "./pages/GameOne";
import GameTwo from "./pages/GameTwo";
import GameThree from "./pages/GameThree";
import GameFour from "./pages/GameFour";
import GameFive from "./pages/GameFive";
import Login from "./components/Login/login";
import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, ChannelList, LoadingIndicator, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance('3ehtxugzx3nd');
const userToken = 'wsb9uepxrsjr3vq8dyqdkmcwx8k72naubprrtpmntcs8b6nxsnwm5jhu8j57z5jf';

chatClient.connectUser(
  {
    _id: 3,
    username: 'goldy',
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'round-lab-9', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'Talk about React',
  members: ['round-lab-9'],
});

const filters = { type: 'messaging', members: { $in: ['round-lab-9'] } };
const sort = { last_message_at: -1 };

const CustomChannelPreview = (props) => {
  const { channel, setActiveChannel } = props;

  const { messages } = channel.state;
  const messagePreview = messages[messages.length - 1]?.text.slice(0, 30);

  return (
    <div onClick={() => setActiveChannel(channel)} style={{ margin: '12px' }}>
      <div>{channel.data.name || 'Unnamed Channel'}</div>
      <div style={{ fontSize: '14px' }}>{messagePreview}</div>
    </div>
  );
};

const CustomMessage = (props) => (
  <div>
    <b style={{ marginRight: '4px' }}>{props.message.user.name}</b> {props.message.text}
  </div>
);

function App() {
  const [chatClient, setChatClient] = useState(null);

  useEffect(() => {
    const initChat = async () => {
      const client = StreamChat.getInstance('dz5f4d5kzrue');

      await client.connectUser(
        {
          id: 'round-lab-9',
          name: 'round',
          image: 'https://getstream.io/random_png/?id=round-lab-9&name=round',
        },
        userToken,
      );

      setChatClient(client);
    };

    initChat();
  }, []);

  if (!chatClient) {
    return <LoadingIndicator />;
  }

  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Chat client={chatClient} theme='messaging light'>
        <ChannelList filters={filters} sort={sort} Preview={CustomChannelPreview} />
          <Channel channel={channel}>
            <Window>
              <ChannelHeader />
              <MessageList Message={CustomMessage}/>
              <MessageInput />
            </Window>
            <Thread />
          </Channel>
        </Chat>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/gamedashboard" component={GameDashboard} />
          <Route exact path="/gameroom" component={Gameroom} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/amoebaonline" component={GameOne} />
          <Route exact path="/narrowescape" component={GameTwo} />
          <Route exact path="/tapslime" component={GameThree} />
          <Route exact path="/fruitmachine" component={GameFour} />
          <Route exact path="/spacedash" component={GameFive} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}



export default App;
