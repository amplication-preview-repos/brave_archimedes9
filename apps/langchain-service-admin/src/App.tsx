import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProcessedChunkList } from "./processedChunk/ProcessedChunkList";
import { ProcessedChunkCreate } from "./processedChunk/ProcessedChunkCreate";
import { ProcessedChunkEdit } from "./processedChunk/ProcessedChunkEdit";
import { ProcessedChunkShow } from "./processedChunk/ProcessedChunkShow";
import { BotInteractionList } from "./botInteraction/BotInteractionList";
import { BotInteractionCreate } from "./botInteraction/BotInteractionCreate";
import { BotInteractionEdit } from "./botInteraction/BotInteractionEdit";
import { BotInteractionShow } from "./botInteraction/BotInteractionShow";
import { TrainingDataList } from "./trainingData/TrainingDataList";
import { TrainingDataCreate } from "./trainingData/TrainingDataCreate";
import { TrainingDataEdit } from "./trainingData/TrainingDataEdit";
import { TrainingDataShow } from "./trainingData/TrainingDataShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"LangchainService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ProcessedChunk"
          list={ProcessedChunkList}
          edit={ProcessedChunkEdit}
          create={ProcessedChunkCreate}
          show={ProcessedChunkShow}
        />
        <Resource
          name="BotInteraction"
          list={BotInteractionList}
          edit={BotInteractionEdit}
          create={BotInteractionCreate}
          show={BotInteractionShow}
        />
        <Resource
          name="TrainingData"
          list={TrainingDataList}
          edit={TrainingDataEdit}
          create={TrainingDataCreate}
          show={TrainingDataShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
